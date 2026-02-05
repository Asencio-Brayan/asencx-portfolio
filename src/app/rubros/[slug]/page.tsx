// src/app/rubros/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DATA: Record<string, { title: string; desc: string; bullets: string[] }> =
  {
    restaurantes: {
      title: "Restaurantes",
      desc: "Flujo típico: comandas → cocina → caja → reportes.",
      bullets: ["POS + Cocina", "Delivery + Reportes", "Control de caja"],
    },
    tiendas: {
      title: "Tiendas",
      desc: "Flujo típico: ventas rápidas + control de inventario.",
      bullets: ["Inventario", "Ventas + Caja", "Alertas de stock"],
    },
    bodegas: {
      title: "Bodegas",
      desc: "Venta rápida con control mínimo de stock.",
      bullets: ["Venta rápida", "Alertas de quiebre", "Reportes diarios"],
    },
  };

// ✅ SEO por rubro (no cambia tu diseño)
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const rubro = DATA[params.slug];
  const base = "https://asencx.com";

  if (!rubro) {
    return {
      metadataBase: new URL(base),
      title: "Rubro | AsencX",
      description:
        "Sistemas a medida por rubro: POS, inventario, reportes y control para tu negocio.",
      robots: { index: true, follow: true },
    };
  }

  const title = `${rubro.title} | AsencX`;
  const description = `${rubro.desc} Sistemas a medida: POS, inventario y reportes.`;

  const url = `${base}/rubros/${params.slug}`;

  const keywords = [
    "AsencX",
    "sistemas para negocios",
    "software para negocios",
    "sistema POS",
    "sistema de inventario",
    "reportes",
    rubro.title,
    ...rubro.bullets,
  ];

  return {
    metadataBase: new URL(base),
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AsencX",
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function RubroDetallePage({
  params,
}: {
  params: { slug: string };
}) {
  const rubro = DATA[params.slug];
  if (!rubro) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {rubro.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{rubro.desc}</p>
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/rubros">Volver</Link>
          </Button>
          <Button asChild>
            <Link href="/#contacto">Cotizar</Link>
          </Button>
        </div>
      </div>

      <Card className="mt-8 p-6">
        <h2 className="text-lg font-semibold">Ejemplos</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {rubro.bullets.map((b) => (
            <li key={b}>✓ {b}</li>
          ))}
        </ul>
      </Card>
    </main>
  );
}