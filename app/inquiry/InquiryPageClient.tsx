"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, BadgeCheck, Clock3, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/data/site";
import { useTranslation } from "@/lib/i18n";
import { createWhatsAppHref } from "@/lib/whatsapp";

const trustIcons = [BadgeCheck, ShieldCheck, Clock3];

export function InquiryPageClient() {
  const { dictionary: dict, t } = useTranslation();
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";
  const whatsappHref = createWhatsAppHref(company.whatsapp);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[linear-gradient(135deg,#eef9fb_0%,#ffffff_42%,#fff6d8_68%,#fdf1f6_100%)]">
        <section className="container-page grid gap-8 py-12 lg:grid-cols-[0.76fr_1.24fr] lg:py-16">
          <aside className="relative overflow-hidden rounded-lg border border-white/70 bg-white/72 p-7 shadow-xl shadow-cyan-950/10 backdrop-blur md:p-9">
            <div className="absolute right-0 top-0 h-36 w-36 bg-[var(--brand-yellow)]/28 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-44 w-44 bg-[var(--brand-cyan)]/18 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
                {dict.inquiry.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                {dict.inquiry.title}
              </h1>
              <p className="mt-5 text-base font-semibold leading-7 text-slate-600">
                {dict.inquiry.text}
              </p>

              <div className="mt-7 grid gap-3">
                {dict.inquiry.trust.map((item, index) => {
                  const TrustIcon = trustIcons[index];
                  return (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#e8f5f9] text-[var(--brand-cyan)]">
                        <TrustIcon size={18} />
                      </span>
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-3 rounded-md border border-slate-200 bg-white/78 p-5 text-sm font-semibold text-slate-700">
                <a className="flex items-start gap-3 hover:text-[var(--brand-cyan)]" href={`mailto:${company.email}`}>
                  <Mail className="mt-0.5 h-4 w-4 flex-none text-[var(--brand-cyan)]" />
                  {company.email}
                </a>
                <a className="flex items-start gap-3 hover:text-[#10a66a]" href={whatsappHref}>
                  <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-[#10a66a]" />
                  {t("common.whatsapp")} {company.whatsapp}
                </a>
                <a
                  className="flex items-start gap-3 hover:text-[var(--brand-cyan)]"
                  href={company.mapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--brand-cyan)]" />
                  {company.address}
                </a>
              </div>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[var(--brand-cyan)] hover:text-[var(--brand-cyan-dark)]"
              >
                {dict.inquiry.backHome} <ArrowRight size={16} />
              </Link>
            </div>
          </aside>

          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/70 bg-white/70 px-5 py-4 text-sm font-bold text-slate-600 shadow-sm backdrop-blur">
              <span>{dict.inquiry.requiredNote}</span>
              <span className="text-[var(--brand-cyan)]">{dict.inquiry.antiSpam}</span>
            </div>
            <InquiryForm initialProduct={initialProduct} />
          </div>
        </section>
      </main>
    </>
  );
}
