import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants/site';

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo / Nombre */}
        <Link href="/" className="text-lg font-bold">
          {siteConfig.name}
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-6">
          <Link
            href="#sistemas"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Sistemas
          </Link>
          <Link
            href="#servicios"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Servicios
          </Link>

          <Button asChild size="sm">
           <Link href="#contacto">Contactar</Link>
          </Button>

        </nav>
      </div>
    </header>
  );
}