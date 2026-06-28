const WA_URL =
  'https://wa.me/56926249565?text=Hola%20Mi%20Flow%2C%20quiero%20reservar%20una%20hora%20para%20mi%20mascota.%20Servicio%3A%20';

export default function MiFlowCTA() {
  return (
    <section className="bg-[#141414] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          className="relative mf-paws-pink rounded-3xl overflow-hidden text-center py-14 px-6 sm:px-12"
          style={{ background: 'linear-gradient(135deg, #FF4DA6 0%, #b5235e 100%)' }}
        >
          {/* Decorative circles */}
          <div
            aria-hidden
            className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-15"
            style={{ background: 'white' }}
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-10"
            style={{ background: '#FFC857' }}
          />

          {/* Paw prints row */}
          <div className="relative z-10 flex justify-center gap-2 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <PawIcon key={i} color="rgba(255,255,255,0.35)" size={22} />
            ))}
          </div>

          {/* Headline */}
          <h2
            className="relative z-10 mf-display text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Agenda el próximo look
            <br />
            de tu mascota
          </h2>

          <p
            className="relative z-10 text-white/85 text-base max-w-sm mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            Escríbenos por WhatsApp y coordinamos la hora que mejor te acomode.
          </p>

          {/* Main CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mf-wa-pulse inline-flex items-center gap-3 bg-[#0E0E0E] hover:bg-[#1a1a1a] text-white font-black text-lg px-9 py-5 rounded-full transition-colors duration-200"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            <WhatsAppIcon />
            Reservar por WhatsApp
          </a>

          {/* Sub text */}
          <p
            className="relative z-10 text-white/55 text-xs mt-5"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            +56 9 2624 9565 · @miflow5
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PawIcon({ color, size = 20 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill={color} aria-hidden="true">
      <ellipse cx="15" cy="20" rx="7" ry="5" />
      <circle cx="6"  cy="13" r="3.5" />
      <circle cx="11" cy="8"  r="3.5" />
      <circle cx="19" cy="8"  r="3.5" />
      <circle cx="24" cy="13" r="3.5" />
    </svg>
  );
}
