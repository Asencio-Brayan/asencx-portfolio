import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DATA: Record<string, { title: string; desc: string; bullets: string[] }> = {
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

export default function RubroDetallePage({ params }: { params: { slug: string } }) {
  const rubro = DATA[params.slug];
  if (!rubro) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{rubro.title}</h1>
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
