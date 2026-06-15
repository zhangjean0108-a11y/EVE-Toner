import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { company } from "@/data/site";
import { getProductBySlug, products } from "@/data/products";
import { createWhatsAppHref } from "@/lib/whatsapp";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | EVE Toner"
    };
  }

  return {
    title: `${product.name} | EVE Toner`,
    description: `${product.summary} FOB price: ${product.price}. MOQ: ${product.moq}.`,
    openGraph: {
      title: product.name,
      description: product.summary,
      images: [product.image]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappHref = createWhatsAppHref(
    company.whatsapp,
    `Hello, I am interested in ${product.name}. Please send me more details.`
  );

  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f6fbfd_0%,#ffffff_45%,#fff8ea_100%)]">
        <section className="container-page py-8 md:py-12">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-[var(--brand-cyan)]">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-cyan-950/10">
              <div className="aspect-square rounded-lg bg-white p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {product.gallery.map((image) => (
                  <div key={image} className="aspect-square rounded-md border border-slate-200 bg-white p-1.5">
                    <Image
                      src={image}
                      alt={`${product.name} product view`}
                      width={160}
                      height={160}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-cyan-950/10 md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--soft-cyan)] px-3 py-1.5 text-xs font-black text-[var(--brand-cyan)]">
                  {product.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-700">
                  {product.brand}
                </span>
              </div>
              <h1 className="mt-5 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-base font-semibold leading-8 text-slate-600">{product.summary}</p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <Spec label="FOB Price" value={product.price} accent />
                <Spec label="MOQ" value={product.moq} />
                <Spec label="Category" value={product.category} />
                <Spec label="Brand" value={product.brand} />
              </div>

              <div className="mt-7 rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-base font-black text-slate-950">B2B Supply Notes</h2>
                <div className="mt-4 grid gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none fill-[var(--brand-cyan)] text-white" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <a
                  href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)] sm:col-span-2"
                >
                  Send Inquiry <ArrowRight size={16} />
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#10a66a] px-5 text-sm font-black text-white transition hover:bg-[#0b8b59]"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>

              <a
                href={product.alibabaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[var(--brand-cyan)]"
              >
                View original Alibaba listing <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Spec({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <div className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`mt-2 text-base font-black ${accent ? "text-[var(--brand-cyan)]" : "text-slate-950"}`}>
        {value}
      </div>
    </div>
  );
}
