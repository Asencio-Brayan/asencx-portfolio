import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    title: 'Escuchamos tu negocio',
    desc: 'Entendemos cómo trabajas, qué problemas tienes y qué necesitas mejorar.',
  },
  {
    title: 'Definimos la solución',
    desc: 'Proponemos un sistema adaptado a tus procesos y objetivos reales.',
  },
  {
    title: 'Desarrollamos e implementamos',
    desc: 'Construimos el sistema y lo dejamos listo para usar en tu operación diaria.',
  },
  {
    title: 'Acompañamiento inicial',
    desc: 'Ajustes, soporte y seguimiento para asegurar una buena adopción.',
  },
];

export function ProcessSection() {
  return (
    <section id="como-trabajamos" className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Cómo trabajamos</h2>
          <p className="mt-2 text-muted-foreground">
            Un proceso claro y acompañado, enfocado en tu negocio,
            no en lo técnico.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Paso {index + 1}
                </p>
                <p className="mt-1 font-semibold">{step.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}