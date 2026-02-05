// src/components/layout/footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-foreground" />
              <div>
                <div className="text-sm font-semibold leading-none">AsencX</div>
                <div className="text-xs text-muted-foreground">Sistemas para negocios</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Soluciones web a medida para ventas, inventario y supervisión.
              Implementación modular, escalable y con soporte.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Secciones</div>
            <div className="mt-3 grid gap-2 text-sm">
              <a className="text-muted-foreground hover:text-foreground" href="#sistemas">
                Sistemas
              </a>
              <a className="text-muted-foreground hover:text-foreground" href="#como-trabajamos">
                Cómo trabajamos
              </a>
              <a className="text-muted-foreground hover:text-foreground" href="#servicios">
                Servicios
              </a>
              <a className="text-muted-foreground hover:text-foreground" href="#contacto">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Contacto</div>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <div>Correo: asencx.dev@gmail.com</div>
              <div>WhatsApp: +51 903 389 999</div>
              <div>Respuesta habitual: el mismo día (según horario)</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© AsencX. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-foreground">
              Inicio
            </Link>
            <a href="#contacto" className="hover:text-foreground">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}