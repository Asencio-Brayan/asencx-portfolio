import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants/site';

export function FinalCTASection() {
  const whatsappText = `Hola 👋
Quisiera cotizar un sistema web a medida para mi negocio.

Negocio:
Necesidades:
Usuarios:
Ciudad / País:

Gracias.`;

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">
            ¿Listo para crear el sistema que tu negocio necesita?
          </h2>

          <p className="mt-4 text-lg opacity-90">
            Cuéntanos tu idea y te proponemos una solución clara,
            adaptada a tus procesos y objetivos.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <a
                href={`https://wa.me/${siteConfig.links.whatsappNumber}?text=${encodeURIComponent(
                  whatsappText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${siteConfig.links.email}`}>
                Contactar por correo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
