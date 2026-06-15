import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductsPageClient } from "@/components/ProductsPageClient";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Compatible Copier Toner & Spare Parts | EVE Toner",
  description:
    "Browse EVE Toner products synced from our Alibaba International store, including toner cartridges, toner powder, drum units, developer units, copier machines and digital press ink."
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_45%,#fff7e8_100%)]">
        <section className="border-b border-slate-200 pt-12 md:pt-16">
          <div className="container-page grid gap-8 pb-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                Product Center
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                Alibaba Store Products, Ready for B2B Inquiry
              </h1>
              <div className="mt-5 flex h-1.5 w-[220px] overflow-hidden rounded-full bg-slate-950">
                <span className="h-full w-16 bg-[var(--brand-cyan)]" />
                <span className="h-full w-16 bg-[var(--brand-magenta)]" />
                <span className="h-full w-12 bg-[var(--brand-yellow)]" />
                <span className="h-full flex-1 bg-slate-950" />
              </div>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-600">
                These products are synced from EVE Toner&apos;s Alibaba International store as a first-stage product catalog for independent-site SEO and inquiry conversion.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-lg border border-white/70 bg-white/70 p-4 shadow-xl shadow-cyan-950/10 backdrop-blur">
              <Stat label="Synced Items" value={`${products.length}`} />
              <Stat label="MOQ From" value="1 pc" />
              <Stat label="Inquiry" value="B2B" />
            </div>
          </div>
        </section>
        <ProductsPageClient products={products} />
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 text-center">
      <div className="text-2xl font-black text-slate-950">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}
