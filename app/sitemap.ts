import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blogs";
import { productCatalogCategories, products } from "@/data/products";
import { seoLandingPages } from "@/data/seo-landing-pages";
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
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86
    },
    {
      url: `${siteUrl}/factory-tour`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84
    },
    {
      url: `${siteUrl}/quality-control`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84
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

  const seoLandingRoutes: MetadataRoute.Sitemap = seoLandingPages.map((page) => ({
    url: `${siteUrl}/products/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.82
  }));

  const productCategoryRoutes: MetadataRoute.Sitemap = productCatalogCategories.map((category) => ({
    url: `${siteUrl}/products?category=${encodeURIComponent(category)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: category === "Digital Press Ink" ? 0.82 : 0.72
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.72
  }));

  return [...staticRoutes, ...productCategoryRoutes, ...seoLandingRoutes, ...productRoutes, ...blogRoutes];
}
