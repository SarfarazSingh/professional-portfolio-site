import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:43127";
  const routes = [
    "",
    "/about",
    "/work",
    "/experience",
    "/insights",
    "/contact",
    "/recruiter",
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.8 : 0.7,
  }));
}
