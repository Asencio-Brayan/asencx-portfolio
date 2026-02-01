export type SystemItem = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  features: string[];
  screenshots?: string[];
  modules?: { title: string; desc: string }[];
};

export const systems: SystemItem[] = [
  {
    slug: 'restaurante-pos',
    name: 'Sistema Restaurante (POS)',
    summary: 'Pedidos, mesas, caja, cocina, reportes y control de ventas.',
    tags: ['POS', 'Cocina', 'Caja', 'Reportes'],
    features: [
      'Gestión de mesas y pedidos',
      'Impresión o vista de cocina',
      'Caja y cierres diarios',
      'Productos y combos',
      'Reportes de ventas',
    ],
    screenshots: [
     '/projects/restaurante-pos/1.png',
    ],
    modules: [
      {
        title: 'Pedidos y Mesas',
        desc: 'Gestión de mesas, estados de pedidos y flujo cocina–caja.',
      },
      {
        title: 'Cocina',
        desc: 'Vista dedicada para cocina con pedidos en tiempo real.',
      },
      {
        title: 'Caja',
        desc: 'Apertura, ventas, cobros y cierre diario.',
      },
      {
        title: 'Reportes',
        desc: 'Ventas por día, productos más vendidos y métricas clave.',
      },
    ],
  },

  {
    slug: 'tienda-inventario',
    name: 'Tienda & Inventario',
    summary: 'Productos, stock, compras, ventas, clientes y alertas.',
    tags: ['Inventario', 'Ventas', 'Stock', 'Clientes'],
    features: [
      'Control de stock por producto',
      'Entradas y salidas (kardex)',
      'Compras y proveedores',
      'Ventas y clientes',
      'Alertas de stock mínimo',
    ],
    screenshots: [
     '/projects/tienda-inventario/1.png',
       
    ],
    modules: [
      {
        title: 'Inventario',
        desc: 'Control de stock, movimientos y alertas automáticas.',
      },
      {
        title: 'Ventas',
        desc: 'Registro de ventas, clientes y comprobantes.',
      },
      {
        title: 'Compras',
        desc: 'Gestión de proveedores y entradas de mercadería.',
      },
      {
        title: 'Reportes',
        desc: 'Stock actual, ventas por periodo y productos top.',
      },
    ],
  },

  {
    slug: 'panel-supervisor',
    name: 'Panel Supervisor',
    summary: 'Monitoreo, auditoría, KPIs y gestión de usuarios y roles.',
    tags: ['KPIs', 'Roles', 'Auditoría', 'Dashboard'],
    features: [
      'KPIs por día y mes',
      'Historial de acciones (auditoría)',
      'Usuarios y roles',
      'Alertas y métricas clave',
      'Panel centralizado',
    ],
    screenshots: [
     '/projects/panel-supervisor/1.png',
       
    ],
    modules: [
      {
        title: 'Dashboard',
        desc: 'Indicadores clave y métricas en tiempo real.',
      },
      {
        title: 'Auditoría',
        desc: 'Registro de acciones y control de operaciones.',
      },
      {
        title: 'Usuarios y Roles',
        desc: 'Gestión de accesos y permisos por perfil.',
      },
      {
        title: 'Alertas',
        desc: 'Notificaciones ante eventos críticos.',
      },
    ],
  },
];