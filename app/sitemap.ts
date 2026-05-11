import type { MetadataRoute } from "next";

const baseUrl = "https://www.timeaccel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/games", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.7, changeFrequency: "yearly" as const }
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date("2026-05-11"),
    changeFrequency: item.changeFrequency,
    priority: item.priority
  }));
}
