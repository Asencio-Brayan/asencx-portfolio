import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const highlights = [
  {
    title: 'Enfoque por etapas',
    desc: 'Entregas parciales para validar rápido y reducir riesgos.',
  },
  {
    title: 'Claridad en alcance',
    desc: 'Definimos módulos, pantallas y prioridades desde el inicio.',
  },
  {
    title: 'Calidad y mantenibilidad',
    desc: 'Código limpio, estructura profesional y buenas prácticas.',
  },
  {
    title: 'Soporte real',
    desc: 'Acompañamiento post-entrega para ajustes y mejoras.',
  },
];

export function ProcessSection() {
  return (
    <section id="como-trabajamos" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Cómo trabajamos</h2>
          <p className="mt-2 text-muted-foreground">
            Un proceso claro para entregar un sistema estable, rápido y adaptado a tu negocio.
          </p>
        </div>

        {/* Bloque que “llena” y da confianza */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <Card key={h.title}>
              <CardHeader>
                <CardTitle className="text-base">{h.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {h.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Proceso</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Así avanzamos desde la idea hasta un sistema funcionando en producción.
            </p>
          </div>

          <Separator className="mb-6" />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="step-1">
              <AccordionTrigger>1) Diagnóstico y levantamiento</AccordionTrigger>
              <AccordionContent>
                Recolectamos requisitos, flujo del negocio, roles y reportes. Identificamos lo esencial para
                iniciar sin complicaciones y definimos prioridades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-2">
              <AccordionTrigger>2) Propuesta (alcance + módulos)</AccordionTrigger>
              <AccordionContent>
                Te presentamos una propuesta con módulos, pantallas y entregables. Definimos fases para que
                puedas ver avances reales y validar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-3">
              <AccordionTrigger>3) Diseño UI/UX y experiencia</AccordionTrigger>
              <AccordionContent>
                Diseñamos una interfaz clara y rápida. Priorizamos UX: menos clics, pantallas limpias y flujo
                intuitivo para el equipo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-4">
              <AccordionTrigger>4) Desarrollo por entregas (iteraciones)</AccordionTrigger>
              <AccordionContent>
                Construimos por fases y revisamos contigo. Ajustamos según feedback. Así evitamos “sorpresas”
                al final y mantenemos control del alcance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-5">
              <AccordionTrigger>5) Pruebas y estabilidad</AccordionTrigger>
              <AccordionContent>
                Probamos flujos críticos, validaciones y permisos. Corregimos detalles y dejamos el sistema listo
                para uso real.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-6">
              <AccordionTrigger>6) Entrega, capacitación y soporte</AccordionTrigger>
              <AccordionContent>
                Despliegue, capacitación por roles y soporte post-entrega. Luego, mejoras y nuevas funciones según
                crecimiento del negocio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}