import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { I18nProvider } from "@/lib/i18n";
import { siteUrl, socialImageUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
  description:
    "EVE Toner supplies compatible copier toner cartridges, toner powder, drum units, fuser units and spare parts for global B2B buyers.",
  keywords: [
    "copier toner supplier",
    "compatible copier toner",
    "wholesale copier toner",
    "copier spare parts supplier",
    "drum unit and fuser unit supplier"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
    description:
      "Compatible copier toner cartridges, toner powder and copier spare parts for importers, dealers, distributors and office equipment service companies.",
    url: siteUrl,
    siteName: "EVE Toner",
    type: "website",
    images: [socialImageUrl]
  },
  twitter: {
    card: "summary_large_image",
    title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
    description:
      "Compatible copier toner cartridges, toner powder and copier spare parts for importers, dealers, distributors and office equipment service companies.",
    images: [socialImageUrl]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          {children}
          <WhatsAppButton />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}
