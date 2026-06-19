import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blogs";
import { products } from "@/data/products";
import { getProductCanonicalSlug } from "@/lib/product-seo";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/inquiry`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${getProductCanonicalSlug(product)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.72
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
