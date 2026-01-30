import Link from 'next/link';
import { siteConfig } from '@/lib/constants/site';

function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.links.whatsappNumber}?text=${text}`;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div className="space-y-3">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <p className="text-sm text-muted-foreground">
              Desarrollo de sistemas web modernos con buenas prácticas, rendimiento y escalabilidad.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">Secciones</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#sistemas"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sistemas
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">Contacto</p>

            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">
                Correo:{' '}
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-foreground underline underline-offset-4 hover:opacity-80"
                >
                  {siteConfig.links.email}
                </a>
              </div>

              <div className="text-muted-foreground">
                WhatsApp:{' '}
                <a
                  href={whatsappLink(
                    `Hola, quiero cotizar una solución web para mi negocio.\n\nNegocio:\nNecesidades:\nUsuarios:\n\nGracias.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline underline-offset-4 hover:opacity-80"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Respuesta habitual: el mismo día (según horario).
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado por <span className="text-foreground">{siteConfig.author}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}