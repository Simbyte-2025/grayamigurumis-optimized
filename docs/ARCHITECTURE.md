# GrayAmigurumis – Arquitectura del Chatbot

Este documento describe la arquitectura técnica del chatbot integrado en el sitio de GrayAmigurumis, incluyendo componentes, flujos, manejo de errores y modos de operación (real y mock).

---

## 1. Objetivos de diseño

- **Seguridad:** Nunca exponer API keys en el frontend.
- **Simplicidad:** Un solo endpoint HTTP para el chatbot (`/chat/completions`), same-origin.
- **Robustez:** Manejar errores transitorios de la API de OpenRouter con reintentos y backoff exponencial.
- **Productividad:** Permitir desarrollo y pruebas en modo mock (sin consumir cuota de API).
- **Observabilidad:** Mensajes de log claros para errores y reintentos.

---

## 2. Componentes

### 2.1 Frontend (React + Vite)

Ubicación principal:

- `client/src/services/chatService.ts`

Responsabilidades:

- Construir el historial de conversación (`conversationHistory`).
- Inyectar un mensaje de sistema (`SYSTEM_INSTRUCTION`) alineado con la identidad de GrayAmigurumis.
- Llamar al endpoint same-origin `POST /chat/completions`.
- Implementar fallback entre varios modelos FREE de OpenRouter.
- Soportar modo mock de frontend controlado por `VITE_CHAT_MOCK`.

### 2.2 Backend (Cloudflare Pages Functions)

Ubicación:

- `functions/chat/completions.ts`

Expuesto como:

- `POST /chat/completions`
- `OPTIONS /chat/completions` (preflight CORS)

Responsabilidades:

- Validar el cuerpo de la petición (`messages` obligatorio).
- Leer la API key desde `OPENROUTER_API_KEY`.
- Enviar la petición a `https://openrouter.ai/api/v1/chat/completions`.
- Implementar **retry con backoff exponencial**:
  - Errores retriables:
    - HTTP 429 (rate limit)
    - HTTP 5xx
    - Errores de red (fetch exceptions)
  - Reintentos:
    - Máximo: 3
    - Backoff: 500ms, 1000ms, 2000ms
- Reenviar la respuesta de OpenRouter al frontend con headers CORS correctos.
- Soportar un modo mock de backend (`CHAT_MOCK_MODE`, `?mock=1`).

---

## 3. Flujo de petición

1. El usuario escribe un mensaje en el chatbot.
2. El componente de React llama a `sendChatMessage(userMessage, conversationHistory)`.
3. `sendChatMessage`:
   - Si `VITE_CHAT_MOCK=true`:
     - No hace llamadas HTTP y devuelve una respuesta construida localmente.
   - Si no:
     - Convierte el historial a formato de OpenRouter (`role`, `content`).
     - Itera sobre `FREE_MODELS` e intenta cada uno llamando a `/chat/completions`.

4. La Pages Function (`functions/chat/completions.ts`):
   - Aplica CORS restringido a:
     - `https://grayamigurumis.pages.dev`
     - `https://grayamigurumis.com`
   - Si `CHAT_MOCK_MODE="true"` o la query `?mock=1` está presente:
     - Devuelve una respuesta de prueba con estructura de `chat.completion`.
   - Si no está en modo mock:
     - Valida que `messages` sea un array.
     - Llama a OpenRouter usando `callOpenRouterWithRetry(...)`.
     - Si OpenRouter responde con éxito (2xx o error no retriable):
       - Reenvía el cuerpo tal cual al frontend, ajustando únicamente los headers.
     - Si después de los 3 reintentos sigue fallando:
       - Devuelve un error 502 con información de que ocurrió un fallo tras reintentos.

5. El frontend:
   - Lee `data.choices[0].message.content`.
   - Muestra el texto en la interfaz del chatbot.

---

## 4. Modo mock

### 4.1 Frontend – `VITE_CHAT_MOCK`

- Variable de entorno (Vite) controlada en `client/.env`.
- Cuando `VITE_CHAT_MOCK=true`:
  - `sendChatMessage` no hace peticiones HTTP.
  - Devuelve un texto de prueba etiquetado como `[MODO DEMO]`.
  - Útil para:
    - Desarrollo local sin Internet.
    - Trabajar en el diseño visual del chatbot sin depender de la API.

### 4.2 Backend – `CHAT_MOCK_MODE` y `?mock=1`

