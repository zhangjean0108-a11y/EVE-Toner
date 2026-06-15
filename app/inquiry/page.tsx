import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryPageClient } from "./InquiryPageClient";

export const metadata: Metadata = {
  title: "B2B Inquiry Form | EVE Toner",
  description:
    "Send your copier toner, drum unit, fuser unit, toner powder or copier spare parts inquiry to EVE Toner for B2B quotation and export support."
};

export default function InquiryPage() {
  return (
    <Suspense fallback={null}>
      <InquiryPageClient />
    </Suspense>
  );
}
