import Link from 'next/link';
import { siteConfig } from '@/lib/constants/site';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="#sistemas" className="text-muted-foreground hover:text-foreground">
              Sistemas
            </Link>
            <Link href="#servicios" className="text-muted-foreground hover:text-foreground">
              Servicios
            </Link>
            <Link href="#contacto" className="text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado por <span className="font-medium text-foreground">{siteConfig.author}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
