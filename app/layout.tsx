import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { I18nProvider } from "@/lib/i18n";
import { siteUrl, socialImage } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
  description:
    "EVE Toner, operated by Zhuhai Eve Technology Co., Ltd., supplies compatible copier toner cartridges, toner powder, drum units, fuser units and copier spare parts for global B2B buyers. Industry experience since 2012.",
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
    images: [socialImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
    description:
      "Compatible copier toner cartridges, toner powder and copier spare parts for importers, dealers, distributors and office equipment service companies.",
    images: [socialImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider>
          {children}
          <WhatsAppButton />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}
