import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://maxzhang1.me";
  const routes = ["", "/projects", "/drawings", "/movies", "/meaning"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}