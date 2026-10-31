import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((c) => ({ url: `${base}/work/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
