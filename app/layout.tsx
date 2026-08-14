import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { I18nProvider } from "@/lib/i18n";
import { siteUrl, socialImageUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Copier Toner Cartridge & HP Indigo Ink Supplier | EVE Toner",
  description:
    "B2B supplier of compatible copier toner cartridges and parts for Xerox, Konica Minolta, Canon, Ricoh, Kyocera, Sharp and Toshiba, plus HP Indigo ElectroInk.",
  keywords: [
    "copier toner supplier",
    "compatible copier toner",
    "wholesale copier toner",
    "copier spare parts supplier",
    "drum unit and fuser unit supplier",
    "Xerox copier toner supplier",
    "Konica Minolta toner supplier",
    "Canon copier toner cartridge",
    "Ricoh copier toner supplier",
    "Kyocera toner cartridge supplier",
    "Sharp copier toner supplier",
    "Toshiba copier toner supplier",
    "HP Indigo ElectroInk supplier"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Copier Toner Cartridge & HP Indigo Ink Supplier | EVE Toner",
    description:
      "Compatible copier toner cartridges and parts for Xerox, Konica Minolta, Canon, Ricoh, Kyocera, Sharp and Toshiba, plus HP Indigo ElectroInk.",
    url: siteUrl,
    siteName: "EVE Toner",
    type: "website",
    images: [socialImageUrl]
  },
  twitter: {
    card: "summary_large_image",
    title: "Copier Toner Cartridge & HP Indigo Ink Supplier | EVE Toner",
    description:
      "Compatible copier toner cartridges and parts for Xerox, Konica Minolta, Canon, Ricoh, Kyocera, Sharp and Toshiba, plus HP Indigo ElectroInk.",
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
