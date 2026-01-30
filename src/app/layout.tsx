import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constants/site';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Sistemas web profesionales`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL('https://asencx.vercel.app'),
  openGraph: {
   title: `${siteConfig.name} | Soluciones para Negocios`,
   description: siteConfig.description,
   url: 'https://asencx.vercel.app',
   siteName: siteConfig.name,
   type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}