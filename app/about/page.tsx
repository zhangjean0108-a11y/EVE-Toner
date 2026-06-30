import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, Globe2, UsersRound } from "lucide-react";
import { Header } from "@/components/Header";
import { advantages, applications, company, productCategories } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About EVE Toner | Copier Toner Supplier for B2B Buyers",
  description:
    "Learn about EVE Toner, operated by Zhuhai Eve Technology Co., Ltd., supplying compatible copier toner, drum units, fuser units and copier spare parts for global B2B buyers.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About EVE Toner | Copier Toner Supplier for B2B Buyers",
    description:
      "Company profile for EVE Toner, a compatible copier toner and spare parts supplier serving importers, dealers and distributors.",
    url: `${siteUrl}/about`,
    siteName: "EVE Toner"
  }
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_52%,#fff8ea_100%)]">
        <section className="border-b border-slate-200 py-12 md:py-16">
          <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                About EVE Toner
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                Copier Toner and Spare Parts Supplier for Global Dealers
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-600">
                {company.legalName} operates the EVE Toner brand for B2B buyers sourcing compatible copier toner
                cartridges, toner powder, drum units, fuser units and copier spare parts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-lg border border-white/70 bg-white/75 p-4 shadow-xl shadow-cyan-950/10 backdrop-blur md:grid-cols-4">
              <Stat icon={CalendarDays} label="Industry Since" value={company.industrySince} />
              <Stat icon={Building2} label="Established" value={company.established} />
              <Stat icon={UsersRound} label="Team" value="40+" />
              <Stat icon={Globe2} label="Markets" value="Global" />
            </div>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-950">Company Information</h2>
              <div className="mt-5 grid gap-4 text-sm font-semibold leading-7 text-slate-600">
                <p>Registered company: {company.legalName}</p>
                <p>Registered location: {company.registeredLocation}</p>
                <p>Office and warehouse: {company.officeWarehouseAddress}</p>
                <p>
                  Main buyers include importers, dealers, distributors, office equipment service companies and
                  printing shops in markets such as {company.markets.join(", ")}.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-950">Product Scope</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {productCategories.map((item) => (
                  <Link
                    key={item.category}
                    href={`/products?category=${encodeURIComponent(item.category)}`}
                    className="rounded-md border border-slate-200 bg-slate-50 p-4 transition hover:border-[var(--brand-cyan)] hover:bg-white"
                  >
                    <h3 className="text-sm font-black text-slate-950">{item.name}</h3>
                    <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <item.icon className="h-7 w-7 text-[var(--brand-cyan)]" />
                <h2 className="mt-4 text-lg font-black text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-slate-900 bg-slate-950 p-6 text-white md:p-8">
            <h2 className="text-2xl font-black">Ready to discuss your model list?</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-200">
              Send copier model numbers, quantities and destination market. EVE Toner will help confirm compatible
              products, packing needs and quotation details.
            </p>
            <Link
              href="/inquiry"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-6 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
            >
              Send Inquiry <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof CalendarDays; label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 text-center">
      <Icon className="mx-auto h-6 w-6 text-[var(--brand-cyan)]" />
      <div className="mt-3 text-2xl font-black text-slate-950">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}
