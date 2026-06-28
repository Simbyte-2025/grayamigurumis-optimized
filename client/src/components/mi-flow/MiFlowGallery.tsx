/*
 * GALERÍA — Placeholders para fotos reales
 * ─────────────────────────────────────────
 * Reemplazar cada <GalleryPlaceholder> con una etiqueta <img> real.
 * Ejemplo:
 *   <img
 *     src="/fotos/antes-caniche-01.jpg"
 *     alt="Caniche antes del corte"
 *     className="w-full h-full object-cover"
 *   />
 *
 * Las fotos sugeridas son pares "antes / después":
 *   - Mi Flow recomienda fotos cuadradas o verticales (4:5 mínimo).
 *   - Nombrar: antes-raza-numero.jpg / despues-raza-numero.jpg
 */

const placeholders = [
  { id: 1, label: 'Antes', breed: 'Foto real aquí',  color: '#1a1a1a' },
  { id: 2, label: 'Después', breed: 'Foto real aquí', color: '#1C1C1C' },
  { id: 3, label: 'Antes',   breed: 'Foto real aquí', color: '#1a1a1a' },
  { id: 4, label: 'Después', breed: 'Foto real aquí', color: '#1C1C1C' },
  { id: 5, label: 'Antes',   breed: 'Foto real aquí', color: '#1a1a1a' },
  { id: 6, label: 'Después', breed: 'Foto real aquí', color: '#1C1C1C' },
] as const;

export default function MiFlowGallery() {
  return (
    <section id="galeria" className="bg-[#141414] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-[#FF4DA6] text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            <PawInline /> Resultados <PawInline />
          </div>
          <h2
            className="mf-display text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            Antes y{' '}
            <span className="text-[#FF4DA6]">después</span>
          </h2>
          <p
            className="text-gray-400 text-sm mt-3 max-w-md mx-auto"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            Aquí irán las fotos reales de los trabajos del local. Cada par muestra la transformación de la mascota.
          </p>
        </div>

        {/* Pair layout: 3 columns of before/after pairs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {placeholders.map((p) => (
            <GalleryPlaceholder key={p.id} item={p} />
          ))}
        </div>

        {/* Note for developer */}
        <p
          className="text-center text-gray-600 text-xs mt-8"
          style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          💡 Reemplazar los placeholders con fotos reales del local — ver comentarios en <code>MiFlowGallery.tsx</code>
        </p>
      </div>
    </section>
  );
}

type PlaceholderItem = {
  id: number;
  label: string;
  breed: string;
  color: string;
};

function GalleryPlaceholder({ item: p }: { item: PlaceholderItem }) {
  const isBefore  = p.label === 'Antes';
  const tagColor  = isBefore ? '#FFC857' : '#FF4DA6';

  return (
    <div className="mf-card-lift relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/8">
      {/*
       * ──────────────────────────────────────────────
       * PLACEHOLDER — reemplazar este bloque con <img>
       * ──────────────────────────────────────────────
       */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{ background: p.color }}
      >
        {/* Dog silhouette placeholder */}
        <DogSilhouette color={tagColor} />
        <span
          className="text-gray-600 text-xs text-center px-4"
          style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          {p.breed}
        </span>
      </div>
      {/* ──────────────────────────────────────────────── */}

      {/* Before/After tag */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className="text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
          style={{
            background: tagColor,
            color: isBefore ? '#0E0E0E' : 'white',
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
        >
          {p.label}
        </span>
      </div>
    </div>
  );
}

/* ── Dog silhouette for placeholder ─────────────────────── */
function DogSilhouette({ color }: { color: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill={color}
      opacity="0.18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Simple dog silhouette */}
      <ellipse cx="32" cy="30" rx="20" ry="18" />
      <ellipse cx="18" cy="22" rx="8" ry="14" transform="rotate(-15 18 22)" />
      <ellipse cx="46" cy="22" rx="8" ry="14" transform="rotate(15 46 22)" />
      <circle  cx="26" cy="26" r="3" fill="#0E0E0E" />
      <circle  cx="38" cy="26" r="3" fill="#0E0E0E" />
      <ellipse cx="32" cy="36" rx="5" ry="3" fill="#0E0E0E" opacity="0.4" />
    </svg>
  );
}

function PawInline() {
  return (
    <svg width="12" height="12" viewBox="0 0 30 30" fill="currentColor" aria-hidden="true">
      <ellipse cx="15" cy="20" rx="7" ry="5" />
      <circle cx="6"  cy="13" r="3.5" />
      <circle cx="11" cy="8"  r="3.5" />
      <circle cx="19" cy="8"  r="3.5" />
      <circle cx="24" cy="13" r="3.5" />
    </svg>
  );
}
