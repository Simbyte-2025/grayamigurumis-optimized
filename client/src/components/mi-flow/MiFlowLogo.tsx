interface MiFlowLogoProps {
  size?: number;
  variant?: 'full' | 'icon';
}

export default function MiFlowLogo({ size = 56, variant = 'full' }: MiFlowLogoProps) {
  const badge = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mi Flow logo"
      role="img"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="#0E0E0E" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="#FF4DA6" strokeWidth="2.5" />
      {/* Gold inner ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#FFC857" strokeWidth="1.2" />

      {/* Arc bottom text path */}
      <defs>
        <path
          id="mf-bottom-arc"
          d="M 14,50 A 36,36 0 0 0 86,50"
        />
      </defs>
      <text fontSize="6.2" fill="#FFB6D5" fontFamily="Arial, sans-serif" letterSpacing="1.5">
        <textPath href="#mf-bottom-arc" startOffset="4%">
          CENTRO ESTÉTICA CANINA
        </textPath>
      </text>

      {/* MI FLOW main text */}
      <text
        x="50" y="43"
        textAnchor="middle"
        fill="#FF4DA6"
        fontSize="15"
        fontFamily="Impact, 'Arial Black', sans-serif"
        fontWeight="900"
        letterSpacing="3"
      >
        MI
      </text>
      <text
        x="50" y="60"
        textAnchor="middle"
        fill="#FF4DA6"
        fontSize="15"
        fontFamily="Impact, 'Arial Black', sans-serif"
        fontWeight="900"
        letterSpacing="2"
      >
        FLOW
      </text>

      {/* Left paw print decoration */}
      <g fill="#FFC857" opacity="0.85">
        <ellipse cx="21" cy="57" rx="3.8" ry="2.7" />
        <circle cx="15.5" cy="51" r="2.2" />
        <circle cx="19"   cy="47" r="2.2" />
        <circle cx="24"   cy="47" r="2.2" />
        <circle cx="27.5" cy="51" r="2.2" />
      </g>

      {/* Right paw print decoration */}
      <g fill="#FFC857" opacity="0.85">
        <ellipse cx="79" cy="57" rx="3.8" ry="2.7" />
        <circle cx="73.5" cy="51" r="2.2" />
        <circle cx="77"   cy="47" r="2.2" />
        <circle cx="82"   cy="47" r="2.2" />
        <circle cx="85.5" cy="51" r="2.2" />
      </g>

      {/* Top star */}
      <circle cx="50" cy="17" r="2" fill="#FFC857" />
      {/* Bottom star */}
      <circle cx="50" cy="83" r="2" fill="#FFC857" />
    </svg>
  );

  if (variant === 'icon') return badge;

  return (
    <div className="flex items-center gap-3">
      {badge}
      <div>
        <div
          className="text-[#FF4DA6] leading-none tracking-wide"
          style={{ fontFamily: "'Lilita One', Impact, 'Arial Black', sans-serif", fontSize: '1.45rem' }}
        >
          Mi Flow
        </div>
        <div className="text-[#FFB6D5] text-xs tracking-widest uppercase mt-0.5" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
          Peluquería Canina
        </div>
      </div>
    </div>
  );
}
