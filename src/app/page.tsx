import { HeroSection } from '@/components/sections/hero';
import { SystemsSection } from '@/components/sections/systems';
import { ProcessSection } from '@/components/sections/process';
import { ServicesSection } from '@/components/sections/services';
import { ContactSection } from '@/components/sections/contact';
import { BenefitsSection } from '@/components/sections/benefits';
import { SocialProofSection } from '@/components/sections/social-proof';

export default function HomePage() {
  return (
    <main>
      {/* Hero principal */}
      <HeroSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Social Proof */}
      <SocialProofSection />
      
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
