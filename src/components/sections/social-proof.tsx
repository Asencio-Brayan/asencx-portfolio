import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const useCases = [
  {
    title: 'Restaurantes',
    subtitle: 'Pedidos, mesas, cocina y caja sin caos.',
    bullets: ['Comandas y estados', 'Cierres y reportes', 'Control por usuario'],
    tags: ['POS', 'Cocina', 'Caja'],
  },
  {
    title: 'Tiendas y bodegas',
    subtitle: 'Inventario y ventas con control real.',
    bullets: ['Stock y alertas', 'Compras y proveedores', 'Ventas y clientes'],
    tags: ['Inventario', 'Ventas', 'Stock'],
  },
  {
    title: 'Empresas',
    subtitle: 'Paneles y sistemas internos a medida.',
    bullets: ['Flujos personalizados', 'Usuarios y roles', 'KPIs y auditoría'],
    tags: ['Dashboard', 'Roles', 'Auditoría'],
  },
];

const deliverables = [
  { title: 'Implementación guiada', desc: 'Te acompañamos en la puesta en marcha y ajustes iniciales.' },
  { title: 'Accesos y roles', desc: 'Permisos por usuario para control y seguridad.' },
  { title: 'Documentación básica', desc: 'Guía corta para operar y administrar el sistema.' },
  { title: 'Soporte inicial', desc: 'Correcciones y mejoras pequeñas tras el lanzamiento.' },
];

export function SocialProofSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Ideal para</h2>
          <p className="mt-2 text-muted-foreground">
            En AsencX construimos sistemas a medida. Estos son algunos escenarios comunes donde
            nuestros clientes obtienen resultados rápidos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {useCases.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3">
                  <span>{c.title}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{c.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl">
          <h3 className="text-xl font-semibold">Lo que entregamos</h3>
          <p className="mt-2 text-muted-foreground">
            No es solo “hacer una web”. Te dejamos una solución lista para operar, con orden y soporte inicial.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((d) => (
            <Card key={d.title}>
              <CardContent className="p-6">
                <p className="font-medium">{d.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          *Cuando tengamos testimonios reales, los agregaremos aquí sin inventar nada.
        </p>
      </div>
    </section>
  );
}