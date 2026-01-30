import Link from 'next/link';
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

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Vista previa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="aspect-video rounded-lg border bg-muted" />
                <div className="aspect-video rounded-lg border bg-muted" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                (Aquí pondremos capturas reales o un demo embebido después.)
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>¿Quieres este sistema?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Lo adaptamos a tu negocio: logo, flujo, reportes, usuarios, permisos y más.
              </p>

              <Button asChild className="w-full">
                <a
                  href={`https://wa.me/${siteConfig.links.whatsappNumber}?text=${encodeURIComponent(
                   `Hola, vi el sistema "${item.name}" en AsencX y quiero cotizar una solución adaptada a mi negocio.\n\nNegocio:\nNecesidades:\nUsuarios:\n\nGracias.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
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
      <ContactSection context={item.name} />
    </main>
  );
}
