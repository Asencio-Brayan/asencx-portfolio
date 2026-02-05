// src/app/page.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  ArrowRight,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  BarChart3,
  Boxes,
  Shield,
  Headphones,
  Rocket,
  Clock,
  LayoutDashboard,
} from "lucide-react";

/**
 * HOME — AsencX (mejorado)
 * - Mockups reemplazados por imágenes reales desde /public/projets/...
 * - Footer sin new Date() (evita hydration mismatch)
 */

const featuresChips = [
  { icon: <Check className="h-4 w-4" />, label: "Caja rápida" },
  { icon: <Check className="h-4 w-4" />, label: "Control de stock" },
  { icon: <Check className="h-4 w-4" />, label: "Roles y permisos" },
  { icon: <Check className="h-4 w-4" />, label: "Reportes" },
  { icon: <Check className="h-4 w-4" />, label: "Multisucursal" },
  { icon: <Check className="h-4 w-4" />, label: "Soporte" },
];

const systems = [
  {
    title: "Sistema POS",
    desc: "Venta, cobro, tickets y cierre de caja sin estrés.",
    bullets: ["Caja y cierre en minutos", "Tickets / boletas", "Usuarios por rol"],
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/proyectos/restaurante-pos",
    imageSrc: "/projets/restaurante-pos/1.png",
    imageAlt: "Demo POS - AsencX",
  },
  {
    title: "Inventario",
    desc: "Entradas/salidas, alertas, kardex y control por almacén.",
    bullets: ["Stock mínimo y alertas", "Importación de productos", "Historial y auditoría"],
    icon: <Boxes className="h-5 w-5" />,
    href: "/proyectos/sistema-inventario",
    imageSrc: "/projets/tienda-Inventario/1.1.png",
    imageAlt: "Demo Inventario - AsencX",
  },
  {
    title: "Panel Supervisor",
    desc: "Indicadores, ventas por día, productos top y control general.",
    bullets: ["KPIs en tiempo real", "Filtros por fecha/sucursal", "Exportación"],
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/proyectos/panel-supervisor",
    imageSrc: "/projets/panel-supervisor/1.2.png",
    imageAlt: "Demo Supervisor - AsencX",
  },
];

const audiences = [
  { icon: <UtensilsCrossed className="h-5 w-5" />, title: "Restaurantes", text: "Comandas, caja ágil y control de insumos." },
  { icon: <Store className="h-5 w-5" />, title: "Tiendas", text: "Stock, ventas y reportes claros para decidir." },
  { icon: <ShoppingBag className="h-5 w-5" />, title: "Bodegas", text: "Venta rápida con alertas de stock mínimo." },
];

const process = [
  { icon: <Rocket className="h-5 w-5" />, title: "1) Diagnóstico", text: "Te hago 10 preguntas y defino módulos." },
  { icon: <Clock className="h-5 w-5" />, title: "2) Propuesta + plan", text: "Precio por módulos + cronograma real." },
  { icon: <Headphones className="h-5 w-5" />, title: "3) Implementación", text: "Setup, capacitación y soporte post-lanzamiento." },
];

const faq = [
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de módulos y alcance. Podemos cotizar por rangos (básico / pro / a medida) y ajustar según tu negocio.",
  },
  {
    q: "¿Cuánto demora?",
    a: "Normalmente 2–6 semanas según módulos, migración de data y validaciones.",
  },
  {
    q: "¿Funciona en celular o tablet?",
    a: "Sí. El diseño es responsive y se puede adaptar a tablet para caja.",
  },
  {
    q: "¿Incluye soporte?",
    a: "Sí. Podemos trabajar con soporte mensual y mejoras evolutivas por sprints.",
  },
];

