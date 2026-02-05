// src/app/page.tsx
import Link from "next/link";
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
  Code2,
  Wrench,
  MonitorSmartphone,
} from "lucide-react";

// ✅ CAMBIA ESTO
const WHATSAPP_URL =
  "https://wa.me/51999999999?text=Hola%20AsencX%2C%20quiero%20cotizar%20un%20sistema";
const EMAIL_URL =
  "mailto:asencx.dev@gmail.com?subject=Cotizaci%C3%B3n%20AsencX&body=Hola%2C%20quiero%20cotizar%20un%20sistema.";

const featuresChips = [
  "Caja rápida",
  "Control de stock",
  "Roles y permisos",
  "Reportes",
  "Multisucursal",
  "Soporte",
];

const systems = [
  {
    title: "Sistema POS",
    desc: "Venta, cobro, tickets y cierre de caja sin estrés.",
    bullets: ["Caja y cierre en minutos", "Tickets / boletas", "Usuarios por rol"],
    icon: LayoutDashboard,
    href: "/proyectos/restaurante-pos",
  },
  {
    title: "Inventario",
    desc: "Entradas/salidas, alertas, kardex y control por almacén.",
    bullets: ["Stock mínimo y alertas", "Importación de productos", "Historial y auditoría"],
    icon: Boxes,
    href: "/proyectos/sistema-inventario",
  },
  {
    title: "Panel Supervisor",
    desc: "Indicadores, ventas por día, productos top y control general.",
    bullets: ["KPIs en tiempo real", "Filtros por fecha/sucursal", "Exportación"],
    icon: BarChart3,
    href: "/proyectos/panel-supervisor",
  },
];

const audiences = [
  { icon: UtensilsCrossed, title: "Restaurantes", text: "Comandas, caja ágil y control de insumos." },
  { icon: Store, title: "Tiendas", text: "Stock, ventas y reportes claros para decidir." },
  { icon: ShoppingBag, title: "Bodegas", text: "Venta rápida con alertas de stock mínimo." },
];

const process = [
  { icon: Rocket, title: "1) Diagnóstico", text: "Te hago 10 preguntas y defino módulos." },
  { icon: Clock, title: "2) Propuesta + plan", text: "Precio por módulos + cronograma real." },
  { icon: Headphones, title: "3) Implementación", text: "Setup, capacitación y soporte post-lanzamiento." },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web apps a medida",
    desc: "Interfaces rápidas, responsive y enfocadas en operación real.",
  },
  {
    icon: Wrench,
    title: "Integraciones y automatización",
    desc: "Conexión con procesos, reportes y mejoras por sprints.",
  },
  {
    icon: Code2,
    title: "Tecnología moderna",
    desc: "Next.js/TypeScript + buenas prácticas y rendimiento.",
  },
];

const faq = [
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de módulos y alcance. Podemos cotizar por rangos (básico / pro / a medida) y ajustar según tu negocio.",
  },
  { q: "¿Cuánto demora?", a: "Normalmente 2–6 semanas según módulos, migración de data y validaciones." },
  { q: "¿Funciona en celular o tablet?", a: "Sí. El diseño es responsive y se puede adaptar a tablet para caja." },
  { q: "¿Incluye soporte?", a: "Sí. Podemos trabajar con soporte mensual y mejoras evolutivas por sprints." },
];

function Mockup({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={"relative overflow-hidden rounded-2xl border bg-linear-to-b from-muted/60 to-background shadow-sm " + className}>
      <div className="absolute inset-0 opacity-50 mask-[radial-gradient(ellipse_at_top,black,transparent_60%)]" />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 text-xs text-muted-foreground">{label}</span>
        </div>
        <div className="mt-4 grid gap-3">
          <div className="h-10 rounded-xl bg-muted/70" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-24 rounded-xl bg-muted/70" />
            <div className="h-24 rounded-xl bg-muted/70" />
            <div className="h-24 rounded-xl bg-muted/70" />
          </div>
          <div className="h-40 rounded-xl bg-muted/70" />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-muted opacity-40 blur-3xl" />
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
              POS, inventario y panel de supervisión para restaurantes, tiendas y bodegas. Rápido, claro y escalable.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="w-auto rounded-2xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Cotizar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button size="lg" variant="outline" className="w-auto rounded-2xl" asChild>
                <a href="#sistemas">Ver módulos</a>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {featuresChips.map((label) => (
                <Badge key={label} variant="outline" className="gap-1 rounded-full">
                  <Check className="h-4 w-4" />
                  {label}
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

          <div className="space-y-4">
            <Mockup label="POS (demo)" className="h-[320px]" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Mockup label="Inventario" className="h-[220px]" />
              <Mockup label="Supervisor" className="h-[220px]" />
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
            <Button variant="outline" className="w-auto rounded-2xl" asChild>
              <a href="#sistemas">Ver ejemplos</a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <Card key={a.title} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <span className="rounded-xl bg-muted p-2">
                        <Icon className="h-5 w-5" />
                      </span>
                      {a.title}
                    </CardTitle>
                    <CardDescription>{a.text}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
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

          <Button className="w-auto rounded-2xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Cotizar módulos
            </a>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {systems.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="overflow-hidden rounded-2xl">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded-xl bg-muted p-2">
                        <Icon className="h-5 w-5" />
                      </span>
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
                  <Mockup label={`${s.title} (screenshot)`} className="h-[220px]" />
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
                    <Button variant="outline" className="w-auto rounded-2xl" asChild>
                      <Link href={s.href}>Ver detalles</Link>
                    </Button>
                    <Button className="w-auto rounded-2xl" asChild>
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                        Cotizar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
                <p className="text-sm text-muted-foreground">Acompañamiento y mejoras por sprints.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">Servicios</h2>
            <p className="mt-2 text-muted-foreground">Lo que hacemos para implementar y mejorar tu sistema.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <span className="rounded-xl bg-muted p-2">
                        <Icon className="h-5 w-5" />
                      </span>
                      {s.title}
                    </CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="como-trabajamos" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Proceso simple</h2>
            <p className="mt-2 text-muted-foreground">Para avanzar rápido sin improvisar.</p>
          </div>
          <Button variant="outline" className="w-auto rounded-2xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Agendar llamada
            </a>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {process.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="rounded-xl bg-muted p-2">
                      <Icon className="h-5 w-5" />
                    </span>
                    {p.title}
                  </CardTitle>
                  <CardDescription>{p.text}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
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
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">¿Listo para cotizar?</h2>
            <p className="mt-2 text-muted-foreground">
              Dime tu rubro y qué necesitas (POS, inventario, reportes) y te respondo con una propuesta modular.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="w-auto rounded-2xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Cotizar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button size="lg" variant="outline" className="w-auto rounded-2xl" asChild>
                <a href={EMAIL_URL}>Enviar correo</a>
              </Button>
            </div>

            <Separator className="my-8" />

            <div className="grid gap-3 text-sm text-muted-foreground">
              {["Respuesta rápida (horario laboral)", "Propuesta por módulos + cronograma", "Capacitación incluida"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>{t}</span>
                </div>
              ))}
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
                Tip: cuando tengas capturas, reemplazamos los mockups por imágenes reales y sube la conversión.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}