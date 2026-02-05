// src/app/proyectos/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

import { PROJECTS } from "@/content/systems";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft } from "lucide-react";

type ParamsPromise = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const data = PROJECTS[slug];
  if (!data) return {};

  return {
    title: `${data.title} | AsencX`,
    description: data.subtitle ?? data.description,
  };
}

export default async function ProyectoPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const data = PROJECTS[slug];

  if (!data) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <Button asChild variant="outline" className="rounded-2xl">
          <Link href="/#sistemas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Link>
        </Button>

        <Badge variant="secondary" className="rounded-full">
          Demo visual
        </Badge>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{data.title}</h1>
        <p className="mt-2 text-muted-foreground">{data.subtitle}</p>
      </div>

      {/* Grid principal */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Izquierda: descripción + funcionalidades + módulos */}
        <div className="lg:col-span-2 space-y-6">
          {/* Funcionalidades */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Funcionalidades</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 text-sm">
                {data.funcionalidades.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Vista previa (SOLO UNA, sin mini preview) */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Vista previa</CardTitle>
              <CardDescription>Captura real / demo visual para mostrar al cliente.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border bg-muted/20">
                <img
                  src={data.image.src}
                  alt={data.image.alt}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Ayuda rápida si no carga */}
              <p className="mt-3 text-xs text-muted-foreground">
                Si no se ve: prueba abrir directamente <code className="px-1"> {data.image.src} </code> en el navegador.
              </p>
            </CardContent>
          </Card>

          {/* Módulos */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Módulos</CardTitle>
              <CardDescription>Lo que normalmente incluye este sistema (ajustable por negocio).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {data.modules.map((m) => (
                  <div key={m.title} className="rounded-2xl border p-4">
                    <div className="font-medium">{m.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{m.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Derecha: CTA */}
        <div className="space-y-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>¿Quieres este sistema?</CardTitle>
              <CardDescription>
                Lo adaptamos a tu negocio: logo, flujo, reportes, usuarios, permisos y más.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full rounded-2xl">Cotizar por WhatsApp</Button>
              <Button asChild variant="outline" className="w-full rounded-2xl">
                <Link href="/">Volver al inicio</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Datos rápidos</CardTitle>
              <CardDescription>Ideal para explicar al cliente.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-xl border p-3">
                <span>Tipo</span>
                <span className="text-foreground">Demo visual</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border p-3">
                <span>Personalización</span>
                <span className="text-foreground">Por módulos</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border p-3">
                <span>Soporte</span>
                <span className="text-foreground">Mensual</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}