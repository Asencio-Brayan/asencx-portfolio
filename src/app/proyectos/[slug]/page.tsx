// src/app/proyectos/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PROJECTS } from "@/content/systems";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";

const WHATSAPP_PHONE = "51903389999";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_PHONE}?text=`;
const wa = (text: string) => WHATSAPP_BASE + encodeURIComponent(text);

type ParamsPromise = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const data = PROJECTS[slug];
  if (!data) return {};
  return {
    title: `${data.title} | AsencX`,
    description: data.subtitle,
  };
}

export default async function ProyectoPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const data = PROJECTS[slug];
  if (!data) return notFound();

  const tags = data.tags ?? [];
  const funcionalidades = data.funcionalidades ?? [];
  const modules = data.modules ?? [];

  const whatsappText =
    data.whatsappText ?? `Hola AsencX, quiero cotizar: ${data.title}.`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" className="rounded-2xl" asChild>
            <Link href="/#sistemas">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>

          <Button className="rounded-2xl" asChild>
            <a href={wa(whatsappText)} target="_blank" rel="noreferrer">
              Cotizar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{data.title}</h1>
              <p className="mt-2 text-muted-foreground">{data.subtitle}</p>

              {tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Funcionalidades */}
            {funcionalidades.length > 0 && (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Funcionalidades</CardTitle>
                  <CardDescription>Lo principal del sistema (demo visual).</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    {funcionalidades.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-4 w-4" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Vista previa */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Vista previa</CardTitle>
                <CardDescription>Captura real / demo visual para mostrar al cliente.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-hidden rounded-2xl border bg-muted/20 aspect-[16/9]">
                  <Image
                    src={data.image.heroSrc}
                    alt={data.image.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            {/* Módulos */}
            {modules.length > 0 && (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Módulos</CardTitle>
                  <CardDescription>Componentes del sistema (descripción rápida).</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  {modules.map((m) => (
                    <div key={m.title} className="rounded-2xl border p-4">
                      <div className="font-semibold">{m.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{m.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">¿Quieres este sistema?</CardTitle>
                <CardDescription>
                  Lo adaptamos a tu negocio: logo, flujo, reportes, usuarios, permisos y más.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Button className="rounded-2xl" asChild>
                  <a href={wa(whatsappText)} target="_blank" rel="noreferrer">
                    Cotizar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button variant="outline" className="rounded-2xl" asChild>
                  <Link href="/#contacto">Ir a contacto</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}