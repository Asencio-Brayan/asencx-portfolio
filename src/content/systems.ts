export type SystemItem = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  features: string[];
};

export const systems: SystemItem[] = [
  {
    slug: 'restaurante-pos',
    name: 'Sistema Restaurante (POS)',
    summary: 'Pedidos, mesas, caja, cocina, reportes y control de ventas.',
    tags: ['POS', 'Cocina', 'Caja', 'Reportes'],
    features: [
      'Gestión de mesas y pedidos',
      'Impresión o vista cocina',
      'Caja y cierres diarios',
      'Productos y combos',
      'Reportes de ventas',
    ],
  },
  {
    slug: 'tienda-inventario',
    name: 'Tienda & Inventario',
    summary: 'Productos, stock, compras, ventas, clientes y alertas.',
    tags: ['Inventario', 'Ventas', 'Stock', 'Clientes'],
    features: [
      'Control de stock por producto',
      'Entradas/salidas y kardex',
      'Compras y proveedores',
      'Ventas y clientes',
      'Alertas de stock mínimo',
    ],
  },
  {
    slug: 'panel-supervisor',
    name: 'Panel Supervisor',
    summary: 'Monitoreo, auditoría, KPIs y gestión de usuarios/roles.',
    tags: ['KPIs', 'Roles', 'Auditoría', 'Dashboard'],
    features: [
      'KPIs por día/mes',
      'Historial de acciones (auditoría)',
      'Usuarios y roles',
      'Alertas y métricas clave',
      'Panel centralizado',
    ],
  },
];
