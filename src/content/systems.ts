export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  funcionalidades: string[];
  modules: { title: string; description: string }[];
  image: { src: string; alt: string };
};

export const PROJECTS: Record<string, Project> = {
  "restaurante-pos": {
    slug: "restaurante-pos",
    title: "Sistema Restaurante (POS)",
    subtitle: "Pedidos, mesas, caja, cocina, reportes y control de ventas.",
    description: "Lo principal del sistema (demo visual).",
    funcionalidades: [
      "Gestión de mesas y pedidos",
      "Impresión o vista de cocina",
      "Caja y cierres diarios",
      "Productos y combos",
      "Reportes de ventas",
    ],
    modules: [
      { title: "Pedidos y Mesas", description: "Gestión de mesas, estados de pedidos y flujo cocina–caja." },
      { title: "Cocina", description: "Vista dedicada para cocina con pedidos en tiempo real." },
      { title: "Caja", description: "Apertura, ventas, cobros y cierre diario." },
      { title: "Reportes", description: "Ventas por día, productos más vendidos y métricas clave." },
    ],
    image: {
      src: "/projets/restaurante-pos/1.2.png",
      alt: "Vista previa - Sistema Restaurante (POS)",
    },
  },

  "tienda-inventario": {
    slug: "tienda-inventario",
    title: "Inventario (Demo)",
    subtitle: "Entradas/salidas, alertas, kardex y control por almacén.",
    description: "Pantalla visual para capturas.",
    funcionalidades: [
      "Stock mínimo y alertas",
      "Importación de productos",
      "Historial y auditoría",
    ],
    modules: [
      { title: "Productos", description: "Lista, búsqueda y stock por SKU." },
      { title: "Alertas", description: "Avisos de stock bajo configurables." },
      { title: "Movimientos", description: "Entradas/salidas y kardex (visual)." },
    ],
    image: {
      src: "/projets/tienda-inventario/1.1.png",
      alt: "Vista previa - Inventario (Demo)",
    },
  },

  "panel-supervisor": {
    slug: "panel-supervisor",
    title: "Panel Supervisor (Demo)",
    subtitle: "KPIs, ventas, top productos y alertas.",
    description: "Dashboard visual para capturas.",
    funcionalidades: [
      "KPIs en tiempo real (visual)",
      "Alertas de stock bajo",
      "Exportación (botón visual)",
    ],
    modules: [
      { title: "Dashboard", description: "KPIs, tickets, promedio y pagos." },
      { title: "Top productos", description: "Ranking del día (visual)." },
      { title: "Tabla", description: "Detalle por hora (visual)." },
    ],
    image: {
      src: "/projets/panel-supervisor/1.png",
      alt: "Vista previa - Panel Supervisor (Demo)",
    },
  },
};