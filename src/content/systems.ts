// src/content/systems.ts

export type ProjectModule = {
  title: string;
  description: string;
};

export type ProjectData = {
  slug: string;
  title: string;

  // ✅ para el slug page (tu page.tsx usa data.subtitle)
  subtitle?: string;

  // tu campo original
  short: string;

  tags?: string[];
  funcionalidades?: string[];
  modules?: ProjectModule[];
  whatsappText?: string;

  image: {
    src: string;
    alt: string;
  };
};

// ✅ Estructura “nueva” (la que tú tienes para cards)
export type SystemCard = {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  image: string;
  imageAlt: string;
};

/**
 * OJO IMPORTANTE (Vercel):
 * - Linux es CASE-SENSITIVE.
 * - Estos paths deben existir EXACTOS en /public.
 */

export const systems: SystemCard[] = [
  {
    title: "Sistema POS",
    desc: "Venta, cobro, tickets y cierre de caja sin estrés.",
    bullets: ["Caja y cierre en minutos", "Tickets / boletas", "Usuarios por rol"],
    href: "/proyectos/restaurante-pos",
    image: "/projets/restaurante-pos/1.2.png",
    imageAlt: "Sistema POS (demo)",
  },
  {
    title: "Inventario",
    desc: "Entradas/salidas, alertas, kardex y control por almacén.",
    bullets: ["Stock mínimo y alertas", "Importación de productos", "Historial y auditoría"],
    href: "/proyectos/tienda-inventario",
    image: "/projets/tienda-Inventario/1.1.png",
    imageAlt: "Inventario (demo)",
  },
  {
    title: "Panel Supervisor",
    desc: "Indicadores, ventas por día, productos top y control general.",
    bullets: ["KPIs en tiempo real", "Filtros por fecha/sucursal", "Exportación"],
    href: "/proyectos/panel-supervisor",
    image: "/projets/panel-supervisor/1.png",
    imageAlt: "Panel Supervisor (demo)",
  },
];

// ✅ Compatibilidad: lo que tu src/components/sections/systems.tsx está esperando
export type SystemsSectionItem = {
  slug: string;
  name: string;
  summary: string;
  tags: string[]; // siempre definido (así se acaba el “posiblemente undefined”)
  href: string;
  image?: string;
  imageAlt?: string;
};

// 👇 Export “SYSTEMS” (mayúscula) para tu SystemsSection actual
export const SYSTEMS: SystemsSectionItem[] = systems.map((s) => {
  const slug = s.href.split("/").pop() || s.title.toLowerCase().replace(/\s+/g, "-");
  return {
    slug,
    name: s.title,
    summary: s.desc,
    tags: s.bullets, // uso bullets como “tags/beneficios”
    href: s.href,
    image: s.image,
    imageAlt: s.imageAlt,
  };
});

export const PROJECTS: Record<string, ProjectData> = {
  "restaurante-pos": {
    slug: "restaurante-pos",
    title: "Sistema Restaurante (POS)",
    short: "Pedidos, mesas, caja, cocina, reportes y control de ventas.",
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
      { title: "POS", description: "Venta rápida, cobro, tickets y control de caja." },
      { title: "Cocina", description: "Comandas por estación, impresión o pantalla." },
      { title: "Reportes", description: "Ventas por día, productos top, cierres y métricas." },
      { title: "Usuarios", description: "Roles y permisos por puesto." },
    ],
    whatsappText: "Hola AsencX, quiero cotizar el Sistema Restaurante (POS).",
    image: { src: "/projets/restaurante-pos/1.2.png", alt: "Vista previa POS" },
  },

  "tienda-inventario": {
    slug: "tienda-inventario",
    title: "Sistema de Inventario",
    short: "Entradas/salidas, alertas, kardex y control por almacén.",
    subtitle: "Entradas/salidas, alertas, kardex y control por almacén.",

    tags: ["Stock", "Kardex", "Alertas"],
    funcionalidades: [
      "Entradas y salidas (movimientos)",
      "Stock mínimo y alertas",
      "Kardex / historial",
      "Importación de productos",
      "Auditoría",
    ],
    modules: [
      { title: "Movimientos", description: "Entradas/salidas con motivo y responsable." },
      { title: "Alertas", description: "Stock mínimo, reposición y sugerencias." },
      { title: "Kardex", description: "Historial completo por producto." },
      { title: "Almacenes", description: "Control por almacén/sucursal." },
    ],
    whatsappText: "Hola AsencX, quiero cotizar el Sistema de Inventario.",
    image: { src: "/projets/tienda-Inventario/1.1.png", alt: "Vista previa Inventario" },
  },

  "panel-supervisor": {
    slug: "panel-supervisor",
    title: "Panel Supervisor",
    short: "Indicadores, ventas por día, productos top y control general.",
    subtitle: "Indicadores, ventas por día, productos top y control general.",

    tags: ["KPIs", "Ventas", "Dashboard"],
    funcionalidades: ["KPIs en tiempo real", "Filtros por fecha/sucursal", "Exportación"],
    modules: [
      { title: "Dashboard", description: "KPIs y widgets en tiempo real." },
      { title: "Filtros", description: "Fecha / sucursal / caja / usuario." },
      { title: "Exportación", description: "Exporta reportes para contabilidad." },
    ],
    whatsappText: "Hola AsencX, quiero cotizar el Panel Supervisor.",
    image: { src: "/projets/panel-supervisor/1.png", alt: "Vista previa Panel Supervisor" },
  },
};
