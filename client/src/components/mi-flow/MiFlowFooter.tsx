import MiFlowLogo from './MiFlowLogo';

const WA_URL =
  'https://wa.me/56926249565?text=Hola%20Mi%20Flow%2C%20quiero%20reservar%20una%20hora%20para%20mi%20mascota.%20Servicio%3A%20';

const navLinks = [
  { label: 'Inicio',    href: '#inicio'    },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería',   href: '#galeria'   },
  { label: 'Ubicación', href: '#ubicacion' },
];

export default function MiFlowFooter() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-[#FF4DA6]/20 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <MiFlowLogo size={48} variant="full" />
            <p
              className="text-gray-500 text-sm leading-relaxed mt-4 max-w-xs"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              Centro de estética canina ubicado en el corazón de Quinta de Tilcoco.
              Cuidamos el estilo y el bienestar de tu mascota.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[#FF4DA6] text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-[#FF4DA6] text-sm transition-colors duration-150"
                    style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[#FF4DA6] text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-[#FF4DA6] text-sm transition-colors duration-150"
                  style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                >
                  <WhatsAppIcon />
                  +56 9 2624 9565
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/miflow5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-[#FF4DA6] text-sm transition-colors duration-150"
                  style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                >
                  <InstagramIcon />
                  @miflow5
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Av.+Tom%C3%A1s+Argomedo+2016,+Quinta+de+Tilcoco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-gray-400 hover:text-[#FF4DA6] text-sm transition-colors duration-150"
                  style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                >
                  <PinIcon />
                  <span>Av. Tomás Argomedo 2016,<br />Quinta de Tilcoco</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-5"
          style={{ background: 'linear-gradient(90deg, transparent, #FF4DA6 30%, #FFC857 70%, transparent)' }}
        />

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs"
          style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          <p>© {new Date().getFullYear()} Mi Flow · Peluquería Canina · Quinta de Tilcoco</p>
          <div className="flex items-center gap-1.5 text-gray-700">
            <PawTiny /> <PawTiny /> <PawTiny />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Icons ───────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function PawTiny() {
  return (
    <svg width="10" height="10" viewBox="0 0 30 30" fill="currentColor" aria-hidden="true">
      <ellipse cx="15" cy="20" rx="7" ry="5" />
      <circle cx="6"  cy="13" r="3.5" />
      <circle cx="11" cy="8"  r="3.5" />
      <circle cx="19" cy="8"  r="3.5" />
      <circle cx="24" cy="13" r="3.5" />
    </svg>
  );
}
