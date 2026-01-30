'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Restaurantes</Badge>
            <Badge variant="secondary">Tiendas</Badge>
            <Badge variant="secondary">Paneles admin</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Sistemas web profesionales para tu negocio
          </h1>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Construimos software moderno para ventas, inventario y supervisión.
            Enfocado en rendimiento, UX y escalabilidad.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#sistemas">Ver sistemas</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="#contacto">Cotizar</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}