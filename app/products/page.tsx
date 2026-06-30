import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductsPageClient } from "@/components/ProductsPageClient";
import { productCatalogCategories, products } from "@/data/products";
import { getProductCanonicalSlug, getProductImageAlt } from "@/lib/product-seo";
import { socialImage, siteUrl } from "@/lib/site-url";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

const categorySeoCopy: Record<string, { title: string; description: string }> = {
  "Toner Cartridge": {
    title: "Compatible Toner Cartridge Supplier for Dealers | EVE Toner",
    description:
      "Browse compatible toner cartridge supply for copier dealers, importers and Africa or Middle East distributors. Model matching, export packing, OEM/ODM support and fast B2B quotation."
  },
  "Toner Powder": {
    title: "Copier Toner Powder Supplier for Refilling Buyers | EVE Toner",
    description:
      "Source copier toner powder for refilling businesses, distributors and service channels. Confirm model use, color, packing, MOQ and export-ready quotation with EVE Toner."
  },
  "Drum Unit": {
    title: "Copier Drum Unit Supplier for Repair Dealers | EVE Toner",
    description:
      "Browse compatible copier drum units for dealers, repair shops and spare parts importers. Confirm part codes, machine models, packing and bulk supply details before quotation."
  },
  "Developer Unit": {
    title: "Copier Developer Unit Supplier for Service Dealers | EVE Toner",
    description:
      "Source copier developer units for repair dealers, maintenance teams and spare parts importers. Confirm model compatibility, part codes, packing and mixed order quotation."
  },
  "Fuser Unit": {
    title: "Copier Fuser Unit Supplier for Spare Parts Dealers | EVE Toner",
    description:
      "Source copier fuser units for B2B spare parts dealers and service teams. Check voltage, model version, packing needs, MOQ and shipment preparation with EVE Toner."
  },
  "Copier Spare Parts": {
    title: "Copier Spare Parts Supplier for Importers | EVE Toner",
    description:
      "Browse copier spare parts for dealers and importers, including drums, fuser units, rollers, chips and maintenance parts. Export packing and mixed model quotation support."
  },
  "Digital Press Ink": {
    title: "HP Indigo Ink Supplier for Digital Press Buyers | EVE Toner",
    description:
      "Browse compatible HP Indigo ElectroInk and digital press ink products for print shops, ink distributors and importers. Confirm press series, ink code, color and export packing."
  },
  "Copier Machine": {
    title: "Refurbished Copier Machine Supplier for Dealers | EVE Toner",
    description:
      "Browse copier machine supply for office equipment dealers and importers. Confirm model configuration, accessories, condition, packing and export quotation details."
  }
};

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const requestedCategory = resolvedSearchParams?.category;
  const category =
    requestedCategory && productCatalogCategories.includes(requestedCategory) ? requestedCategory : undefined;
  const categoryCopy = category ? categorySeoCopy[category] : undefined;
  const title =
    categoryCopy?.title ??
    "Copier Toner & Spare Parts Supplier for Dealers | EVE Toner";
  const description =
    categoryCopy?.description ??
    "Browse EVE Toner products for B2B procurement, including compatible toner cartridges, drum units, fuser units, copier spare parts, toner powder and HP Indigo Ink for global dealers.";
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
  const catalogProductCards = products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    brand: product.brand,
    price: product.price,
    moq: product.moq,
    image: product.image,
    canonicalSlug: getProductCanonicalSlug(product),
    imageAlt: getProductImageAlt(product)
  }));

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
          products={catalogProductCards}
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
