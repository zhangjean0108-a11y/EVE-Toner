import type { Metadata } from "next";
import { socialImageUrl, siteUrl } from "@/lib/site-url";
import { InquiryPageClient } from "./InquiryPageClient";

export const metadata: Metadata = {
  title: "B2B Inquiry Form | EVE Toner",
  description:
    "Send your copier toner, drum unit, fuser unit, toner powder or copier spare parts inquiry to EVE Toner for B2B quotation and export support.",
  alternates: {
    canonical: "/inquiry"
  },
  openGraph: {
    title: "B2B Inquiry Form | EVE Toner",
    description:
      "Send your copier toner, drum unit, fuser unit, toner powder or copier spare parts inquiry to EVE Toner.",
    url: `${siteUrl}/inquiry`,
    siteName: "EVE Toner",
    images: [socialImageUrl]
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Inquiry Form | EVE Toner",
    description:
      "Send your copier toner, drum unit, fuser unit, toner powder or copier spare parts inquiry to EVE Toner.",
    images: [socialImageUrl]
  }
};

type InquiryPageProps = {
  searchParams: Promise<{ product?: string | string[] }>;
};

export default async function InquiryPage({ searchParams }: InquiryPageProps) {
  const productParam = (await searchParams).product;
  const initialProduct = Array.isArray(productParam) ? productParam[0] ?? "" : productParam ?? "";
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "EVE Toner B2B Inquiry Form",
    url: `${siteUrl}/inquiry`,
    description: metadata.description,
    isPartOf: { "@type": "WebSite", name: "EVE Toner", url: siteUrl }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <InquiryPageClient initialProduct={initialProduct} />
    </>
  );
}
