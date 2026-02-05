// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "AsencX",
  description: "Sistemas web a medida para negocios: POS, inventario y supervisión.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}