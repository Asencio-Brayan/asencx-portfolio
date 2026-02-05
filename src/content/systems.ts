// src/content/systems.ts

export type ProjectModule = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;

  tags?: string[];
  funcionalidades?: string[];
  modules?: ProjectModule[];

  image: {
    src: string; // ruta dentro de /public
    alt: string;
  };

  whatsappText?: string;
};

export const PROJECTS: Record<string, Project> = {
  "restaurante-pos": {
    slug: "restaurante-pos",
    title: "Sistema Restaurante (POS)",
    subtitle: "Pedidos, mesas, caja, cocina, reportes y control de ventas.",
    description:
      "Demo visual para capturas. Incluye los módulos más comunes en un flujo cocina–caja y reportes.",
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
      src: "/projets/restaurante-pos/1.2.png",
      alt: "Vista previa - Sistema Restaurante (POS)",
    },
    whatsappText:
      "Hola AsencX, quiero cotizar el Sistema Restaurante (POS). ¿Me ayudas con una propuesta por módulos?",
  },

  "tienda-inventario": {
    slug: "tienda-inventario",
    title: "Inventario (Demo)",
    subtitle: "Entradas/salidas, alertas, kardex y control por almacén.",
    description:
      "Demo visual para capturas. Control de stock, alertas y trazabilidad básica.",
    tags: ["Inventario", "Kardex", "Alertas"],
    funcionalidades: [
      "Stock mínimo y alertas",
      "Importación de productos",
      "Historial y auditoría",
    ],
    modules: [
      {
        title: "Productos",
        description: "Listado, SKU, categorías y búsqueda rápida.",
      },
      {
        title: "Movimientos",
        description: "Entradas / salidas por compra, ajuste o venta.",
      },
      {
        title: "Alertas",
        description: "Aviso de stock bajo por mínimo configurable.",
      },
      {
        title: "Kardex",
        description: "Historial de movimientos con trazabilidad básica.",
      },
    ],
    image: {
      // OJO: respeta MAYÚSCULAS si tu carpeta es "tienda-Inventario"
      src: "/projets/tienda-Inventario/1.1.png",
      alt: "Vista previa - Inventario (Demo)",
    },
    whatsappText:
      "Hola AsencX, quiero cotizar el módulo de Inventario. ¿Me pasas precio y tiempos?",
  },

  "panel-supervisor": {
    slug: "panel-supervisor",
    title: "Panel Supervisor (Demo)",
    subtitle: "KPIs, ventas por día, productos top y alertas.",
    description:
      "Demo visual para capturas. Dashboard con métricas, ranking y tabla de ventas.",
    tags: ["KPIs", "Ventas", "Alertas"],
    funcionalidades: [
      "KPIs en tiempo real",
      "Filtros por fecha/sucursal",
      "Exportación",
    ],
    modules: [
      {
        title: "Dashboard",
        description: "KPIs, tickets, ticket promedio y medios de pago.",
      },
      {
        title: "Ranking de productos",
        description: "Top productos del día y tendencias.",
      },
      {
        title: "Alertas",
        description: "Stock bajo y productos destacados (demo).",
      },
      {
        title: "Reportes",
        description: "Ventas por hora/día y exportación (demo).",
      },
    ],
    image: {
      src: "/projets/panel-supervisor/1.png",
      alt: "Vista previa - Panel Supervisor (Demo)",
    },
    whatsappText:
      "Hola AsencX, quiero cotizar el Panel Supervisor (dashboard de ventas). ¿Me pasas propuesta?",
  },
};
