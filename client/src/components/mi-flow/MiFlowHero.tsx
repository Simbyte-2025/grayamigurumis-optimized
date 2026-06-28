const WA_URL =
  'https://wa.me/56926249565?text=Hola%20Mi%20Flow%2C%20quiero%20reservar%20una%20hora%20para%20mi%20mascota.%20Servicio%3A%20';

export default function MiFlowHero() {
  return (
    <section
      id="inicio"
      className="mf-paws-dark relative min-h-screen bg-[#0E0E0E] flex items-center pt-16"
    >
      {/* Pink gradient orb — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #FF4DA6 0%, transparent 70%)' }}
      />
      {/* Gold gradient orb — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #FFC857 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: copy ─────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Location badge */}
            <div className="mf-rise-1 inline-flex items-center gap-2 bg-[#FF4DA6]/15 border border-[#FF4DA6]/30 text-[#FF4DA6] text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              <PinIcon />
              Quinta de Tilcoco, Chile
            </div>

            {/* H1 */}
            <h1
              className="mf-rise-2 mf-display text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 3.6rem)' }}
            >
              Peluquería canina
              <br />
              en{' '}
              <span className="text-[#FF4DA6]">Quinta de Tilcoco</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mf-rise-3 text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif", fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}
            >
              Baños, cortes, uñas, limpieza de oídos y estética para que tu mascota
              se vea y se sienta mejor.
            </p>

            {/* CTAs */}
            <div className="mf-rise-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mf-wa-pulse inline-flex items-center justify-center gap-2 bg-[#FF4DA6] hover:bg-[#e03d90] text-white font-bold text-base px-7 py-4 rounded-full transition-colors duration-200"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                <WhatsAppIcon />
                Reservar hora
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#FF4DA6] text-[#FF4DA6] hover:bg-[#FF4DA6]/10 font-bold text-base px-7 py-4 rounded-full transition-colors duration-200"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                Ver servicios
              </a>
            </div>

            {/* Quick trust pills */}
            <div
              className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              {['Atención con reserva', 'Tinte vegetal apto mascotas', 'Ubicación céntrica'].map((t) => (
                <span
                  key={t}
                  className="text-xs text-[#FFB6D5] bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                >
                  🐾 {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: visual card ──────────────────────────── */}
          <div className="flex-shrink-0 w-full max-w-[340px] lg:max-w-[380px]">
            <DogCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Dog card decorativa ─────────────────────────────────── */
function DogCard() {
  return (
    <div className="relative">
      {/* Outer glow ring */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-50 blur-xl"
        style={{ background: 'linear-gradient(135deg, #FF4DA6, #FFC857)' }}
      />

      {/* Main card */}
      <div className="relative mf-paws-dark bg-gradient-to-br from-[#1C1C1C] to-[#0E0E0E] rounded-3xl border border-[#FF4DA6]/40 p-6 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div
              className="text-[#FF4DA6] font-black text-xl leading-none"
              style={{ fontFamily: "'Lilita One', Impact, sans-serif" }}
            >
              MI FLOW
            </div>
            <div
              className="text-[#FFB6D5] text-[10px] tracking-widest uppercase mt-0.5"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              Peluquería Canina
            </div>
          </div>
          <div className="flex gap-1.5">
            <PawSmall color="#FF4DA6" />
            <PawSmall color="#FFC857" />
            <PawSmall color="#FFB6D5" />
          </div>
        </div>

        {/* Dog face SVG illustration */}
        <div className="flex justify-center my-2">
          <DogFaceSVG />
        </div>

        {/* Info row */}
        <div
          className="mt-5 pt-4 border-t border-white/10 text-center"
          style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          <p className="text-[#FFC857] text-xs font-bold tracking-widest uppercase mb-1">Cuidamos su estilo</p>
          <p className="text-gray-400 text-xs">Cuidamos su bienestar</p>
        </div>

        {/* Bottom badge */}
        <div className="mt-4 bg-[#FF4DA6] rounded-2xl py-3 px-4 flex items-center justify-between">
          <span
            className="text-white text-xs font-bold"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            +56 9 2624 9565
          </span>
          <span className="text-white text-xs" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
            @miflow5
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── SVG de cara de perro ────────────────────────────────── */
function DogFaceSVG() {
  return (
    <svg
      viewBox="0 0 180 180"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ilustración de perro Mi Flow"
      role="img"
    >
      {/* Glow behind head */}
      <circle cx="90" cy="95" r="72" fill="#FF4DA6" opacity="0.10" />

      {/* Left ear */}
      <ellipse cx="44" cy="72" rx="26" ry="36" fill="#d4956a" transform="rotate(-12 44 72)" />
      <ellipse cx="44" cy="72" rx="16" ry="26" fill="#c0784a" transform="rotate(-12 44 72)" />

      {/* Right ear */}
      <ellipse cx="136" cy="72" rx="26" ry="36" fill="#d4956a" transform="rotate(12 136 72)" />
      <ellipse cx="136" cy="72" rx="16" ry="26" fill="#c0784a" transform="rotate(12 136 72)" />

      {/* Head */}
      <ellipse cx="90" cy="108" rx="58" ry="52" fill="#e8b87a" />
      <ellipse cx="90" cy="90" rx="48" ry="36" fill="#f0c880" />

      {/* Left eye white */}
      <circle cx="70" cy="96" r="14" fill="white" />
      <circle cx="70" cy="96" r="10" fill="#1a0a00" />
      <circle cx="73" cy="93" r="4"  fill="white" />
      <circle cx="71" cy="95" r="1.5" fill="white" opacity="0.5" />

      {/* Right eye white */}
      <circle cx="110" cy="96" r="14" fill="white" />
      <circle cx="110" cy="96" r="10" fill="#1a0a00" />
      <circle cx="113" cy="93" r="4"  fill="white" />
      <circle cx="111" cy="95" r="1.5" fill="white" opacity="0.5" />

      {/* Muzzle */}
      <ellipse cx="90" cy="126" rx="28" ry="20" fill="#f5d0a0" />

      {/* Nose */}
      <ellipse cx="90" cy="118" rx="12" ry="8"  fill="#FF4DA6" />
      <ellipse cx="87" cy="115" rx="4"  ry="2.5" fill="white" opacity="0.45" />

      {/* Smile */}
      <path
        d="M 76 133 Q 90 145 104 133"
        stroke="#2d1400"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tongue */}
      <ellipse cx="90" cy="143" rx="9"  ry="7" fill="#FF4DA6" />
      <line x1="90" y1="136" x2="90" y2="150" stroke="#d93080" strokeWidth="1.2" />

      {/* Pink bow on left ear */}
      <g transform="translate(32,50)">
        <path d="M0,8 C-4,0 -12,0 -8,8 C-12,16 -4,16 0,8" fill="#FF4DA6" />
        <path d="M0,8 C4,0 12,0 8,8 C12,16 4,16 0,8"  fill="#FF4DA6" />
        <circle cx="0" cy="8" r="4.5" fill="#FFB6D5" />
        <circle cx="0" cy="8" r="2"   fill="#FF4DA6" />
      </g>

      {/* Paw gold small top right */}
      <g fill="#FFC857" opacity="0.7" transform="translate(148,38)">
        <ellipse cx="8" cy="12" rx="5" ry="3.5" />
        <circle cx="2"  cy="7"  r="3" />
        <circle cx="7"  cy="3"  r="3" />
        <circle cx="13" cy="3"  r="3" />
        <circle cx="18" cy="7"  r="3" />
      </g>

      {/* Paw pink small bottom left */}
      <g fill="#FFB6D5" opacity="0.6" transform="translate(10,148) scale(0.75)">
        <ellipse cx="8" cy="12" rx="5" ry="3.5" />
        <circle cx="2"  cy="7"  r="3" />
        <circle cx="7"  cy="3"  r="3" />
        <circle cx="13" cy="3"  r="3" />
        <circle cx="18" cy="7"  r="3" />
      </g>
    </svg>
  );
}

/* ── Paw small SVG ───────────────────────────────────────── */
function PawSmall({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 30 30" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="15" cy="20" rx="7" ry="5" />
      <circle cx="6"  cy="13" r="3.5" />
      <circle cx="11" cy="8"  r="3.5" />
      <circle cx="19" cy="8"  r="3.5" />
      <circle cx="24" cy="13" r="3.5" />
    </svg>
  );
}

/* ── Icons ───────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
