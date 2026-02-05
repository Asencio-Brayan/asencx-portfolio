// src/content/systems.ts

export type ProjectImage = {
  heroSrc: string;   // imagen grande (vista previa)
  cardSrc: string;   // imagen para tarjeta (home)
  alt: string;
};

export type ProjectModule = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;

  // Opcionales, pero en el page.tsx hacemos fallback con ?? []
  tags?: string[];
  funcionalidades?: string[];
  modules?: ProjectModule[];

  image: ProjectImage;

  // Para CTA
  whatsappText?: string;
};

export const PROJECTS: Record<string, Project> = {
  "restaurante-pos": {
    slug: "restaurante-pos",
    title: "Sistema Restaurante (POS)",
    subtitle: "Pedidos, mesas, caja, cocina, reportes y control de ventas.",
    tags: ["POS", "Cocina", "Caja", "Reportes"],
    funcionalidades: [
      "Gestión de mesas y pedidos",
      "Impresión o vista de cocina",
      "Caja y cierres diarios",
      "Productos y combos",
      "Reportes de ventas",
    ],
    modules: [
      {
        title: "Pedidos y Mesas",
        description: "Gestión de mesas, estados de pedidos y flujo cocina–caja.",
      },
      {
        title: "Cocina",
        description: "Vista dedicada para cocina con pedidos en tiempo real.",
      },
      {
        title: "Caja",
        description: "Apertura, ventas, cobros y cierre diario.",
      },
      {
        title: "Reportes",
        description: "Ventas por día, productos más vendidos y métricas clave.",
      },
    ],
    image: {
      heroSrc: "/projets/restaurante-pos/1.2.png",
      cardSrc: "/projets/restaurante-pos/1.2.png",
      alt: "Sistema Restaurante (POS) - demo",
    },
    whatsappText: "Hola AsencX, quiero cotizar el Sistema Restaurante (POS).",
  },

  "tienda-inventario": {
    slug: "tienda-inventario",
    title: "Inventario",
    subtitle: "Entradas/salidas, alertas, kardex y control por almacén.",
    tags: ["Inventario", "Alertas", "Kardex"],
    funcionalidades: ["Stock mínimo y alertas", "Importación de productos", "Historial y auditoría"],
    modules: [
      { title: "Movimientos", description: "Entradas/salidas con historial y control por almacén." },
      { title: "Alertas", description: "Stock mínimo, productos críticos y avisos." },
      { title: "Kardex", description: "Historial y auditoría de movimientos." },
    ],
    image: {
      heroSrc: "/projets/tienda-Inventario/1.1.png",
      cardSrc: "/projets/tienda-Inventario/1.1.png",
      alt: "Inventario - demo",
    },
    whatsappText: "Hola AsencX, quiero cotizar el módulo de Inventario.",
  },

  "panel-supervisor": {
    slug: "panel-supervisor",
    title: "Panel Supervisor",
    subtitle: "KPIs, ventas por día, productos top y control general.",
    tags: ["KPIs", "Reportes", "Sucursal"],
    funcionalidades: ["KPIs en tiempo real", "Filtros por fecha/sucursal", "Exportación"],
    modules: [
      { title: "Dashboard", description: "KPIs y métricas rápidas para decisiones." },
      { title: "Ventas", description: "Ventas por día y por hora (visual)." },
      { title: "Alertas", description: "Productos críticos y notificaciones (demo visual)." },
    ],
    image: {
      heroSrc: "/projets/panel-supervisor/1.png",
      cardSrc: "/projets/panel-supervisor/1.png",
      alt: "Panel Supervisor - demo",
    },
    whatsappText: "Hola AsencX, quiero cotizar el Panel Supervisor.",
  },
};

// ✅ Esto lo usa tu sección (si tienes src/components/sections/systems.tsx importando { systems })
export const systems = [
  {
    title: "Sistema POS",
    desc: "Venta, cobro, tickets y cierre de caja sin estrés.",
    bullets: ["Caja y cierre en minutos", "Tickets / boletas", "Usuarios por rol"],
    href: "/proyectos/restaurante-pos",
    image: "/projets/restaurante-pos/1.2.png",
    imageAlt: "POS demo",
  },
  {
    title: "Inventario",
    desc: "Entradas/salidas, alertas, kardex y control por almacén.",
    bullets: ["Stock mínimo y alertas", "Importación de productos", "Historial y auditoría"],
    href: "/proyectos/tienda-inventario",
    image: "/projets/tienda-Inventario/1.1.png",
    imageAlt: "Inventario demo",
  },
  {
    title: "Panel Supervisor",
    desc: "Indicadores, ventas por día, productos top y control general.",
    bullets: ["KPIs en tiempo real", "Filtros por fecha/sucursal", "Exportación"],
    href: "/proyectos/panel-supervisor",
    image: "/projets/panel-supervisor/1.png",
    imageAlt: "Panel supervisor demo",
  },
];
