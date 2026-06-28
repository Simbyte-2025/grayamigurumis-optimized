const WA_URL =
  'https://wa.me/56926249565?text=Hola%20Mi%20Flow%2C%20quiero%20reservar%20una%20hora%20para%20mi%20mascota.%20Servicio%3A%20';

const services = [
  {
    icon: <BathIcon />,
    color: '#FF4DA6',
    title: 'Baño estético o sanitario',
    desc: 'Baño completo con shampoo y acondicionador aptos para mascotas, secado y peinado. El baño sanitario está orientado a higiene básica.',
    waText: 'Ba%C3%B1o%20est%C3%A9tico%20o%20sanitario',
  },
  {
    icon: <EarIcon />,
    color: '#FFC857',
    title: 'Limpieza de oídos',
    desc: 'Limpieza suave del canal auditivo con productos seguros para prevenir acumulación de cera y suciedad.',
    waText: 'Limpieza%20de%20o%C3%ADdos',
  },
  {
    icon: <NailIcon />,
    color: '#FF4DA6',
    title: 'Corte de uñas',
    desc: 'Corte cuidadoso y preciso para mantener las uñas de tu mascota en el largo adecuado y evitar problemas en sus patas.',
    waText: 'Corte%20de%20u%C3%B1as',
  },
  {
    icon: <DrierIcon />,
    color: '#FFC857',
    title: 'Corte según su manto',
    desc: 'Corte de pelo personalizado al tipo de pelaje de tu perro: largo, rizado, liso o doble capa, con el estilo que necesite.',
    waText: 'Corte%20de%20pelo%20seg%C3%BAn%20su%20manto',
  },
  {
    icon: <PaletteIcon />,
    color: '#FF4DA6',
    title: 'Tinte vegetal',
    desc: 'Colores llamativos con tintes 100% vegetales, formulados especialmente para el pelaje y la piel de las mascotas.',
    waText: 'Tinte%20vegetal%20apto%20para%20mascotas',
  },
] as const;

export default function MiFlowServices() {
  return (
    <section id="servicios" className="mf-paws-dark bg-[#0E0E0E] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-[#FF4DA6] text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            <PawInline /> Lo que hacemos <PawInline />
          </div>
          <h2
            className="mf-display text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            Nuestros{' '}
            <span className="text-[#FF4DA6]">servicios</span>
          </h2>
          <p
            className="text-gray-400 mt-3 max-w-lg mx-auto text-sm"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            Cada servicio se realiza con cuidado, usando productos aptos para mascotas y respetando el tiempo de tu perro.
          </p>
        </div>

        {/* Grid 2-col mobile → 3-col md → 5 (2+3 or centered) on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = {
  icon: React.ReactNode;
  color: string;
  title: string;
  desc: string;
  waText: string;
};

function ServiceCard({ service: s, index: i, total }: { service: Service; index: number; total: number }) {
  const isLast = i === total - 1;
  const isOdd  = total % 2 !== 0;

  return (
    <div
      className={`mf-card-lift bg-[#1C1C1C] rounded-2xl border border-white/8 overflow-hidden flex flex-col ${
        isLast && isOdd ? 'col-span-2 md:col-span-1' : ''
      }`}
    >
      {/* Icon area */}
      <div
        className="px-5 pt-6 pb-4"
        style={{ borderBottom: `2px solid ${s.color}30` }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
          style={{ background: `${s.color}18`, color: s.color }}
        >
          {s.icon}
        </div>
        <h3
          className="text-white font-bold text-base leading-snug"
          style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          {s.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="px-5 py-4 text-gray-400 text-sm leading-relaxed flex-1"
        style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
      >
        {s.desc}
      </p>

      {/* CTA */}
      <div className="px-5 pb-5">
        <a
          href={`${WA_URL}${s.waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full text-xs font-bold py-2.5 px-3 rounded-xl transition-colors duration-200 border"
          style={{
            color: s.color,
            borderColor: `${s.color}40`,
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = `${s.color}15`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          <WhatsAppMini color={s.color} />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ── Service Icons (line style, matching brand guide) ─────── */
function BathIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z" />
      <path d="M6 12V5a2 2 0 012-2h6" />
      <path d="M14 3a2 2 0 012 2v7" />
      <path d="M9 7h2" />
    </svg>
  );
}

function EarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 8.5A6.5 6.5 0 0119 8.5c0 3-1.5 5-3 6.5-.9.9-1.5 2-1.5 3.5 0 1-.8 2-2 2s-2-1-2-2" />
      <path d="M12 8.5c0 2-1.5 3-2 4" />
    </svg>
  );
}

function NailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h12v7a6 6 0 01-12 0V3z" />
      <path d="M8 21v-5" />
      <path d="M16 21v-5" />
      <path d="M12 21v-3" />
    </svg>
  );
}

function DrierIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 3a1 1 0 000 14h7a5 5 0 000-10H5" />
      <path d="M19 13l2-2-2-2" />
      <path d="M14 11h7" />
      <path d="M9 19l-2 2" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function WhatsAppMini({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
