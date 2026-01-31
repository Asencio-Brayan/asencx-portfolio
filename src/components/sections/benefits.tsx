import { Card, CardContent } from '@/components/ui/card';

export function BenefitsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">
            ¿Por qué elegir un sistema a medida?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Un sistema bien diseñado no solo organiza tu negocio,
            te ayuda a crecer y tomar mejores decisiones.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Menos errores operativos',
              desc: 'Automatización y validaciones que evitan pérdidas y reprocesos.',
            },
            {
              title: 'Información clara en tiempo real',
              desc: 'Reportes y datos para decidir con seguridad.',
            },
            {
              title: 'Adaptado a tu negocio',
              desc: 'El sistema se ajusta a tu forma de trabajar.',
            },
            {
              title: 'Escalable a futuro',
              desc: 'Empieza simple y crece según tus necesidades.',
            },
            {
              title: 'Control y supervisión',
              desc: 'Usuarios, permisos y trazabilidad de acciones.',
            },
            {
              title: 'Ahorro de tiempo y costos',
              desc: 'Menos tareas manuales, más enfoque en el negocio.',
            },
          ].map((b) => (
            <Card key={b.title}>
              <CardContent className="p-6">
                <p className="font-medium">{b.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
