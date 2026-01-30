import { Hero } from '@/components/sections/hero';
import { SystemsSection } from '@/components/sections/systems';
import { ContactSection } from '@/components/sections/contact';
import { ProcessSection } from '@/components/sections/process';
import { ServicesSection } from '@/components/sections/services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SystemsSection />
      <ProcessSection />
      <section id="servicios" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <p className="mt-2 text-muted-foreground">
            Desarrollo a medida, mantenimiento, hosting, integraciones y más.
          </p>
        </div>
      </section>
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
