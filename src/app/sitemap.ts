import type { MetadataRoute } from "next";
import { DOCUMENT_TYPES, INDUSTRIES, SITE_URL } from "@/lib/constants";
import type { DocumentType, Industry } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/generate`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const docPages: MetadataRoute.Sitemap = (
    Object.keys(DOCUMENT_TYPES) as DocumentType[]
  ).map((type) => ({
    url: `${SITE_URL}/docs/${DOCUMENT_TYPES[type].slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = (
    Object.keys(INDUSTRIES) as Industry[]
  ).map((industry) => ({
    url: `${SITE_URL}/for/${industry}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...docPages, ...industryPages];
}
