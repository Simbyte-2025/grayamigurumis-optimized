import '@/styles/mi-flow.css';
import MiFlowHeader   from '@/components/mi-flow/MiFlowHeader';
import MiFlowHero     from '@/components/mi-flow/MiFlowHero';
import MiFlowTrust    from '@/components/mi-flow/MiFlowTrust';
import MiFlowServices from '@/components/mi-flow/MiFlowServices';
import MiFlowBooking  from '@/components/mi-flow/MiFlowBooking';
import MiFlowGallery  from '@/components/mi-flow/MiFlowGallery';
import MiFlowLocation from '@/components/mi-flow/MiFlowLocation';
import MiFlowCTA      from '@/components/mi-flow/MiFlowCTA';
import MiFlowFooter   from '@/components/mi-flow/MiFlowFooter';

export default function MiFlowLanding() {
  return (
    <div
      className="mf-root mf-body min-h-screen bg-[#0E0E0E]"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#FF4DA6] focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
      >
        Ir al contenido principal
      </a>

      <MiFlowHeader />

      <main id="main-content">
        {/* 1. Hero */}
        <MiFlowHero />

        {/* 2. Por qué elegirnos — 4 beneficios */}
        <MiFlowTrust />

        {/* 3. Servicios */}
        <MiFlowServices />

        {/* 4. Antes de reservar / cómo reservar */}
        <MiFlowBooking />

        {/* 5. Galería antes y después */}
        <MiFlowGallery />

        {/* 6. Ubicación */}
        <MiFlowLocation />

        {/* 7. CTA final */}
        <MiFlowCTA />
      </main>

      <MiFlowFooter />
    </div>
  );
}
