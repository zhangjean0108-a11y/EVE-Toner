import type { Metadata } from "next";
import { Suspense } from "react";
import { socialImage, siteUrl } from "@/lib/site-url";
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
    images: [socialImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Inquiry Form | EVE Toner",
    description:
      "Send your copier toner, drum unit, fuser unit, toner powder or copier spare parts inquiry to EVE Toner.",
    images: [socialImage]
  }
};

export default function InquiryPage() {
  return (
    <Suspense fallback={null}>
      <InquiryPageClient />
    </Suspense>
  );
}