- Variable de entorno en Cloudflare Pages / Functions:
  - `CHAT_MOCK_MODE="true"` activa el mock para todas las peticiones.
- Parámetro de query:
  - `/chat/completions?mock=1` fuerza el modo mock para esa petición.
- En modo mock, el backend:
  - Construye un objeto con la misma forma general que OpenRouter (`id`, `created`, `model`, `choices[...]`).
  - Inserta un mensaje etiquetado como `[MODO DEMO BACKEND]`.
  - No realiza ninguna llamada a OpenRouter.

---

## 5. Manejo de errores y reintentos

### 5.1 Tipos de errores

- **Errores de validación:**
  - Body inválido, falta `messages`, etc.
  - Respuesta: HTTP 400 con JSON `{ error: "Invalid request: ..." }`.

- **Errores de configuración:**
  - Falta `OPENROUTER_API_KEY`.
  - Respuesta: HTTP 500 con JSON `{ error: "API key not configured..." }`.

- **Errores de OpenRouter (retriables):**
  - HTTP 429 (rate limit).
  - HTTP 5xx.
  - Excepciones de red (`fetch` lanza error).
  - Política:
    - Hasta 3 intentos.
    - Backoff exponencial: 500ms, 1000ms, 2000ms.

- **Errores definitivos después de reintentos:**
  - Respuesta: HTTP 502 con JSON `{ error: "OpenRouter API error after retries", message: "..." }`.

### 5.2 Logging

- En reintentos:
  - `console.warn` con el código de estado y el número de intento.
- En fallo final:
  - `console.error` con el último error capturado.
- En modo mock:
  - Logs claros si algo falla generando la respuesta simulada.

---

## 6. Variables de entorno

### 6.1 Cloudflare Pages / Functions

Configurar en **Pages → Settings → Environment Variables**:

- `OPENROUTER_API_KEY`
  - Obligatoria.
  - Define la API key de OpenRouter.
  - Nunca debe aparecer en código fuente ni en el frontend.

- `CHAT_MOCK_MODE`
  - Opcional.
  - `"true"` para activar modo mock backend.
  - Vacío o `"false"` para usar OpenRouter real.

### 6.2 Frontend (Vite)

Archivo plantilla:

- `client/.env.example`

Variables:

- `VITE_WHATSAPP_PHONE`
- `VITE_CHAT_MOCK`

El archivo real `client/.env` no se commitea (ignoradado vía `.gitignore`).

---

## 7. Desarrollo local

### 7.1 Flujo recomendado

1. Copiar plantilla de entorno:

   ```bash
   cd client
   cp .env.example .env
   ```

2. Ajustar:

   ```bash
   VITE_CHAT_MOCK=true
   ```

3. Ejecutar el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

4. Probar el chatbot:
   - Verificar que las respuestas indican claramente que están en modo demo.
   - Comprobar que no hay llamadas fallidas a `/chat/completions` en la pestaña Network.

### 7.2 Pruebas con backend real

1. Desactivar modo mock en frontend:

   ```bash
   VITE_CHAT_MOCK=false
   ```

2. Asegurarse de que la Pages Function:
   - Tiene `OPENROUTER_API_KEY` configurada.
   - No está en modo mock (`CHAT_MOCK_MODE` vacío o `"false"`).

3. Probar:
   - El chatbot debe enviar peticiones reales a `/chat/completions`.
   - La API debe responder con contenido generado por los modelos de OpenRouter.

---

## 8. Seguridad

- Ninguna API key se almacena en el código fuente ni en el bundle del frontend.
- CORS solo permite orígenes conocidos:
  - `https://grayamigurumis.pages.dev`
  - `https://grayamigurumis.com`
- El modo mock está claramente etiquetado tanto en frontend como backend para evitar confusiones.
- Mensajes de error enviados al frontend no exponen detalles sensibles de la configuración interna.

---

## 9. Mantenimiento futuro

- Para añadir o cambiar modelos de OpenRouter:
  - Editar `FREE_MODELS` en `client/src/services/chatService.ts`.
  - Mantener un orden lógico: más rápidos primero, más pesados al final.
- Para ajustar la estrategia de backoff:
  - Cambiar `MAX_RETRIES` y `INITIAL_BACKOFF_MS` en `functions/chat/completions.ts`.
- Para desactivar temporalmente la API real:
  - Activar `CHAT_MOCK_MODE="true"` en el entorno de Cloudflare (por ejemplo, en previews).