function Screenshot({
  src,
  alt,
  className = "",
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  return (
    <div className={"relative overflow-hidden rounded-2xl border bg-white shadow-sm " + className}>
      {label ? (
        <div className="absolute left-3 top-3 z-10 rounded-full border bg-white/90 px-3 py-1 text-xs text-black/70 backdrop-blur">
          {label}
        </div>
      ) : null}

      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
    </div>
  );
}

export default function AsencXHomePrototype() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-foreground" />
            <div>
              <div className="text-sm font-semibold leading-none">AsencX</div>
              <div className="text-xs text-muted-foreground">Sistemas para negocios</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#sistemas">
              Sistemas
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#proceso">
              Proceso
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#faq">
              FAQ
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#contacto">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="secondary" className="hidden sm:inline-flex">
              Ver sistemas
            </Button>
            <Button>
              Cotizar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 -top-55 h-130 w-130 -translate-x-1/2 rounded-full bg-muted opacity-40 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Badge className="rounded-full" variant="secondary">
              Implementación modular • Personalización real
            </Badge>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Sistemas a medida para vender más y controlar tu negocio.
            </h1>

            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              POS, inventario y panel de supervisión para restaurantes, tiendas y bodegas. Diseñado para ser rápido,
              claro y escalable.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl">
                Cotizar ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl">
                Ver demo
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {featuresChips.map((c) => (
                <Badge key={c.label} variant="outline" className="gap-1 rounded-full">
                  {c.icon}
                  {c.label}
                </Badge>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="text-xs text-muted-foreground">Tiempo típico</div>
                  <div className="text-lg font-semibold">2–6 semanas</div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="text-xs text-muted-foreground">Implementación</div>
                  <div className="text-lg font-semibold">Por módulos</div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="text-xs text-muted-foreground">Soporte</div>
                  <div className="text-lg font-semibold">Mensual</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Screenshots reales (tus 3 capturas) */}
          <div className="space-y-4">
            <Screenshot
              src="/projets/restaurante-pos/1.png"
              alt="POS demo"
              label="POS (demo)"
              className="h-80"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Screenshot
                src="/projets/tienda-Inventario/1.1.png"
                alt="Inventario demo"
                label="Inventario"
                className="h-55"
              />
              <Screenshot
                src="/projets/panel-supervisor/1.2.png"
                alt="Supervisor demo"
                label="Supervisor"
                className="h-55"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Hecho para tu rubro</h2>
              <p className="mt-2 text-muted-foreground">Menos vueltas, más control. Elige lo que necesitas.</p>
            </div>
            <Button variant="outline" className="rounded-2xl">
              Ver ejemplos
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((a) => (
              <Card key={a.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="rounded-xl bg-muted p-2">{a.icon}</span>
                    {a.title}
                  </CardTitle>
                  <CardDescription>{a.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="sistemas" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Sistemas (módulos)</h2>
            <p className="mt-2 text-muted-foreground">Cada módulo se integra y escala contigo.</p>
          </div>
          <Button className="rounded-2xl">Cotizar módulos</Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {systems.map((s) => (
            <Card key={s.title} className="overflow-hidden rounded-2xl">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded-xl bg-muted p-2">{s.icon}</span>
                    <div>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm text-muted-foreground">{s.desc}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    Demo
                  </Badge>
                </div>
              </div>

              <div className="px-4 pb-4">
                <Screenshot src={s.imageSrc} alt={s.imageAlt} className="h-55" />
              </div>

              <CardContent className="pt-0">
                <ul className="grid gap-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  <Button variant="outline" className="w-full rounded-2xl" asChild>
                    <a href={s.href}>Ver detalles</a>
                  </Button>
                  <Button className="w-full rounded-2xl">Cotizar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-muted/20 p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-muted p-2">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Seguridad</div>
                <p className="text-sm text-muted-foreground">Roles, auditoría y buenas prácticas desde el día 1.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-muted p-2">
                <BarChart3 className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Decisiones con datos</div>
                <p className="text-sm text-muted-foreground">Reportes claros: ventas, productos top, márgenes.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-muted p-2">
                <Headphones className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Soporte real</div>
                <p className="text-sm text-muted-foreground">Acompañamiento y mejoras evolutivas por sprints.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Proceso simple</h2>
              <p className="mt-2 text-muted-foreground">Para avanzar rápido sin improvisar.</p>
            </div>
            <Button variant="outline" className="rounded-2xl">
              Agendar llamada
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((p) => (
              <Card key={p.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="rounded-xl bg-muted p-2">{p.icon}</span>
                    {p.title}
                  </CardTitle>
                  <CardDescription>{p.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Preguntas frecuentes</h2>
          <p className="mt-2 text-muted-foreground">Lo esencial antes de cotizar.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faq.map((f) => (
            <Card key={f.q} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">{f.q}</CardTitle>
                <CardDescription>{f.a}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="border-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">¿Listo para cotizar?</h2>
            <p className="mt-2 text-muted-foreground">
              Dime tu rubro y qué necesitas (POS, inventario, reportes) y te respondo con una propuesta modular.
            </p>

            <div className="mt-6 grid gap-3">
              <Button size="lg" className="rounded-2xl">
                Cotizar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl">
                Enviar mensaje por correo
              </Button>
            </div>

            <Separator className="my-8" />

            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Respuesta rápida (horario laboral)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Propuesta por módulos + cronograma</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Capacitación incluida</span>
              </div>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Checklist para cotizar</CardTitle>
              <CardDescription>Con esto te saco un precio rápido.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                {[
                  "Rubro (restaurante/tienda/bodega)",
                  "¿Cuántas cajas o usuarios?",
                  "¿Necesitas inventario?",
                  "¿Una o varias sucursales?",
                  "¿Boleta/factura? (si aplica)",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border bg-muted/30 p-4 text-sm text-muted-foreground">
                Tip: ya pusimos tus capturas reales arriba. Luego podemos añadir 3 capturas por demo en “Ver detalles”.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER (sin Date para evitar hydration) */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground">© 2026 AsencX — Sistemas para negocios</div>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-muted-foreground hover:text-foreground" href="#sistemas">
                Sistemas
              </a>
              <a className="text-muted-foreground hover:text-foreground" href="#proceso">
                Proceso
              </a>
              <a className="text-muted-foreground hover:text-foreground" href="#contacto">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}