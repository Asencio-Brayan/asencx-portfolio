import Link from 'next/link';
import Image from 'next/image';

import { systems } from '@/content/systems';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactSection } from '@/components/sections/contact';
import { siteConfig } from '@/lib/constants/site';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = systems.find((s) => s.slug === slug);

  if (!item) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <p className="mt-2 text-muted-foreground">
          Slug recibido: <span className="font-mono">{slug}</span>
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </main>
    );
  }

  const whatsappText = `Hola 👋
Vi el sistema "${item.name}" en ${siteConfig.name} y quiero cotizar una solución adaptada a mi negocio.

Para ayudarte mejor, ¿me compartes estos datos?

1) Nombre:
2) Empresa (opcional):
3) Rubro (tienda / restaurante / otro):
4) Necesidades (ventas, inventario, caja, reportes, etc.):
5) Cantidad de usuarios:
6) Ciudad / País:
7) ¿Tienes procesos definidos? (sí/no)
8) Presupuesto aproximado (opcional):
9) Fecha ideal (opcional):

Gracias 🙌`;

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{item.name}</h1>
        <p className="max-w-2xl text-muted-foreground">{item.summary}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Funcionalidades */}
          <Card>
            <CardHeader>
              <CardTitle>Funcionalidades</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {item.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Vista previa (Screenshots) */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Vista previa</CardTitle>
            </CardHeader>
            <CardContent>
              {item.screenshots?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.screenshots.map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-lg border bg-muted"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={src}
                          alt={`Vista previa - ${item.name}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Próximamente añadiremos capturas reales del sistema.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Módulos */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Módulos</CardTitle>
            </CardHeader>
            <CardContent>
              {item.modules?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.modules.map((m) => (
                    <div key={m.title} className="rounded-lg border p-4">
                      <p className="font-medium">{m.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Este sistema puede incluir módulos según tus necesidades.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>¿Quieres este sistema?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Lo adaptamos a tu negocio: logo, flujo, reportes, usuarios,
                permisos y más.
              </p>

              <Button asChild className="w-full">
                <a
                  href={`https://wa.me/${
                    siteConfig.links.whatsappNumber
                  }?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar por WhatsApp
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/">Volver al inicio</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contacto con contexto */}
      <ContactSection context={item.name} />
    </main>
  );
}