import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { otherSolutions } from "@/data/otherSolutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: [string, number][] = [
    ["/", 1],
    ["/funding-options", 0.9],
    ["/check-eligibility", 0.9],
    ["/about", 0.6],
    ["/contact", 0.6],
    ["/partner", 0.5],
    ["/careers", 0.4],
    ["/privacy", 0.2],
    ["/terms", 0.2],
    ["/cookie-policy", 0.2],
  ];

  return [
    ...staticPages.map(([path, priority]) => ({
      url: absoluteUrl(path),
      lastModified,
      priority,
    })),
    ...solutions.map((s) => ({
      url: absoluteUrl(`/funding-options/${s.slug}`),
      lastModified,
      priority: 0.8,
    })),
    ...industries.map((i) => ({
      url: absoluteUrl(`/industries/${i.slug}`),
      lastModified,
      priority: 0.7,
    })),
    ...otherSolutions.map((s) => ({
      url: absoluteUrl(`/other-solutions/${s.slug}`),
      lastModified,
      priority: 0.6,
    })),
  ];
}
