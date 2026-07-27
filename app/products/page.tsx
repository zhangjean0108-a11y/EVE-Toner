import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ProductsPageClient } from "@/components/ProductsPageClient";
import { company } from "@/data/site";
import { type Product, productCatalogCategories, products } from "@/data/products";
import { getProductCanonicalSlug, getProductImageAlt } from "@/lib/product-seo";
import { absoluteUrl, socialImageUrl, siteUrl } from "@/lib/site-url";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
    brand?: string;
    q?: string;
    page?: string;
  }>;
};

const PAGE_SIZE = 24;

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
  const requestedBrand = resolvedSearchParams?.brand;
  const query = resolvedSearchParams?.q?.trim();
  const page = Math.max(1, Number.parseInt(resolvedSearchParams?.page ?? "1", 10) || 1);
  const category =
    requestedCategory && productCatalogCategories.includes(requestedCategory) ? requestedCategory : undefined;
  const categoryCopy = category ? categorySeoCopy[category] : undefined;
  const baseTitle =
    categoryCopy?.title ??
    "Copier Toner & Spare Parts Supplier for Dealers | EVE Toner";
  const title = page > 1 ? `${baseTitle.replace(" | EVE Toner", "")} - Page ${page} | EVE Toner` : baseTitle;
  const description =
    categoryCopy?.description ??
    "Browse EVE Toner products for B2B procurement, including compatible toner cartridges, drum units, fuser units, copier spare parts, toner powder and HP Indigo Ink for global dealers.";
  const canonicalParams = new URLSearchParams();
  if (category) canonicalParams.set("category", category);
  if (page > 1 && !query && !requestedBrand) canonicalParams.set("page", String(page));
  const canonicalSearch = canonicalParams.toString();
  const canonicalPath = canonicalSearch ? `/products?${canonicalSearch}` : "/products";
  const url = `${siteUrl}${canonicalPath}`;
  const isFacetedResult = Boolean(query || (requestedBrand && requestedBrand !== "All"));

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath
    },
    robots: isFacetedResult ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: "EVE Toner",
      images: [socialImageUrl]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImageUrl]
    }
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedCategory = resolvedSearchParams?.category;
  const requestedBrand = resolvedSearchParams?.brand;
  const query = resolvedSearchParams?.q?.trim() ?? "";
  const requestedPage = Math.max(1, Number.parseInt(resolvedSearchParams?.page ?? "1", 10) || 1);
  const initialCategory =
    requestedCategory && productCatalogCategories.includes(requestedCategory) ? requestedCategory : "All";
  const allBrands = Array.from(new Set(products.map((product) => product.brand))).sort();
  const initialBrand = requestedBrand && allBrands.includes(requestedBrand) ? requestedBrand : "All";
  const normalizedQuery = query.toLowerCase();
  const catalogProducts = products.filter((product) => {
    const matchesCategory = initialCategory === "All" || product.category === initialCategory;
    const matchesBrand = initialBrand === "All" || product.brand === initialBrand;
    const matchesQuery = !normalizedQuery || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesBrand && matchesQuery;
  });
  const totalPages = Math.max(1, Math.ceil(catalogProducts.length / PAGE_SIZE));
  if (requestedPage > totalPages && catalogProducts.length > 0) notFound();
  const pageProducts = catalogProducts.slice((requestedPage - 1) * PAGE_SIZE, requestedPage * PAGE_SIZE);
  const pageUrlParams = new URLSearchParams();
  if (initialCategory !== "All") pageUrlParams.set("category", initialCategory);
  if (requestedPage > 1 && !query && initialBrand === "All") {
    pageUrlParams.set("page", String(requestedPage));
  }
  const pageUrlSearch = pageUrlParams.toString();
  const pageUrl = `${siteUrl}/products${pageUrlSearch ? `?${pageUrlSearch}` : ""}`;
  const categoryHeading =
    initialCategory === "All"
      ? "EVE Toner Product Catalog, Ready for B2B Inquiry"
      : categorySeoCopy[initialCategory]?.title.replace(" | EVE Toner", "") ??
        `${initialCategory} Supplier Product Catalog`;
  const pageTitle = requestedPage > 1 ? `${categoryHeading} - Page ${requestedPage}` : categoryHeading;
  const pageDescription =
    initialCategory === "All"
      ? "Compatible copier toner cartridges, toner powder, drum units, fuser units, copier spare parts and HP Indigo Ink for global B2B buyers."
      : `Browse ${initialCategory.toLowerCase()} products from EVE Toner for copier dealers, importers and repair supply channels.`;
  const itemListElement = pageProducts.map((product, index) => {
    const url = `${siteUrl}/products/${getProductCanonicalSlug(product)}`;

    return {
      "@type": "ListItem",
      position: (requestedPage - 1) * PAGE_SIZE + index + 1,
      item: buildProductJsonLd(product, url)
    };
  });
  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    url: pageUrl,
    description: pageDescription,
    image: socialImageUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "EVE Toner",
      url: siteUrl
    },
    mainEntity: {
      "@type": "ItemList",
      name: pageTitle,
      url: pageUrl,
      numberOfItems: catalogProducts.length,
      itemListElement
    }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteUrl}/products`
      },
      ...(initialCategory === "All"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: initialCategory,
              item: pageUrl
            }
          ])
    ]
  };
  const catalogProductCards = pageProducts.map((product) => ({
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <section className="border-b border-slate-200 pt-12 md:pt-16">
          <div className="container-page grid gap-8 pb-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                Product Center
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                {categoryHeading}
              </h1>
              <div className="mt-5 flex h-1.5 w-[220px] overflow-hidden rounded-full bg-slate-950">
                <span className="h-full w-16 bg-[var(--brand-cyan)]" />
                <span className="h-full w-16 bg-[var(--brand-magenta)]" />
                <span className="h-full w-12 bg-[var(--brand-yellow)]" />
                <span className="h-full flex-1 bg-slate-950" />
              </div>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-600">
                {initialCategory === "All"
                  ? "Browse compatible copier toner, toner powder, drum units, developer units, copier machines and digital press supplies for B2B procurement and inquiry conversion."
                  : categorySeoCopy[initialCategory]?.description ?? pageDescription}
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
          brands={allBrands}
          selectedCategory={initialCategory}
          selectedBrand={initialBrand}
          query={query}
          currentPage={requestedPage}
          totalPages={totalPages}
          totalProducts={catalogProducts.length}
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

function getPriceRange(price: string) {
  const values = price
    .replace(/,/g, "")
    .match(/\d+(?:\.\d+)?/g)
    ?.map(Number);

  if (!values?.length || values.some((value) => !Number.isFinite(value))) {
    return null;
  }

  return {
    lowPrice: Math.min(...values),
    highPrice: Math.max(...values)
  };
}

function buildProductJsonLd(product: Product, productUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    image: absoluteUrl(product.image),
    url: productUrl,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    category: product.category,
    description: `Bulk supply of ${product.name} for B2B procurement. Confirm model compatibility, MOQ, packing and export quotation with EVE Toner.`,
    offers: buildProductOffer(product, productUrl)
  };
}

function buildProductOffer(product: Product, productUrl: string) {
  const priceRange = getPriceRange(product.price);
  const baseOffer = {
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: productUrl,
    seller: {
      "@type": "Organization",
      name: company.legalName,
      url: siteUrl
    }
  };

  if (priceRange) {
    return {
      "@type": "AggregateOffer",
      ...baseOffer,
      lowPrice: priceRange.lowPrice,
      highPrice: priceRange.highPrice,
      offerCount: 1
    };
  }

  return {
    "@type": "Offer",
    ...baseOffer
  };
}
