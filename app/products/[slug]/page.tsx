import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductGallery } from "@/components/ProductGallery";
import {
  getProductGuideLinks,
  getProductPageSeoLinks,
  getSeoLandingGuideLinks,
  type InternalSeoLink
} from "@/data/seo-internal-links";
import { company } from "@/data/site";
import { type Product, products } from "@/data/products";
import { findSeoLandingPage, seoLandingPages, type SeoLandingPage } from "@/data/seo-landing-pages";
import {
  findProductByRouteSlug,
  getProductCanonicalSlug,
  getProductCompatibleModels,
  getProductFaqs,
  getProductImageAlt,
  getProductLongDescription,
  getProductMetaDescription,
  getProductPackageSummary,
  getProductSeoTitle,
  getProductTypeText
} from "@/lib/product-seo";
import { siteUrl } from "@/lib/site-url";
import { createWhatsAppHref } from "@/lib/whatsapp";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...seoLandingPages.map((page) => ({
      slug: page.slug
    })),
    ...products.map((product) => ({
      slug: getProductCanonicalSlug(product)
    }))
  ];
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seoPage = findSeoLandingPage(slug);

  if (seoPage) {
    return {
      title: seoPage.title,
      description: seoPage.description,
      alternates: {
        canonical: `/products/${seoPage.slug}`
      },
      openGraph: {
        title: seoPage.title,
        description: seoPage.description,
        url: `${siteUrl}/products/${seoPage.slug}`,
        siteName: "EVE Toner",
        images: ["/images/company-factory-collage.jpeg"]
      },
      twitter: {
        card: "summary_large_image",
        title: seoPage.title,
        description: seoPage.description,
        images: ["/images/company-factory-collage.jpeg"]
      }
    };
  }

  const product = findProductByRouteSlug(slug, products);

  if (!product) {
    return {
      title: "Product Not Found | EVE Toner"
    };
  }

  const canonicalSlug = getProductCanonicalSlug(product);
  const seoTitle = getProductSeoTitle(product);
  const seoDescription = getProductMetaDescription(product);

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `/products/${canonicalSlug}`
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `${siteUrl}/products/${canonicalSlug}`,
      siteName: "EVE Toner",
      images: [product.image]
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [product.image]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const seoPage = findSeoLandingPage(slug);

  if (seoPage) {
    return <SeoLandingPageView page={seoPage} />;
  }

  const product = findProductByRouteSlug(slug, products);

  if (!product) {
    notFound();
  }

  const canonicalSlug = getProductCanonicalSlug(product);
  if (slug !== canonicalSlug) {
    permanentRedirect(`/products/${canonicalSlug}`);
  }

  const whatsappHref = createWhatsAppHref(
    company.whatsapp,
    `Hello, I am interested in ${product.name}. Please send me more details.`
  );
  const galleryImages = [product.image, ...product.gallery];
  const productDetail = getProductDetail(product);
  const productDescription = getProductLongDescription(product);
  const productImageAlt = getProductImageAlt(product);
  const productType = getProductTypeText(product);
  const compatibleModels = getProductCompatibleModels(product);
  const packageSummary = getProductPackageSummary(product);
  const faqs = getProductFaqs(product);
  const productSeoLinks = getProductPageSeoLinks(product.category, product.brand);
  const productGuideLinks = getProductGuideLinks(product.category, product.brand);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: galleryImages,
    url: `${siteUrl}/products/${canonicalSlug}`,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    category: product.category,
    description: productDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: company.legalName
      }
    }
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f6fbfd_0%,#ffffff_45%,#fff8ea_100%)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <section className="container-page py-8 md:py-12">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-[var(--brand-cyan)]">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <ProductGallery productName={product.name} images={galleryImages} altBase={productImageAlt} />

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-cyan-950/10 md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--soft-cyan)] px-3 py-1.5 text-xs font-black text-[var(--brand-cyan)]">
                  {product.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-700">
                  {product.brand}
                </span>
              </div>
              <h1 className="mt-5 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-base font-semibold leading-8 text-slate-600">{product.summary}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{productDescription}</p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <Spec label="FOB Price" value={product.price} accent />
                <Spec label="MOQ" value={product.moq} />
                <Spec label="Category" value={product.category} />
                <Spec label="Brand" value={product.brand} />
              </div>

              <div className="mt-7 rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-base font-black text-slate-950">B2B Supply Notes</h2>
                <div className="mt-4 grid gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none fill-[var(--brand-cyan)] text-white" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <a
                  href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)] sm:col-span-2"
                >
                  Send Inquiry <ArrowRight size={16} />
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#10a66a] px-5 text-sm font-black text-white transition hover:bg-[#0b8b59]"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-12 md:py-16">
          <div className="container-page grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
                Product Details
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Text Details for Procurement
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                Google and overseas buyers need readable product information, so every EVE Toner product page includes compatibility, product type, packing, inspection and shipment notes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <DetailCard
                icon={ClipboardCheck}
                title="Compatible Models"
                text={`Reference model keywords: ${compatibleModels}. Please confirm exact machine model, regional version and part code before bulk ordering.`}
              />
              <DetailCard
                icon={Factory}
                title="Product Type"
                text={`Product type: ${productType}. This item belongs to the ${product.category} category and is supplied for ${product.brand} compatible applications.`}
              />
              <DetailCard
                icon={Factory}
                title="Color / Yield / Package"
                text={packageSummary}
              />
              <DetailCard
                icon={ShieldCheck}
                title="Application"
                text={productDetail.application}
              />
              <DetailCard
                icon={ClipboardCheck}
                title="Quality Inspection"
                text={productDetail.quality}
              />
              <DetailCard
                icon={PackageCheck}
                title="Packing & Shipment"
                text={productDetail.packing}
              />
            </div>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-950">Product Specification</h2>
              <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
                <SpecRow label="Product Name" value={product.name} />
                <SpecRow label="Compatible Models" value={compatibleModels} />
                <SpecRow label="Product Type" value={productType} />
                <SpecRow label="Color / Yield / Package" value={packageSummary} />
                <SpecRow label="Category" value={product.category} />
                <SpecRow label="Brand / Compatible Brand" value={product.brand} />
                <SpecRow label="MOQ" value={product.moq} />
                <SpecRow label="Reference FOB Price" value={product.price} />
                <SpecRow label="Application" value={productDetail.application} />
                <SpecRow label="Quality Inspection" value={productDetail.quality} />
                <SpecRow label="Packing & Shipment" value={productDetail.packing} />
                <SpecRow label="Supply Type" value="Compatible replacement supply for B2B procurement" />
                <SpecRow label="Recommended Inquiry Info" value="Model number, quantity, destination country and packing request" />
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#061425_0%,#0a5068_100%)] p-6 text-white shadow-xl shadow-cyan-950/20 md:p-8">
              <BadgeCheck className="h-10 w-10 text-[var(--brand-yellow)]" />
              <h2 className="mt-5 text-2xl font-black">Need confirmed compatibility?</h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-cyan-50/85">
                Send your copier model, cartridge code or part number. EVE Toner can help check suitable products, order quantity, packing and shipment details before production or delivery.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Factory testing and shipment inspection support",
                  "OEM/ODM label and packing options",
                  "Export-ready quotation for dealers and importers"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-bold text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none fill-[var(--brand-yellow)] text-slate-950" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white shadow-[0_14px_30px_rgba(7,136,184,0.28)] transition hover:bg-[var(--brand-cyan-dark)]"
              >
                Send Product Requirements <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <InternalLinkSection
          eyebrow="Procurement resources"
          title="Helpful Buying Guides and Search Pages"
          intro="These pages help buyers compare product types, check quality points and find model-based sourcing pages for Google searches."
          groups={[
            { title: "Buyer search pages", links: productSeoLinks },
            { title: "Procurement guides", links: productGuideLinks }
          ]}
        />

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="container-page grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
                FAQ & Inquiry Form
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Questions Before Ordering
              </h2>
              <div className="mt-6 grid gap-4">
                {faqs.map((faq) => (
                  <article key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-black text-slate-950">{faq.question}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-950">Send Inquiry for This Product</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                Fill in your contact details, product requirement and destination country. EVE Toner will reply with compatibility confirmation, quotation and packing suggestions.
              </p>
              <div className="mt-5">
                <InquiryForm initialProduct={product.name} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const relatedProducts = getSeoLandingProducts(page);
  const guideLinks = getSeoLandingGuideLinks(page.slug, page.keyword, page.category);
  const whatsappHref = createWhatsAppHref(
    company.whatsapp,
    `Hello, I am looking for ${page.keyword}. Please send me product details and quotation.`
  );
  const pageUrl = `${siteUrl}/products/${page.slug}`;
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.h1,
    url: pageUrl,
    description: page.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: relatedProducts.slice(0, 6).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/products/${getProductCanonicalSlug(product)}`,
        name: product.name
      }))
    }
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
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
      {
        "@type": "ListItem",
        position: 3,
        name: page.h1,
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f6fbfd_0%,#ffffff_48%,#fff8ea_100%)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <section className="border-b border-slate-200 py-12 md:py-16">
          <div className="container-page grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-[var(--brand-cyan)]">
                <ArrowLeft size={16} /> Product Center
              </Link>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-600">
                {page.intro}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`/inquiry?product=${encodeURIComponent(page.keyword)}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-6 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
                >
                  Request {page.keyword} Quote <ArrowRight size={16} />
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#10a66a] px-6 text-sm font-black text-white transition hover:bg-[#0b8b59]"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-white/70 bg-white/78 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur">
              <h2 className="text-xl font-black text-slate-950">Procurement Focus</h2>
              <div className="mt-5 grid gap-4">
                <SeoInfo label="Target Keyword" value={page.keyword} />
                <SeoInfo label="Buyer Types" value={page.buyerTypes.join(", ")} />
                <SeoInfo label="Related Brands" value={page.relatedBrands.join(", ")} />
                <SeoInfo label="Model Examples" value={page.modelExamples.join(", ")} />
              </div>
            </div>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
                B2B sourcing guide
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                How EVE Toner Helps Buyers Source This Category
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                This landing page is written for Google searches with commercial intent. It gives importers and dealers a clear path from product matching to quotation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {page.sections.map((section) => (
                <article key={section.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--soft-cyan)] text-[var(--brand-cyan)]">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-950">{section.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{section.text}</p>
                </article>
              ))}
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--soft-cyan)] text-[var(--brand-cyan)]">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">Factory-backed response</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                  EVE Toner can reply with model confirmation, sample or photo details, packing suggestions and shipment planning for qualified B2B inquiries.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--soft-cyan)] text-[var(--brand-cyan)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">Quality and packing checks</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                  Buyers can discuss print testing, appearance checks, carton packing, label options and inspection support before shipment.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-12 md:py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
                Related products
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Products Related to {page.keyword}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                These product links build topical relevance between the sourcing page and detailed model pages.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${getProductCanonicalSlug(product)}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand-cyan)] hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <img
                    src={product.image}
                    alt={getProductImageAlt(product)}
                    className="h-48 w-full bg-white object-contain p-4"
                  />
                  <div className="border-t border-slate-200 p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--soft-cyan)] px-3 py-1 text-xs font-black text-[var(--brand-cyan)]">
                        {product.category}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
                        {product.brand}
                      </span>
                    </div>
                    <h3 className="mt-4 line-clamp-3 text-base font-black leading-6 text-slate-950 group-hover:text-[var(--brand-cyan)]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-slate-500">MOQ: {product.moq}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <InternalLinkSection
          eyebrow="Related buying guides"
          title="Guides That Support This Buyer Search"
          intro="These articles answer common procurement questions and strengthen topical relevance around this product category."
          groups={[{ title: "Procurement guides", links: guideLinks }]}
        />

        <section className="container-page py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Questions Buyers Ask Before Ordering
              </h2>
              <div className="mt-6 grid gap-4">
                {page.faqs.map((faq) => (
                  <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
                    <h3 className="text-base font-black text-slate-950">{faq.question}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-950">Send Your Model List</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                Tell us the model number, quantity, destination country and packing request. EVE Toner will reply with quotation details.
              </p>
              <div className="mt-5">
                <InquiryForm initialProduct={page.keyword} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SeoInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-sm font-bold leading-6 text-slate-800">{value}</div>
    </div>
  );
}

function InternalLinkSection({
  eyebrow,
  title,
  intro,
  groups
}: {
  eyebrow: string;
  title: string;
  intro: string;
  groups: Array<{ title: string; links: InternalSeoLink[] }>;
}) {
  const visibleGroups = groups.filter((group) => group.links.length);

  if (!visibleGroups.length) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_55%,#fff9ec_100%)] py-12 md:py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">{intro}</p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {visibleGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">{group.title}</h3>
              <div className="mt-5 grid gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-[var(--brand-cyan)] hover:bg-white hover:shadow-lg hover:shadow-cyan-950/10"
                  >
                    <span className="flex items-center justify-between gap-4 text-sm font-black text-slate-950 group-hover:text-[var(--brand-cyan)]">
                      {link.label}
                      <ArrowRight className="h-4 w-4 flex-none" />
                    </span>
                    <span className="mt-2 block text-sm font-semibold leading-6 text-slate-600">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getSeoLandingProducts(page: SeoLandingPage) {
  const sparePartCategories = new Set(["Drum Unit", "Fuser Unit", "Developer Unit"]);
  const relatedProducts = products.filter((product) => {
    const brandMatches = page.brand ? product.brand === page.brand : false;
    const categoryMatches =
      page.category === "Copier Spare Parts"
        ? sparePartCategories.has(product.category)
        : page.category
          ? product.category === page.category
          : false;

    return brandMatches || categoryMatches;
  });

  const fallbackProducts = relatedProducts.length ? relatedProducts : products;

  return fallbackProducts
    .slice()
    .sort((a, b) => b.sold180 - a.sold180)
    .slice(0, 6);
}

function Spec({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <div className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`mt-2 text-base font-black ${accent ? "text-[var(--brand-cyan)]" : "text-slate-950"}`}>
        {value}
      </div>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  title,
  text
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--soft-cyan)] text-[var(--brand-cyan)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 border-b border-slate-200 px-4 py-4 last:border-b-0 md:grid-cols-[220px_1fr]">
      <div className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-sm font-bold leading-6 text-slate-800">{value}</div>
    </div>
  );
}

