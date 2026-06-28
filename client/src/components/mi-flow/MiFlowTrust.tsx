const benefits = [
  {
    icon: <CalendarIcon />,
    color: '#FF4DA6',
    title: 'Atención con reserva',
    desc: 'Tu mascota tiene su momento exclusivo. Sin esperas largas, con atención personalizada.',
  },
  {
    icon: <ScissorsIcon />,
    color: '#FFC857',
    title: 'Según tipo de manto',
    desc: 'Cada corte y baño se adapta al pelaje de tu perro: liso, rizado, largo o doble capa.',
  },
  {
    icon: <LeafIcon />,
    color: '#FF4DA6',
    title: 'Productos aptos para mascotas',
    desc: 'Usamos productos seguros, incluyendo tintes de colores vegetales aptos para mascotas.',
  },
  {
    icon: <PinIcon />,
    color: '#FFC857',
    title: 'Ubicación céntrica',
    desc: 'Estamos en Av. Tomás Argomedo 2016, en el corazón de Quinta de Tilcoco.',
  },
] as const;

export default function MiFlowTrust() {
  return (
    <section className="bg-[#141414] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-[#FF4DA6] text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            <PawInline /> Por qué elegirnos <PawInline />
          </div>
          <h2
            className="mf-display text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            Cuidado que{' '}
            <span className="text-[#FF4DA6]">se nota</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="mf-card-lift bg-[#1C1C1C] rounded-2xl p-6 border border-white/8 flex flex-col items-center text-center gap-4"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${b.color}20`, border: `2px solid ${b.color}40` }}
              >
                <span style={{ color: b.color }}>{b.icon}</span>
              </div>

              <h3
                className="text-white font-bold text-base leading-snug"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                {b.title}
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Icons ───────────────────────────────────────────────── */
function CalendarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8"  y1="2" x2="8"  y2="6" />
      <line x1="3"  y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6"  cy="6"  r="3" />
      <circle cx="6"  cy="18" r="3" />
      <line x1="20" y1="4"  x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34a10 10 0 0013.71-12.35" />
      <path d="M17 8l-5 5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
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
