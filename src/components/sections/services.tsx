import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Desarrollo a medida',
    desc: 'Construimos el sistema según tu flujo real: ventas, inventario, usuarios y permisos.',
    tags: ['Next.js', 'TypeScript', 'UI moderna'],
    items: [
      'Módulos según necesidad (ventas, compras, caja, reportes)',
      'Roles y permisos por usuario',
      'Panel administrativo y dashboards',
    ],
  },
  {
    title: 'Implementación y capacitación',
    desc: 'Te acompañamos para que el equipo adopte el sistema sin fricción.',
    tags: ['Onboarding', 'Soporte'],
    items: [
      'Configuración inicial (datos, productos, usuarios)',
      'Capacitación por roles (caja, admin, supervisor)',
      'Guía rápida y buenas prácticas de uso',
    ],
  },
  {
    title: 'Mantenimiento y mejoras',
    desc: 'Evolución continua: correcciones, nuevas funciones y optimización.',
    tags: ['SLA', 'Iteración'],
    items: [
      'Correcciones y ajustes post-lanzamiento',
      'Nuevas funcionalidades por fases',
      'Optimización de rendimiento y UX',
    ],
  },
  {
    title: 'Hosting y despliegue',
    desc: 'Publicamos tu sistema con buenas prácticas, seguridad y respaldo.',
    tags: ['Deploy', 'Seguridad'],
    items: [
      'Despliegue (Vercel/Server) según el proyecto',
      'Backups y monitoreo básico',
      'Buenas prácticas de seguridad (roles, validaciones)',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <p className="mt-2 text-muted-foreground">
            No vendemos sistemas cerrados. Diseñamos y desarrollamos soluciones adaptadas al tamaño y realidad de tu negocio.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="h-full">
              <CardHeader>
                <CardTitle className="flex flex-col gap-2">
                  <span>{s.title}</span>
                  <span className="text-sm font-normal text-muted-foreground">{s.desc}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
