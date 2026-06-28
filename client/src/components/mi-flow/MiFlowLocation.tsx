const MAPS_URL =
  'https://maps.google.com/?q=Av.+Tom%C3%A1s+Argomedo+2016,+Quinta+de+Tilcoco,+Chile';

export default function MiFlowLocation() {
  return (
    <section id="ubicacion" className="mf-paws-dark bg-[#0E0E0E] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-[#FF4DA6] text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            <PawInline /> Dónde estamos <PawInline />
          </div>
          <h2
            className="mf-display text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            <span className="text-[#FF4DA6]">Ubicación</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Map placeholder */}
          <div className="relative rounded-3xl overflow-hidden border border-[#FF4DA6]/30 aspect-video lg:aspect-square max-h-[400px]">
            {/*
             * PLACEHOLDER DE MAPA
             * ─────────────────────────────────────────────────────────────
             * Para integrar un mapa real, reemplazar este bloque con un
             * <iframe> de Google Maps Embed API o Leaflet:
             *
             * <iframe
             *   src="https://www.google.com/maps/embed?pb=..."
             *   width="100%" height="100%"
             *   style={{ border: 0 }} allowFullScreen loading="lazy"
             * />
             * ─────────────────────────────────────────────────────────────
             */}
            <div className="absolute inset-0 bg-[#1C1C1C] flex flex-col items-center justify-center gap-4 p-6">
              <MapPlaceholderSVG />
              <p
                className="text-gray-500 text-sm text-center"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                Mapa interactivo disponible
                <br />
                al integrar Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FF4DA6]/15 border border-[#FF4DA6]/40 text-[#FF4DA6] text-sm font-bold px-4 py-2 rounded-full hover:bg-[#FF4DA6]/25 transition-colors"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                <PinIconSm />
                Ver en Google Maps
              </a>
            </div>

            {/* Pink corner accent */}
            <div
              aria-hidden
              className="absolute bottom-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(90deg, #FF4DA6, #FFC857)' }}
            />
          </div>

          {/* Address info */}
          <div className="flex flex-col gap-6">
            {/* Address card */}
            <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-white/8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FF4DA6]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PinIconSm color="#FF4DA6" size={22} />
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-base mb-1"
                    style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                  >
                    Dirección
                  </h3>
                  <p
                    className="text-gray-300 text-base leading-snug"
                    style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                  >
                    Av. Tomás Argomedo 2016
                  </p>
                  <p
                    className="text-[#FF4DA6] font-semibold text-sm mt-0.5"
                    style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                  >
                    Quinta de Tilcoco, Chile
                  </p>
                </div>
              </div>
            </div>

            {/* Contact quick links */}
            <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-white/8">
              <h3
                className="text-white font-bold text-base mb-4"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                Contacto rápido
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/56926249565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#FF4DA6] transition-colors group"
                  style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                >
                  <span className="w-9 h-9 rounded-lg bg-[#FF4DA6]/10 group-hover:bg-[#FF4DA6]/20 flex items-center justify-center text-[#FF4DA6] transition-colors">
                    <WhatsAppIcon />
                  </span>
                  <span className="text-sm font-medium">+56 9 2624 9565</span>
                </a>
                <a
                  href="https://instagram.com/miflow5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#FF4DA6] transition-colors group"
                  style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                >
                  <span className="w-9 h-9 rounded-lg bg-[#FF4DA6]/10 group-hover:bg-[#FF4DA6]/20 flex items-center justify-center text-[#FF4DA6] transition-colors">
                    <InstagramIcon />
                  </span>
                  <span className="text-sm font-medium">@miflow5</span>
                </a>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FFC857] hover:bg-[#e6b340] text-[#0E0E0E] font-bold text-base py-4 px-6 rounded-full transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              <PinIconSm color="#0E0E0E" size={20} />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Map placeholder SVG ─────────────────────────────────── */
function MapPlaceholderSVG() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      <rect x="5" y="5" width="70" height="70" rx="8" stroke="#FF4DA6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="5"  y1="28" x2="75" y2="28" stroke="#FF4DA6" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="5"  y1="52" x2="75" y2="52" stroke="#FF4DA6" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="28" y1="5"  x2="28" y2="75" stroke="#FF4DA6" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="52" y1="5"  x2="52" y2="75" stroke="#FF4DA6" strokeWidth="0.8" strokeOpacity="0.2" />
      {/* Road */}
      <path d="M5 40 Q20 35 40 40 Q60 45 75 40" stroke="#FFC857" strokeWidth="3" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M40 5 Q38 22 40 40 Q42 58 40 75" stroke="#FFC857" strokeWidth="3" strokeOpacity="0.5" strokeLinecap="round" />
      {/* Pin */}
      <circle cx="40" cy="40" r="8"  fill="#FF4DA6" />
      <circle cx="40" cy="40" r="3.5" fill="white" />
      {/* Pulse ring */}
      <circle cx="40" cy="40" r="14" stroke="#FF4DA6" strokeWidth="1.5" strokeOpacity="0.35" />
      <circle cx="40" cy="40" r="20" stroke="#FF4DA6" strokeWidth="0.8" strokeOpacity="0.18" />
    </svg>
  );
}

/* ── Icons ───────────────────────────────────────────────── */
function PinIconSm({ color = '#FF4DA6', size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
