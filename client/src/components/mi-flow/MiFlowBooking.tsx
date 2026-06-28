const WA_URL =
  'https://wa.me/56926249565?text=Hola%20Mi%20Flow%2C%20quiero%20reservar%20una%20hora%20para%20mi%20mascota.%20Servicio%3A%20';

const steps = [
  {
    emoji: '🐕',
    label: 'Nombre de la mascota',
    hint: 'Para que la conozcamos antes de llegar.',
  },
  {
    emoji: '📏',
    label: 'Raza o tamaño aproximado',
    hint: 'Pequeño, mediano o grande — nos ayuda a prepararnos.',
  },
  {
    emoji: '✂️',
    label: 'Servicio requerido',
    hint: 'Baño, corte, uñas, oídos, tinte o combinación.',
  },
  {
    emoji: '📅',
    label: 'Fecha u horario ideal',
    hint: 'Coordinaremos según disponibilidad.',
  },
  {
    emoji: '📸',
    label: 'Foto de referencia (opcional)',
    hint: 'Si tienes un estilo en mente, mándanos una imagen de ejemplo.',
  },
] as const;

export default function MiFlowBooking() {
  return (
    <section
      id="reservar"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FF4DA6 0%, #c0306a 100%)' }}
    >
      {/* Paw pattern overlay */}
      <div aria-hidden className="mf-paws-pink absolute inset-0 pointer-events-none" />

      {/* Decorative circles */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
        style={{ background: 'white' }}
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full opacity-10"
        style={{ background: '#FFC857' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* Left: intro */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              <PawInline /> Antes de reservar
            </div>

            <h2
              className="mf-display text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}
            >
              ¿Cómo
              <br />
              reservar?
            </h2>

            <p
              className="text-white/85 text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              Es muy simple. Solo envíanos un mensaje por WhatsApp con la siguiente información
              y coordinamos el día y la hora.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0E0E0E] hover:bg-[#1a1a1a] text-white font-bold text-base px-7 py-4 rounded-full transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              <WhatsAppIcon />
              Enviar mensaje ahora
            </a>
          </div>

          {/* Right: checklist */}
          <div className="flex-1 w-full">
            <div className="bg-[#0E0E0E]/30 backdrop-blur-sm rounded-3xl border border-white/20 p-6 sm:p-8">
              <p
                className="text-white/80 text-xs font-bold tracking-widest uppercase mb-5"
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
              >
                Incluye en tu mensaje:
              </p>
              <ol className="flex flex-col gap-4">
                {steps.map((s, i) => (
                  <li key={s.label} className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FF4DA6] text-white flex items-center justify-center text-xs font-black mt-0.5"
                      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                      >
                        {s.emoji} {s.label}
                      </div>
                      <div
                        className="text-white/60 text-xs mt-0.5"
                        style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                      >
                        {s.hint}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
