import { HeroSection } from '@/components/sections/hero';
import { SystemsSection } from '@/components/sections/systems';
import { ProcessSection } from '@/components/sections/process';
import { ServicesSection } from '@/components/sections/services';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main>
      {/* Hero principal */}
      <HeroSection />

      {/* Sistemas */}
      <SystemsSection />

      {/* Cómo trabajamos */}
      <ProcessSection />

      {/* Servicios */}
      <ServicesSection />

      {/* Contacto */}
      <ContactSection />
    </main>
  );
}
