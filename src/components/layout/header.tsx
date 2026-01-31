'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/lib/constants/site';

type NavItem = {
  label: string;
  hash: `#${string}`;
};

const navItems: NavItem[] = [
  { label: 'Sistemas', hash: '#sistemas' },
  { label: 'Cómo trabajamos', hash: '#como-trabajamos' },
  { label: 'Servicios', hash: '#servicios' },
  { label: 'Contacto', hash: '#contacto' },
];

export function Header() {
  const pathname = usePathname();

  // Si estás en home usa #hash, si no /#hash
  const hrefFor = (hash: NavItem['hash']) =>
    pathname === '/' ? hash : `/${hash}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="font-semibold text-base">
          {siteConfig.name}
        </Link>

        {/* ================= DESKTOP ================= */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              href={hrefFor(item.hash)}
              className="whitespace-nowrap text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <Button asChild size="sm">
            <Link href={hrefFor('#contacto')}>Contactar</Link>
          </Button>
        </nav>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-75git add .">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.hash}
                    href={hrefFor(item.hash)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
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