import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { I18nProvider } from "@/lib/i18n";
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
  title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
  description:
    "EVE Toner supplies compatible copier toner, copier spare parts, drum units and fuser units with OEM/ODM support, bulk supply and global delivery for B2B buyers.",
  keywords: [
    "copier toner supplier",
    "compatible copier toner",
    "wholesale copier toner",
    "copier spare parts supplier",
    "drum unit and fuser unit supplier"
  ],
  openGraph: {
    title: "Compatible Copier Toner & Spare Parts Supplier | EVE Toner",
    description:
      "Compatible copier toner cartridges and spare parts for importers, dealers, distributors and printing shops.",
    type: "website",
    images: ["/images/company-factory-collage.jpeg"]
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
        </I18nProvider>
      </body>
    </html>
  );
}
