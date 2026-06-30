import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { company, factoryHighlights } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Factory Tour | EVE Toner Copier Consumables Supply",
  description:
    "View EVE Toner warehouse, testing room, production line and trade show highlights for compatible copier toner, toner powder and spare parts supply.",
  alternates: {
    canonical: "/factory-tour"
  },
  openGraph: {
    title: "Factory Tour | EVE Toner Copier Consumables Supply",
    description:
      "Factory and warehouse highlights for B2B buyers checking EVE Toner copier consumables supply capability.",
    url: `${siteUrl}/factory-tour`,
    siteName: "EVE Toner"
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
              Warehouse, Testing and Packing Support for Copier Consumables
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-600">
              EVE Toner supports B2B copier toner and spare parts buyers with organized stock preparation, product
              checking, packing discussion and shipment coordination from the China supply chain.
            </p>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
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
