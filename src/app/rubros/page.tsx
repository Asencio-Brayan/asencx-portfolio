import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RUBROS = [
  { title: "Restaurantes", desc: "Comandas + caja ágil + control de insumos.", includes: ["POS", "Pedidos a cocina", "Reportes diarios"], helps: "Reduce errores en pedidos y acelera el cobro." },
  { title: "Tiendas", desc: "Stock, ventas y reportes claros para decidir.", includes: ["Inventario", "Ventas rápidas", "Alertas de stock"], helps: "Evita quiebres y mejora el control del almacén." },
  { title: "Bodegas", desc: "Venta rápida con control mínimo de stock.", includes: ["Caja rápida", "Stock mínimo", "Cierres"], helps: "Vendes rápido y no pierdes mercadería por falta de control." },
  { title: "Ferreterías", desc: "Muchos productos, variantes y control por almacén.", includes: ["Inventario", "Kardex", "Importación de productos"], helps: "Controlas entradas/salidas y reduces pérdidas." },
  { title: "Farmacias", desc: "Control por lote/vencimiento y ventas ordenadas.", includes: ["Inventario", "Alertas", "Reportes"], helps: "Evitas vender vencidos y mejoras el control de stock." },
  { title: "Barberías & Salones", desc: "Agenda + clientes + control de servicios.", includes: ["Agenda", "Historial de clientes", "Caja"], helps: "Ordenas turnos y aumentas la atención sin caos." },
  { title: "Panaderías", desc: "Venta rápida + control de producción e insumos.", includes: ["POS", "Insumos", "Reportes por día"], helps: "Controlas lo que se va y lo que se produce." },
  { title: "Gimnasios", desc: "Membresías, pagos y asistencia.", includes: ["Socios", "Pagos", "Reportes"], helps: "Cobros ordenados y menos morosidad." },
  { title: "Servicios técnicos", desc: "Órdenes de trabajo y seguimiento.", includes: ["OT", "Estados", "Historial"], helps: "Mejoras tiempos de entrega y controlas pendientes." },
];

const WHATSAPP_LINK =
  "https://wa.me/51903389999?text=" +
  encodeURIComponent("Hola AsencX 👋, quiero consultar por un sistema para mi rubro. Mi rubro es: ____ y necesito: ____.");

export default function RubrosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Hecho para rubros como</h1>
        <p className="mt-2 text-muted-foreground">
          Menos vueltas, más control. Mira qué incluye y cómo te ayuda según tu negocio.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {RUBROS.map((r) => (
          <Card key={r.title} className="p-6">
            <h3 className="text-lg font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>

            <div className="mt-4 text-sm">
              <div className="font-medium">Incluye:</div>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                {r.includes.map((x) => (
                  <li key={x}>✓ {x}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-sm">
              <div className="font-medium">Te ayuda a:</div>
              <p className="mt-2 text-muted-foreground">{r.helps}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">¿No encuentras tu rubro?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Consulta aquí tu caso y te recomiendo los módulos exactos para tu negocio.
            </p>
          </div>

          <Button asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Consulta aquí por WhatsApp
            </a>
          </Button>
        </div>
      </Card>
    </main>
  );
}