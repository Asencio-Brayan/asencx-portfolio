import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/lib/constants/site';

function buildWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.links.whatsappNumber}?text=${text}`;
}

function buildMailTo(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${siteConfig.links.email}?subject=${s}&body=${b}`;
}

export function ContactSection({ context }: { context?: string }) {
  const subject = `Consulta - ${siteConfig.name}${context ? ` (${context})` : ''}`;

  const body = `Hola, soy de una empresa y quisiera cotizar un sistema.
  
Negocio:
Necesidades:
Cantidad de usuarios:
Ciudad/País:
Presupuesto aproximado (opcional):
Fecha ideal de entrega (opcional):

Gracias.`;

  const whatsappMessage = `Hola, vi ${context ? `el sistema "${context}"` : 'tu portafolio'} en ${
    siteConfig.name
  } y quiero cotizar una solución adaptada a mi negocio.

Negocio:
Necesidades:
Usuarios:

Gracias.`;

  const whatsappHref = buildWhatsAppLink(whatsappMessage);
  const mailHref = buildMailTo(subject, body);

  return (
    <section id="contacto" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="mt-2 text-muted-foreground">
            Cuéntanos sobre tu negocio y tus necesidades. En {siteConfig.name} desarrollamos
            soluciones adaptadas, no sistemas cerrados.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Ideal para consultas rápidas y coordinación inicial.
              </p>
              <Button asChild className="w-full">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
              </Button>

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Correo (Gmail)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Recomendado para empresas que prefieren una comunicación formal.
              </p>

              <div className="rounded-lg border px-3 py-2 text-sm">
                {siteConfig.links.email}
              </div>

              <Button asChild variant="outline" className="w-full">
                <a href={mailHref}>Escribir por correo</a>
              </Button>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}