import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, PackageCheck, SearchCheck, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Quality Control | Compatible Copier Toner & Parts | EVE Toner",
  description:
    "Review EVE Toner quality control focus for compatible copier toner, drum units, fuser units and spare parts: model matching, sample checks, packing and shipment preparation.",
  alternates: {
    canonical: "/quality-control"
  },
  openGraph: {
    title: "Quality Control | Compatible Copier Toner & Parts | EVE Toner",
    description:
      "Practical quality control process for B2B compatible copier toner and spare parts buyers.",
    url: `${siteUrl}/quality-control`,
    siteName: "EVE Toner"
  }
};

const qualitySteps = [
  {
    icon: SearchCheck,
    title: "Model Matching",
    text: "Confirm copier model, part code, color, region version and buyer application before recommending a product."
  },
  {
    icon: ClipboardCheck,
    title: "Product Check",
    text: "Review appearance, seal, chip matching, toner or part condition and buyer-specific packing requests."
  },
  {
    icon: ShieldCheck,
    title: "Output Focus",
    text: "For toner and imaging supplies, buyers can discuss density, background cleanliness, fixing and page yield expectations."
  },
  {
    icon: PackageCheck,
    title: "Shipment Preparation",
    text: "Check carton labels, mixed model lists, product photos and export packing details before delivery when required."
  }
];

export default function QualityControlPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_50%,#fff8ea_100%)]">
        <section className="border-b border-slate-200 py-12 md:py-16">
          <div className="container-page">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
              Quality Control
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Practical Checks for Compatible Copier Toner and Spare Parts
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-600">
              EVE Toner focuses on reducing B2B procurement risk through model confirmation, product checking, clear
              packing communication and shipment preparation. Buyers should always confirm exact model and use case
              before bulk orders.
            </p>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {qualitySteps.map((step) => (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <step.icon className="h-8 w-8 text-[var(--brand-cyan)]" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{step.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">What to Send Before a Quality Check</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                "Machine model and part number",
                "Color or consumable code",
                "Quantity and destination country",
                "Packing, label or OEM/ODM request",
                "Sample, photo or inspection requirement",
                "Known local market issue or customer complaint"
              ].map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-slate-900 bg-slate-950 p-6 text-white md:p-8">
            <h2 className="text-2xl font-black">Need model confirmation before purchase?</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-200">
              Send the model, part code, quantity and target market. EVE Toner will reply with practical compatibility
              and quotation details.
            </p>
            <Link
              href="/inquiry"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-6 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
            >
              Send Requirements <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
