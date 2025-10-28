import React, { useState, useEffect } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import "./chat.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mensaje de bienvenida al abrir por primera vez
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "¡Hola 🧵 soy GrayBot! Puedo ayudarte a imaginar tu amigurumi personalizado. Cuéntame qué te gustaría crear.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simular respuesta del bot (placeholder para testing)
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: `Qué bonita idea 💖 Un amigurumi con esas características podría verse así: "${input.trim()}". ¡Me encanta! Podríamos trabajar en los detalles como colores, tamaño y accesorios. ¿Te gustaría agregar algo más especial?`,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);

    // TODO: Integrar con Gemini API aquí cuando esté listo
    // const response = await fetch('/api/generate-idea', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ prompt: input.trim() })
    // });
    // const data = await response.json();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante */}
      <ChatButton onClick={toggleChat} isOpen={isOpen} />

      {/* Ventana del chat */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSendMessage={handleSendMessage}
          onClose={closeChat}
        />
      )}
    </>
  );
}