function getProductDetail(product: Product) {
  const categoryCopy: Record<string, { application: string; compatibility: string; quality: string }> = {
    "Toner Cartridge": {
      application:
        "Used for office copier dealers, print shops, service companies and distributors that need stable compatible toner cartridge supply for repeated orders.",
      compatibility:
        "Before quotation, please confirm the copier model, cartridge code, region version and expected page yield so our sales team can match the correct version.",
      quality:
        "Key checks include appearance inspection, cartridge sealing, chip matching where applicable, print density, background cleanliness and packing condition."
    },
    "Toner Powder": {
      application:
        "Suitable for refill workshops, cartridge remanufacturers and B2B buyers who need toner powder for compatible copier or printer applications.",
      compatibility:
        "Toner powder matching depends on machine series, color, fixing temperature and output requirements. Sample testing is recommended before bulk orders.",
      quality:
        "Quality control focuses on powder fluidity, color consistency, fixing performance, density and storage sealing before shipment."
    },
    "Drum Unit": {
      application:
        "Designed for maintenance, repair and replacement projects where dealers need drum units or imaging units for copier service demand.",
      compatibility:
        "Please check the drum unit code, machine series and color position. Some drum units require matching developer or chip configuration.",
      quality:
        "Inspection covers surface condition, gear assembly, electrical contact, rotation smoothness, packaging protection and sample installation checks when needed."
    },
    "Fuser Unit": {
      application:
        "Used for copier repair, refurbishment and service projects requiring stable paper fixing and reduced downtime for end users.",
      compatibility:
        "Fuser units may vary by voltage, machine model and region version. Confirm 110V or 220V requirements before ordering.",
      quality:
        "Checks include roller surface, fixing film or belt condition, heater response, gear movement, connector condition and protective packing."
    },
    "Developer Unit": {
      application:
        "Suitable for copier service teams and parts distributors handling image density, color output and developer replacement needs.",
      compatibility:
        "Please match the developer unit code, machine series and color. Some models require developer powder or initialization preparation.",
      quality:
        "Inspection focuses on unit structure, seals, developer condition, gear movement, contact points and secure export packing."
    },
    "Copier Machine": {
      application:
        "For dealers, refurbishers and project buyers sourcing copier machines for offices, schools, copy centers and production environments.",
      compatibility:
        "Machine configuration should be confirmed by voltage, language, meter count, accessories, destination market and required testing standard.",
      quality:
        "Preparation can include function testing, print sample review, exterior inspection, accessory check and reinforced export packing."
    },
    "Digital Press Ink": {
      application:
        "For digital press users, distributors and service companies requiring compatible ink supply for selected production printing systems.",
      compatibility:
        "Ink matching should be checked by press model, color, code and production requirement. Trial verification is recommended before bulk purchasing.",
      quality:
        "Inspection focuses on packing seal, color identification, storage condition, batch consistency and shipment protection."
    }
  };

  const fallback = {
    application:
      "Suitable for copier service companies, distributors, importers and repair teams that need practical replacement supply for B2B orders.",
    compatibility:
      "Please provide model number, part code, target market and quantity so the EVE Toner team can confirm the correct product version.",
    quality:
      "Inspection covers product appearance, functional matching, packing condition and shipment preparation according to order requirements."
  };
  const selected = categoryCopy[product.category] ?? fallback;

  return {
    overview:
      `${product.name} is supplied by EVE Toner for ${product.brand} compatible copier and printing applications. It is intended for B2B buyers who need practical model matching, stable supply, export packing and responsive quotation support.`,
    application: selected.application,
    compatibility: selected.compatibility,
    quality: selected.quality,
    packing:
      `Regular orders can be prepared with protective export packing. OEM/ODM packaging, labels and carton requirements can be discussed according to quantity, destination market and product type.`
  };
}
