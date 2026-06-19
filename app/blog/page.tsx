import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, SearchCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { blogArticles } from "@/data/blogs";
import { socialImage, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Copier Toner Buying Guides & Importer Blog | EVE Toner",
  description:
    "Read practical copier toner, toner powder and copier spare parts buying guides for importers, distributors and office equipment dealers.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Copier Toner Buying Guides & Importer Blog | EVE Toner",
    description:
      "Practical B2B articles about compatible copier toner, copier spare parts, quality checks, bulk purchase and import planning.",
    url: `${siteUrl}/blog`,
    siteName: "EVE Toner",
    images: [socialImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Copier Toner Buying Guides & Importer Blog | EVE Toner",
    description:
      "Practical B2B articles about compatible copier toner, copier spare parts, quality checks, bulk purchase and import planning.",
    images: [socialImage]
  }
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_48%,#fff7e8_100%)]">
        <section className="border-b border-slate-200 py-12 md:py-16">
          <div className="container-page grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                B2B Knowledge Center
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                Copier Toner Buying Guides for Importers
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-600">
                Practical answers for overseas buyers comparing compatible copier toner, toner powder, drum units, fuser units and copier spare parts.
              </p>
            </div>
            <div className="rounded-xl border border-white/80 bg-white/80 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur">
              <SearchCheck className="h-10 w-10 text-[var(--brand-cyan)]" />
              <h2 className="mt-4 text-2xl font-black text-slate-950">Written for real buying questions</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                Each article includes a short answer, product links, FAQ and inquiry CTA so buyers can move from research to quotation.
              </p>
            </div>
          </div>
        </section>

        <section className="container-page py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[var(--brand-cyan)] hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[var(--brand-cyan)]">
                  <BookOpen className="h-4 w-4" />
                  {article.category}
                </div>
                <h2 className="mt-4 text-xl font-black leading-7 text-slate-950">
                  <Link href={`/blog/${article.slug}`} className="hover:text-[var(--brand-cyan)]">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm font-semibold leading-7 text-slate-600">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[var(--brand-cyan)]"
                >
                  Read buying guide <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
