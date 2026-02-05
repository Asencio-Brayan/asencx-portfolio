import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "51903389999"; // sin +
const EMAIL = "asencx.dev@gmail.com";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export function ContactButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild>
        <a
          href={waLink("Hola, quiero cotizar un sistema (POS / Inventario / Supervisor).")}
          target="_blank"
          rel="noreferrer"
        >
          Cotizar por WhatsApp
        </a>
      </Button>

      <Button variant="outline" asChild>
        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Cotización AsencX")}`}>
          Enviar mensaje por correo
        </a>
      </Button>
    </div>
  );
}