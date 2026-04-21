import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cognifica.app";
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/for-employers`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/for-clinics`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/for-insurers`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/how-it-works`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/pilot`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: "monthly" },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({ ...r, lastModified: now }));
}
