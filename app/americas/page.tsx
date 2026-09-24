import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { siteUrl, socialImageUrl } from "@/lib/site-url";

const title = "HP Indigo Ink, Toner & Drum Units for the Americas | EVE Toner";
const description = "Source compatible HP Indigo ink, copier toner and drum units for buyers across the Americas. Explore Brazil and Latin America guides and request a model-based quote.";
const markets = [
  { name: "Brasil", lang: "pt-BR", text: "Tinta compatível HP Indigo, toner para copiadoras e unidades de cilindro. Envie modelo, código, cor, quantidade e CEP para uma cotação.", links: [["Tinta HP Indigo e peças", "/products/hp-indigo-ink-supplier-brazil"], ["Toner e cilindros para revendedores", "/products/copier-toner-supplier-brazil"]] },
  { name: "México", lang: "es-MX", text: "Tinta compatible HP Indigo y repuestos. Envíe modelo de prensa, código de tinta, color, cantidad y código postal para revisar compatibilidad y transporte.", links: [["Tinta y repuestos para México", "/products/hp-indigo-ink-supplier-mexico"]] },
  { name: "Chile y Ecuador", lang: "es", text: "Prepare su pedido por prensa y código de producto. Indique ciudad de destino, cantidades y fotos de las etiquetas para solicitar una cotización.", links: [["Guía para Chile", "/products/hp-indigo-ink-supplier-chile"], ["Guía para Ecuador", "/products/hp-indigo-ink-supplier-ecuador"]] },
  { name: "United States, Canada & other Americas markets", lang: "en", text: "Send your installed machine models, consumable codes and destination postal code. We will review product matching, availability and shipping options for your order.", links: [["Compare compatible copier toner", "/products?category=Toner+Cartridge"], ["Browse replacement drum units", "/products?category=Drum+Unit"]] }
];
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/americas" },
  openGraph: { title, description, url: `${siteUrl}/americas`, images: [socialImageUrl] },
  twitter: { card: "summary_large_image", title, description, images: [socialImageUrl] }
};
export default function AmericasPage() {
  return <><Header /><main className="bg-slate-50">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: title, description, url: `${siteUrl}/americas`, inLanguage: ["en", "pt-BR", "es"], mainEntity: { "@type": "ItemList", itemListElement: markets.flatMap(m => m.links).map(([name, path], index) => ({ "@type": "ListItem", position: index + 1, name, url: `${siteUrl}${path}` })) } }) }} />
    <section className="container-page py-12 md:py-16">
      <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">For importers, dealers and print shops</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">HP Indigo Ink, Copier Toner & Drum Units for the Americas</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Build your next order around the machines you support. EVE Toner helps buyers compare compatible consumables, confirm product codes and prepare a quotation for their destination market.</p>
      <Link className="mt-6 inline-flex rounded-lg bg-cyan-700 px-6 py-3 font-bold text-white" href="/inquiry?product=Americas%20buyer%20-%20HP%20Indigo%20ink%2C%20copier%20toner%20and%20drum%20units">Request an Americas quotation</Link>
    </section>
    <section className="container-page pb-12">
      <h2 className="text-2xl font-black text-slate-950">Find your market guide</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">{markets.map(m => <article key={m.name} lang={m.lang} className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-bold text-slate-950">{m.name}</h3><p className="mt-3 leading-7 text-slate-600">{m.text}</p>
        <ul className="mt-4 space-y-3">{m.links.map(([label, href]) => <li key={href}><Link className="font-bold text-cyan-700 underline underline-offset-4" href={href}>{label}</Link></li>)}</ul>
      </article>)}</div>
    </section>
    <section className="container-page pb-12">
      <h2 className="text-2xl font-black text-slate-950">Choose supplies by machine and application</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">{[
        ["HP Indigo ink and spare parts", "Confirm press series, ink code, color and configuration before ordering. For selected ink products, start with 1 unit in the listed sales pack and evaluate it on your press before repeat purchases.", "/products/hp-indigo-ink-supplier"],
        ["Copier toner for dealer replenishment", "List each copier model, cartridge code, color and quantity separately. Include a label photo and regional version so similar-looking cartridges are not treated as interchangeable.", "/products/wholesale-copier-toner-cartridge"],
        ["Replacement drum units", "Specify whether you need a complete drum unit or an individual drum component. Add the part code, copier model and photos; toner and drum units are different replacement items.", "/products/copier-drum-unit-supplier"]
      ].map(([heading, text, href]) => <article key={href} className="rounded-xl bg-white p-6"><h3 className="text-xl font-bold"><Link className="text-cyan-700 underline underline-offset-4" href={href}>{heading}</Link></h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div>
    </section>
    <section className="container-page pb-16">
      <h2 className="text-2xl font-black text-slate-950">Prepare a comparable bulk-order quotation</h2>
      <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-600"><li>Send a model list with product codes, colors and quantities. Separate ink, toner and replacement parts.</li><li>Include destination country, city and postal code, plus carton labels or packing requirements.</li><li>Ask for availability, sales pack, minimum quantity, product price and shipping cost for each proposed order. Confirm the shipping arrangement and document requirements before payment.</li><li>For a first compatible product order, discuss photos or a small evaluation order before planning repeat stock.</li></ol>
      <p className="mt-5 leading-7 text-slate-600">Supply is arranged from China. Delivery options and timing depend on the product and destination; these guides do not indicate local warehouses. Compatible products are alternatives to original-brand consumables, and suitability must be checked for the exact machine.</p>
      <p className="mt-5"><Link className="font-bold text-cyan-700 underline" href="/blog/hp-indigo-press-startup-customer-support-case">Read an HP Indigo customer support example</Link></p>
    </section>
  </main></>;
}
