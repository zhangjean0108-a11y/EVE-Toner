import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blogs";
import { products } from "@/data/products";
import { seoLandingPages } from "@/data/seo-landing-pages";
import { getProductCanonicalSlug } from "@/lib/product-seo";
import { siteUrl } from "@/lib/site-url";

const PRIORITY_LANDING_PAGE_SLUGS = new Set([
  "ricoh-compatible-toner-supplier",
  "canon-compatible-toner-cartridge-supplier",
  "xerox-compatible-toner-supplier",
  "compatible-xerox-c2265-toner-cartridge-supplier",
  "konica-minolta-compatible-toner-supplier",
  "drum-unit-supplier-for-copier-dealers",
  "copier-spare-parts-supplier",
  "bulk-copier-toner-supplier-africa",
  "copier-spare-parts-supplier-africa-dealers",
  "copier-toner-supplier-middle-east-dealers",
  "copier-drum-unit-supplier",
  "copier-fuser-unit-supplier",
  "wholesale-copier-toner-cartridge",
  "hp-indigo-ink-supplier",
  "hp-indigo-q4132d-electroink-supplier",
  "hp-indigo-7000-7900-8000-electroink-supplier",
  "hp-indigo-3000-5000-series-electroink-supplier",
  "xerox-c60-c70-toner-supplier",
  "xerox-versalink-c7020-c7025-c7030-toner-supplier",
  "canon-npg-67-toner-cartridge-supplier",
  "kyocera-taskalfa-toner-cartridge-supplier"
]);

const PRIORITY_PRODUCT_LIMIT = 30;

function getProductSitemapScore(product: (typeof products)[number]) {
  const searchText = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
  const intentBoosts = [
    "hp indigo",
    "electroink",
    "drum unit",
    "fuser unit",
    "toner cartridge",
    "xerox",
    "ricoh",
    "canon",
    "konica minolta"
  ];
  const intentScore = intentBoosts.reduce(
    (score, phrase) => score + (searchText.includes(phrase) ? 8 : 0),
    0
  );

  return product.sold180 * 20 + intentScore;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/products`,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.86
    },
    {
      url: `${siteUrl}/factory-tour`,
      changeFrequency: "monthly",
      priority: 0.84
    },
    {
      url: `${siteUrl}/quality-control`,
      changeFrequency: "monthly",
      priority: 0.84
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/inquiry`,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];

  const priorityProducts = [...products]
    .sort((a, b) => getProductSitemapScore(b) - getProductSitemapScore(a))
    .slice(0, PRIORITY_PRODUCT_LIMIT);

  const productRoutes: MetadataRoute.Sitemap = priorityProducts.map((product) => ({
    url: `${siteUrl}/products/${getProductCanonicalSlug(product)}`,
    changeFrequency: "monthly",
    priority: product.sold180 > 0 ? 0.72 : 0.65
  }));

  const seoLandingRoutes: MetadataRoute.Sitemap = seoLandingPages
    .filter((page) => PRIORITY_LANDING_PAGE_SLUGS.has(page.slug))
    .map((page) => ({
      url: `${siteUrl}/products/${page.slug}`,
      changeFrequency: "monthly",
      priority: 0.82
    }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.72
  }));

  return [...staticRoutes, ...seoLandingRoutes, ...productRoutes, ...blogRoutes];
}
