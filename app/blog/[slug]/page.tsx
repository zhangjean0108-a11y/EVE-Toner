import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { blogArticles, getBlogArticle } from "@/data/blogs";
import { company } from "@/data/site";
import { siteUrl } from "@/lib/site-url";
import { createWhatsAppHref } from "@/lib/whatsapp";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Blog Article Not Found | EVE Toner"
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `${siteUrl}/blog/${article.slug}`,
      siteName: "EVE Toner"
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const whatsappHref = createWhatsAppHref(
    company.whatsapp,
    `Hello, I read your article "${article.title}" and want to ask about copier toner products.`
  );
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
    author: {
      "@type": "Organization",
      name: company.legalName
    },
    publisher: {
      "@type": "Organization",
      name: company.brand
    }
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(135deg,#f5fbfd_0%,#ffffff_48%,#fff8ea_100%)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <article>
          <section className="border-b border-slate-200 py-8 md:py-12">
            <div className="container-page">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-[var(--brand-cyan)]">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <div className="mt-6 grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                    {article.category}
                  </p>
                  <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                    {article.title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-600">
                    {article.excerpt}
                  </p>
                </div>
                <aside className="rounded-xl border border-white/80 bg-white/82 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur">
                  <h2 className="text-sm font-black uppercase tracking-wide text-slate-500">Related products</h2>
                  <div className="mt-4 grid gap-2">
                    {article.productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="container-page py-10 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)]">
              <div className="min-w-0">
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
                    Short Answer for Buyers
                  </p>
                  <p className="mt-3 text-lg font-bold leading-8 text-slate-800">{article.answer}</p>
                </div>

                <div className="mt-8 grid gap-8">
                  {article.sections.map((section, index) => (
                    <section key={section.heading} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                      <h2 className="text-2xl font-black text-slate-950">{section.heading}</h2>
                      {section.subheading ? (
                        <h3 className="mt-3 text-base font-black text-[var(--brand-cyan)]">{section.subheading}</h3>
                      ) : null}
                      <div className="mt-4 grid gap-4">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-sm font-semibold leading-7 text-slate-600">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {index === 1 ? <ArticleCta title={article.midCta.title} text={article.midCta.text} /> : null}
                    </section>
                  ))}
                </div>

                <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-7 w-7 text-[var(--brand-cyan)]" />
                    <h2 className="text-2xl font-black text-slate-950">FAQ</h2>
                  </div>
                  <div className="mt-6 grid gap-4">
                    {article.faqs.map((faq) => (
                      <article key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-base font-black text-slate-950">{faq.question}</h3>
                        <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <ArticleCta title={article.finalCta.title} text={article.finalCta.text} final />
              </div>

              <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-cyan-950/10 lg:sticky lg:top-28">
                <h2 className="text-lg font-black text-slate-950">Send your requirements</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                  Share model numbers, quantity and destination market. EVE Toner will reply with practical product matching and quotation details.
                </p>
                <div className="mt-5 grid gap-3">
                  <Link
                    href={`/inquiry?product=${encodeURIComponent(article.title)}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  <a
                    href={whatsappHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#10a66a] px-5 text-sm font-black text-white transition hover:bg-[#0b8b59]"
                  >
                    <MessageCircle size={17} /> WhatsApp
                  </a>
                </div>
                <div className="mt-6 grid gap-3">
                  {["Model matching", "Bulk quotation", "Export packing", "OEM/ODM support"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="h-5 w-5 fill-[var(--brand-cyan)] text-white" />
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

function ArticleCta({ title, text, final = false }: { title: string; text: string; final?: boolean }) {
  return (
    <div
      className={`mt-7 rounded-xl border p-6 ${
        final
          ? "border-slate-800 bg-[linear-gradient(135deg,#061425_0%,#0a5068_100%)] text-white"
          : "border-cyan-200 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_100%)]"
      }`}
    >
      <h2 className={`text-xl font-black ${final ? "text-white" : "text-slate-950"}`}>{title}</h2>
      <p className={`mt-2 text-sm font-semibold leading-7 ${final ? "text-cyan-50/85" : "text-slate-600"}`}>{text}</p>
      <Link
        href="/inquiry"
        className={`mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-black transition ${
          final
            ? "bg-white text-slate-950 hover:bg-cyan-50"
            : "bg-[var(--brand-cyan)] text-white hover:bg-[var(--brand-cyan-dark)]"
        }`}
      >
        Send Inquiry <ArrowRight size={16} />
      </Link>
    </div>
  );
}
