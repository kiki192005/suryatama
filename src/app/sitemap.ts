import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suryatama-indonesia.co.id";

const routes = [
  "",
  "/about",
  "/services",
  "/fleet",
  "/operations",
  "/clients",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    sitemapEntries.push({
      url: `${baseUrl}/id${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });

    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 0.9 : 0.7,
      alternates: {
        languages: {
          id: `${baseUrl}/id${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });
  }

  return sitemapEntries;
}
