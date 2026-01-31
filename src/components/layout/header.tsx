'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig } from '@/lib/constants/site';

type NavItem = { label: string; hash: `#${string}` };

const navItems: NavItem[] = [
  { label: 'Sistemas', hash: '#sistemas' },
  { label: 'Cómo trabajamos', hash: '#como-trabajamos' }, // asegúrate que esta sección tenga ese id
  { label: 'Servicios', hash: '#servicios' },
  { label: 'Contacto', hash: '#contacto' },
];

export function Header() {
  const pathname = usePathname();

  // Si estamos en Home, usamos solo #hash.
  // Si estamos en otra ruta (ej. /proyectos/xxx), usamos /#hash para volver al Home.
  const hrefFor = (hash: NavItem['hash']) => (pathname === '/' ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-base">{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              href={hrefFor(item.hash)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <Button asChild size="sm">
            <Link href={hrefFor('#contacto')}>Contactar</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.hash}
                    href={hrefFor(item.hash)}
                    className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <Button asChild className="mt-2">
                  <Link href={hrefFor('#contacto')}>Contactar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}