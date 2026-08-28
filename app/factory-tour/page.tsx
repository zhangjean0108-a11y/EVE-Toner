import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { company, factoryHighlights } from "@/data/site";
import { siteUrl, socialImageUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Two Production Bases | EVE Toner Factory Tour",
  description:
    "View EVE Toner's two production bases for copier toner and spare parts in Zhongshan and HP Indigo Ink in Xiamen, China.",
  alternates: {
    canonical: "/factory-tour"
  },
  openGraph: {
    title: "Two Production Bases | EVE Toner Factory Tour",
    description:
      "Separate production bases for EVE Toner copier toner and spare parts in Zhongshan and HP Indigo Ink in Xiamen.",
    url: `${siteUrl}/factory-tour`,
    siteName: "EVE Toner",
    images: [socialImageUrl]
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Production Bases | EVE Toner Factory Tour",
    description:
      "Separate production bases for EVE Toner copier toner and spare parts in Zhongshan and HP Indigo Ink in Xiamen.",
    images: [socialImageUrl]
  }
};

export default function FactoryTourPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_50%,#fff8ea_100%)]">
        <section className="border-b border-slate-200 py-12 md:py-16">
          <div className="container-page">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">Factory Tour</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Two Specialized Production Bases in China
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-600">
              EVE Toner operates separate production bases for copier toner and spare parts in Zhongshan and HP Indigo
              Ink in Xiamen, supporting specialized production, quality checks, packing and B2B export supply.
            </p>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
          <div className="mb-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-cyan)]">Production Base 1</p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">Copier Toner & Spare Parts</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{company.copierProductionAddress}</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-magenta)]">Production Base 2</p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">HP Indigo Ink</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{company.hpIndigoProductionAddress}</p>
              <a href={company.hpIndigoMapLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-black text-[var(--brand-cyan)] hover:text-[var(--brand-cyan-dark)]">
                View Xiamen location
              </a>
            </article>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {factoryHighlights.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[1.65/1] bg-white">
                  <Image src={item.image} alt={`${item.title} for EVE Toner supply`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-950">What Buyers Can Confirm</h2>
              <div className="mt-5 grid gap-3">
                {[
                  "Model list, color and part code before quotation",
                  "Carton, label and OEM/ODM packing requirements",
                  "Product photos or packing photos for qualified B2B orders",
                  "Mixed model shipment planning for dealers and importers"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 flex-none fill-[var(--brand-cyan)] text-white" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-900 bg-slate-950 p-6 text-white shadow-sm md:p-8">
              <h2 className="text-2xl font-black">Plan a B2B order</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-200">
                Share your destination market, quantity and packing needs with {company.brand}.
              </p>
              <Link
                href="/inquiry"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-6 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
              >
                Send Inquiry <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
