import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants/site';

export function HeroSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sistemas web a medida para negocios que quieren crecer
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Diseñamos y desarrollamos soluciones digitales adaptadas a los procesos
            y necesidades reales de cada empresa. No sistemas genéricos,
            sino herramientas hechas para tu forma de trabajar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#contacto">Cotizar sistema</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="#sistemas">Ver sistemas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}