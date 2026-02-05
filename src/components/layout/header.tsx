// src/components/layout/header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/51903389999?text=Hola%20AsencX%2C%20quiero%20cotizar%20un%20sistema";

const nav = [
  { label: "Sistemas", href: "#sistemas" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-foreground" />
          <div>
            <div className="text-sm font-semibold leading-none">AsencX</div>
            <div className="text-xs text-muted-foreground">Sistemas para negocios</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                "text-sm transition-colors " +
                (hash === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="hidden sm:inline-flex w-auto rounded-2xl"
            asChild
          >
            <a href="#sistemas">Ver sistemas</a>
          </Button>

          <Button className="hidden sm:inline-flex w-auto rounded-2xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Contactar <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-auto rounded-2xl">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px]">
                <div className="mt-6 grid gap-3">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-xl border px-3 py-2 text-sm hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button className="mt-2 w-full rounded-2xl" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      Contactar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}