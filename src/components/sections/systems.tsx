import Link from 'next/link';
import { systems } from '@/content/systems';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function SystemsSection() {
  return (
    <section id="sistemas" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Sistemas</h2>
          <p className="mt-2 text-muted-foreground">
            Demos y módulos listos para adaptar a tu negocio. Diseño limpio, rápido y escalable.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((item) => (
            <Card key={item.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm text-muted-foreground">{item.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/proyectos/${item.slug}`}>Ver detalles</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}