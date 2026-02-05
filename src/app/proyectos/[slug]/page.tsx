// src/app/proyectos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/content/systems";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

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
    description: data.subtitle ?? data.title,
  };
}

export default async function ProyectoPage({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;
  const data = PROJECTS[slug];
  if (!data) return notFound();

  const tags = data.tags ?? [];
  const funcionalidades = data.funcionalidades ?? [];
  const modules = data.modules ?? [];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Back */}
        <div className="mb-6">
          <Button variant="outline" className="rounded-2xl" asChild>
            <Link href="/#sistemas">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
          {/* Left */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <div className="text-sm text-muted-foreground">Proyecto</div>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
                {data.title}
              </h1>
              <p className="mt-2 text-muted-foreground">{data.subtitle}</p>

              {tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Funcionalidades */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Funcionalidades</CardTitle>
                <CardDescription>
                  Lo principal del sistema (demo visual).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {funcionalidades.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="h-4 w-4" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Vista previa */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Vista previa</CardTitle>
                <CardDescription>
                  Captura real / demo visual para mostrar al cliente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-hidden rounded-2xl border bg-muted/20 aspect-video">
                  <Image
                    src={data.image.src}
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
            {modules.length > 0 ? (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Módulos</CardTitle>
                  <CardDescription>
                    Componentes del sistema (descripción rápida).
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  {modules.map((m) => (
                    <div
                      key={m.title}
                      className="rounded-2xl border p-4"
                    >
                      <div className="font-semibold">{m.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {m.description}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ) : null}
          </div>

          {/* Right */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">¿Quieres este sistema?</CardTitle>
                <CardDescription>
                  Lo adaptamos a tu negocio: logo, flujo, reportes, usuarios,
                  permisos y más.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full rounded-2xl" asChild>
                  <a
                    href={wa(
                      data.whatsappText ??
                        `Hola AsencX, quiero cotizar: ${data.title}`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por WhatsApp{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button variant="outline" className="w-full rounded-2xl" asChild>
                  <Link href="/#contacto">Volver al inicio</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}