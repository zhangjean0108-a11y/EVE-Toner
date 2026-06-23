import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductsPageClient } from "@/components/ProductsPageClient";
import { productCatalogCategories, products } from "@/data/products";
import { getProductCanonicalSlug } from "@/lib/product-seo";
import { socialImage, siteUrl } from "@/lib/site-url";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const requestedCategory = resolvedSearchParams?.category;
  const category =
    requestedCategory && productCatalogCategories.includes(requestedCategory) ? requestedCategory : undefined;
  const isDigitalPressInk = category === "Digital Press Ink";
  const title = isDigitalPressInk
    ? "HP Indigo ElectroInk & Digital Press Ink Supplier | EVE Toner"
    : category
      ? `${category} Supplier for B2B Buyers | EVE Toner`
      : "Products | Compatible Copier Toner & Spare Parts | EVE Toner";
  const description = isDigitalPressInk
    ? "Browse compatible HP Indigo ElectroInk and digital press ink products for B2B buyers. Model confirmation, export packing, OEM/ODM support and fast quotation from EVE Toner."
    : category
      ? `Browse EVE Toner ${category} products for B2B procurement, bulk supply, export packing and fast inquiry response.`
      : "Browse EVE Toner product catalog, including toner cartridges, toner powder, drum units, developer units, copier machines and digital press ink.";
  const url = category ? `${siteUrl}/products?category=${encodeURIComponent(category)}` : `${siteUrl}/products`;

  return {
    title,
    description,
    alternates: {
      canonical: category ? `/products?category=${encodeURIComponent(category)}` : "/products"
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "EVE Toner",
      images: [socialImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedCategory = resolvedSearchParams?.category;
  const initialCategory =
    requestedCategory && productCatalogCategories.includes(requestedCategory) ? requestedCategory : "All";
  const catalogProducts =
    initialCategory === "All" ? products : products.filter((product) => product.category === initialCategory);
  const pageUrl =
    initialCategory === "All"
      ? `${siteUrl}/products`
      : `${siteUrl}/products?category=${encodeURIComponent(initialCategory)}`;
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      initialCategory === "All"
        ? "EVE Toner Product Catalog"
        : `${initialCategory} Supplier Product Catalog`,
    url: pageUrl,
    numberOfItems: catalogProducts.length,
    itemListElement: catalogProducts.slice(0, 48).map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteUrl}/products/${getProductCanonicalSlug(product)}`
    }))
  };

  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_45%,#fff7e8_100%)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <section className="border-b border-slate-200 pt-12 md:pt-16">
          <div className="container-page grid gap-8 pb-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                Product Center
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                EVE Toner Product Catalog, Ready for B2B Inquiry
              </h1>
              <div className="mt-5 flex h-1.5 w-[220px] overflow-hidden rounded-full bg-slate-950">
                <span className="h-full w-16 bg-[var(--brand-cyan)]" />
                <span className="h-full w-16 bg-[var(--brand-magenta)]" />
                <span className="h-full w-12 bg-[var(--brand-yellow)]" />
                <span className="h-full flex-1 bg-slate-950" />
              </div>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-600">
                Browse compatible copier toner, toner powder, drum units, developer units, copier machines and digital press supplies for B2B procurement and inquiry conversion.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-lg border border-white/70 bg-white/70 p-4 shadow-xl shadow-cyan-950/10 backdrop-blur">
              <Stat label="Synced Items" value={`${products.length}`} />
              <Stat label="MOQ From" value="1 pc" />
              <Stat label="Inquiry" value="B2B" />
            </div>
          </div>
        </section>
        <ProductsPageClient
          products={products}
          categories={productCatalogCategories}
          initialCategory={initialCategory}
        />
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 text-center">
      <div className="text-2xl font-black text-slate-950">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}
