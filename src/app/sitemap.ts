import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asencx.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/rubros`, lastModified: now },

    // Proyectos (ajusta si tus slugs son distintos)
    { url: `${base}/proyectos/restaurante-pos`, lastModified: now },
    { url: `${base}/proyectos/tienda-inventario`, lastModified: now },
    { url: `${base}/proyectos/panel-supervisor`, lastModified: now },
  ];
}