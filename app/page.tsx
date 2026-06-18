"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  UsersRound,
  Wrench
} from "lucide-react";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  advantages,
  applications,
  company,
  contactLinks,
  factoryHighlights,
  productCategories,
  quoteBenefits
} from "@/data/site";
import { useTranslation } from "@/lib/i18n";
import { createWhatsAppHref } from "@/lib/whatsapp";

export default function Home() {
  const { dictionary: dict, t } = useTranslation();
  const whatsappHref = createWhatsAppHref(company.whatsapp);
  const statIcons = [CalendarDays, Building2, UsersRound, Wrench];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <section className="hero-surface border-b border-[#d9e7ef]">
          <div className="hero-stage container-page grid min-h-[500px] items-start gap-4 py-5 md:gap-7 md:py-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="hero-copy relative z-20 max-w-[590px] pt-0 md:pt-1">
              <h1 className="text-balance text-[34px] font-black leading-[1.04] tracking-normal text-[#071126] min-[390px]:text-[38px] md:text-[56px] lg:text-[56px]">
                {dict.home.hero.titlePrefix}{" "}
                <span className="text-[var(--brand-cyan)]">{dict.home.hero.titleAccent}</span>{" "}
                {dict.home.hero.titleSuffix}
              </h1>
              <div className="mt-3 flex h-1.5 w-[190px] overflow-hidden rounded-full bg-slate-950 md:mt-4 md:w-[210px]">
                <span className="h-full w-16 bg-[var(--brand-cyan)]" />
                <span className="h-full w-16 bg-[var(--brand-magenta)]" />
                <span className="h-full w-12 bg-[var(--brand-yellow)]" />
                <span className="h-full flex-1 bg-slate-950" />
              </div>
              <p className="mt-4 max-w-[520px] text-sm font-semibold leading-6 text-slate-700 md:mt-5 md:text-[15px] md:leading-7">
                {dict.home.hero.lead}
              </p>

              <div className="mt-4 grid gap-1.5 md:mt-5 md:gap-2">
                {dict.home.hero.points.map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-[13px] font-bold text-slate-700 md:gap-3 md:text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-none fill-[var(--brand-cyan)] text-white md:h-5 md:w-5" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="hero-actions mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-row md:mt-7">
                <a
                  href="/inquiry"
                  className="col-span-2 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[var(--brand-cyan)] px-7 text-sm font-black text-white shadow-[0_12px_24px_rgba(7,136,184,0.24)] transition hover:bg-[var(--brand-cyan-dark)] sm:col-span-1"
                >
                  {t("common.getQuote")} <ArrowRight size={18} />
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-[var(--brand-cyan)] bg-white px-7 text-sm font-black text-[var(--brand-cyan)] shadow-sm transition hover:bg-cyan-50"
                >
                  <MessageCircle size={18} /> {t("common.whatsapp")}
                </a>
                <a
                  href="/images/konica-product-list.jpg"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[var(--brand-cyan)] bg-white px-3 text-sm font-black text-[var(--brand-cyan)] shadow-sm transition hover:bg-cyan-50 md:gap-3 md:px-6"
                >
                  {t("common.downloadCatalog")} <Download size={17} />
                </a>
              </div>
            </div>

            <div className="hero-visual relative z-0 min-h-[455px]" aria-label={dict.home.hero.imageAlt}>
              <div className="hero-banner-frame">
                <Image
                  src="/images/eve-home-banner-optimized.webp"
                  alt="EVE Toner copier toner, powder and spare parts supply scene"
                  fill
                  sizes="(max-width: 768px) 100vw, 760px"
                  className="object-cover object-[58%_50%]"
                  priority
                  quality={78}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAQBACdASoYAA0APwForE6rJaQiMAgBYCAJYgCw7B9iKWQd9wKCGKkmAADhFpP3iv+SWkyY22Rjn796Xd4dt+kl+AIfnpxcIJ4Bp4QHKl/XfAcLECfwRaAxg42DfcHlhNmY/2sm0hdhNhI2DII7wGqAAAA="
                />
              </div>
            </div>
          </div>
          <div className="container-page relative z-10 pb-0">
            <div className="hero-stats grid grid-cols-2 overflow-hidden border-y border-[#dce8ef] bg-white/82 md:grid-cols-4">
              {dict.home.stats.map((item, index) => {
                const StatIcon = statIcons[index];
                return (
                <div key={item.label} className="flex items-center gap-3 border-b border-slate-200/80 px-3 py-4 odd:border-r md:gap-5 md:border-b-0 md:border-r md:px-7 md:py-6 last:md:border-r-0">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#e8f5f9] text-[var(--brand-cyan)] md:h-14 md:w-14">
                    <StatIcon className="h-5 w-5 md:h-[27px] md:w-[27px]" strokeWidth={2.25} />
                  </span>
                  <div>
                    <div className="text-2xl font-black leading-none text-slate-950 md:text-3xl">{item.value}</div>
                    <div className="mt-1 text-xs font-black text-slate-900 md:text-sm">{item.label}</div>
                    <p className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">{item.text}</p>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="products-section bg-white pb-8 pt-8 md:pt-7">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-black tracking-normal text-slate-950 md:text-4xl">
                {dict.home.productsTitle}
              </h2>
              <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[var(--brand-cyan)]" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
              {productCategories.map((product, index) => {
                const productText = dict.home.products[index];
                return (
                <Link
                  key={productText.name}
                  href={`/products?category=${encodeURIComponent(product.category)}`}
                  className="product-card group overflow-hidden rounded-md border border-slate-200/90 bg-white text-center shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition hover:-translate-y-1 hover:border-[var(--brand-cyan)] hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <div className="relative aspect-[1.58/1] bg-white">
                    <Image
                      src={product.image}
                      alt={productText.alt}
                      width={320}
                      height={202}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 180px"
                      className={`h-full w-full object-contain transition duration-500 group-hover:scale-105 ${
                        index === 1 || index === 4
                          ? "p-0 object-[70%_82%]"
                          : index === 2
                            ? "p-1 object-[58%_62%]"
                            : "p-4"
                      }`}
                    />
                  </div>
                  <div className="px-3 pb-4 pt-2 md:px-5 md:pb-6">
                    <h3 className="text-sm font-black text-slate-950 md:text-base">{productText.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600 md:mt-2 md:text-sm md:leading-6">{productText.text}</p>
                  </div>
                </Link>
              );
              })}
            </div>
          </div>
        </section>

        <section className="video-section border-y border-slate-200 bg-[linear-gradient(135deg,#eef9fb_0%,#ffffff_46%,#fff8df_100%)] py-14 md:py-20">
          <div className="container-page grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--brand-cyan)]">
                {dict.home.video.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
                {dict.home.video.title}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[var(--brand-cyan)]" />
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {dict.home.video.text}
              </p>
              <div className="mt-7 grid gap-3">
                {dict.home.video.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-black text-slate-800">
                    <CheckCircle2 className="h-5 w-5 flex-none fill-[var(--brand-cyan)] text-white" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="video-card">
              <video
                className="h-full w-full rounded-md object-cover"
                controls
                playsInline
                preload="none"
                poster="/images/eve-home-banner-optimized.webp"
                aria-label={dict.home.video.caption}
              >
                <source src="/videos/eve-toner-home-video.mp4" type="video/mp4" />
              </video>
              <div className="video-caption">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-yellow)]" />
                {dict.home.video.caption}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-[linear-gradient(135deg,#eaf8fb_0%,#ffffff_48%,#f8f1f6_100%)] py-20">
          <div className="container-page grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-950">{dict.home.about.title}</h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-[var(--brand-cyan)]" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                {dict.home.about.text}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item, index) => {
                const advantageText = dict.home.advantages[index];
                return (
                <div key={advantageText.title} className="rounded-md border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-cyan-950/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f9] text-[var(--brand-cyan)]">
                    <item.icon size={28} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 text-base font-black text-slate-950">{advantageText.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{advantageText.text}</p>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        <section id="factory" className="section-pad bg-slate-50">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <SectionHeading
                  title={dict.home.factory.title}
                  text={dict.home.factory.text}
                />
                <a
                  href="#contact"
                  className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[var(--brand-cyan)] px-6 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
                >
                  {dict.home.factory.cta} <ArrowRight size={17} />
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {factoryHighlights.map((item, index) => {
                  const factoryText = dict.home.factory.highlights[index];
                  return (
                  <article key={factoryText.title} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                      <Image
                        src={item.image}
                        alt={`${factoryText.title} at EVE Toner`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-base font-black text-slate-950">{factoryText.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{factoryText.text}</p>
                    </div>
                  </article>
                );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="applications" className="border-y border-slate-200 bg-slate-50 py-20">
          <div className="container-page">
            <SectionHeading
              title={dict.home.applications.title}
              text={dict.home.applications.text}
              center
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {applications.map((item, index) => {
                const appText = dict.home.applications.items[index];
                return (
                <article key={appText.title} className="rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <item.icon className="mx-auto h-8 w-8 text-[var(--brand-cyan)]" strokeWidth={2.1} />
                  <h3 className="mt-4 text-base font-black text-slate-950">{appText.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{appText.text}</p>
                </article>
              );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gradient-to-r from-white to-[var(--soft-cyan)] py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading
                title={dict.home.faq.title}
                text={dict.home.faq.text}
              />
              <div className="mt-8 divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
                {dict.home.faq.items.map((item) => (
                  <details key={item.question} className="group p-5 open:bg-slate-50">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-slate-950">
                      {item.question}
                      <span className="text-xl text-[var(--brand-cyan)] group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-8 shadow-xl shadow-cyan-950/10">
              <Sparkles className="h-9 w-9 text-[var(--brand-yellow)]" />
              <h3 className="mt-5 text-2xl font-black text-slate-950">{dict.home.faq.stillTitle}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {dict.home.faq.stillText}
              </p>
              <a
                href={whatsappHref}
                className="mt-7 inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-[#10a66a] px-6 text-sm font-black text-white transition hover:bg-[#0b8b59]"
              >
                <MessageCircle size={19} /> {dict.home.faq.chat}
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-white">
          <div className="container-page overflow-hidden rounded-lg border border-slate-300 shadow-2xl shadow-cyan-950/10">
            <div className="grid lg:grid-cols-[0.72fr_1.25fr_0.75fr]">
              <div className="bg-gradient-to-br from-white to-[var(--soft-cyan)] p-8 md:p-10">
                <h2 className="text-4xl font-black text-[var(--brand-cyan)]">{dict.home.contact.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {dict.home.contact.text}
                </p>
                <div className="mt-10 grid gap-5">
                  {quoteBenefits.map((item, index) => (
                    <div key={dict.home.contact.benefits[index]} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                      <item.icon className="h-5 w-5 text-[var(--brand-cyan)]" />
                      {dict.home.contact.benefits[index]}
                    </div>
                  ))}
                </div>
              </div>

              <form className="grid gap-5 p-8 md:p-10" action="#contact">
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField label={dict.home.contact.form.name} name="name" placeholder={dict.home.contact.form.namePlaceholder} required />
                  <FormField label={dict.home.contact.form.email} name="email" type="email" placeholder={dict.home.contact.form.emailPlaceholder} required />
                  <FormField label={dict.home.contact.form.country} name="country" placeholder={dict.home.contact.form.countryPlaceholder} required />
                  <FormField label={dict.home.contact.form.product} name="product" placeholder={dict.home.contact.form.productPlaceholder} required />
                </div>
                <label className="grid gap-2 text-sm font-bold text-slate-900">
                  {dict.home.contact.form.message} <span className="sr-only">required</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={dict.home.contact.form.messagePlaceholder}
                    className="resize-none rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100"
                  />
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-[var(--brand-cyan)] px-7 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
                  >
                    {t("common.sendInquiry")} <Send size={17} />
                  </button>
                  <p className="text-xs leading-5 text-slate-500">
                    {dict.home.contact.form.success}
                  </p>
                </div>
              </form>

              <aside className="border-t border-slate-200 bg-slate-50 p-8 md:p-10 lg:border-l lg:border-t-0">
                <h3 className="text-xl font-black text-slate-950">{dict.home.contact.whatsappTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {dict.home.contact.whatsappText}
                </p>
                <a
                  href={whatsappHref}
                  className="mt-7 inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-md bg-[#10a66a] px-5 text-sm font-black text-white transition hover:bg-[#0b8b59]"
                >
                  <MessageCircle size={19} /> {t("common.whatsapp")}
                </a>
                <div className="mt-8 grid gap-4 text-sm">
                  <a className="flex items-start gap-3 text-slate-700 hover:text-[var(--brand-cyan)]" href={`mailto:${company.email}`}>
                    <Mail className="mt-0.5 h-4 w-4 flex-none" /> {company.email}
                  </a>
                  <a className="flex items-start gap-3 text-slate-700 hover:text-[var(--brand-cyan)]" href={whatsappHref}>
                    <MessageCircle className="mt-0.5 h-4 w-4 flex-none" /> {company.whatsapp}
                  </a>
                </div>
              </aside>
            </div>

            <div className="grid border-t border-slate-200 bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_52%,#eef9fb_100%)] lg:grid-cols-[0.72fr_1.28fr]">
              <div className="p-8 md:p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-cyan)] text-white shadow-lg shadow-cyan-950/15">
                  <MapPin size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-950">{dict.home.contact.mapTitle}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">
                  {dict.home.contact.mapText}
                </p>
                <div className="mt-6 rounded-md border border-slate-200 bg-white/85 p-5 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--brand-cyan)]">
                    {dict.home.contact.addressLabel}
                  </p>
                  <p className="mt-3 text-base font-bold leading-7 text-slate-900">{company.address}</p>
                </div>
                <a
                  href={company.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[var(--brand-cyan)] px-6 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
                >
                  {dict.home.contact.openMap} <ArrowRight size={17} />
                </a>
              </div>
              <div className="min-h-[360px] border-t border-slate-200 bg-white p-4 lg:border-l lg:border-t-0">
                <iframe
                  title="EVE Toner company location on OpenStreetMap"
                  src={company.mapEmbedUrl}
                  className="h-[360px] w-full rounded-md border border-slate-200 shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SectionHeading({
  title,
  text,
  center = false
}: {
  title: string;
  text: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function FormField({
  label,
  name,
  placeholder,
  required = false,
  type = "text"
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-900">
      <span>
        {label} {required ? <span className="text-[var(--brand-magenta)]">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-md border border-slate-300 px-4 text-sm font-normal outline-none transition focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100"
      />
    </label>
  );
}

function Footer() {
  const { dictionary: dict } = useTranslation();

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Image
            src="/images/eve-toner-logo.png"
            alt={dict.header.logoAlt}
            width={170}
            height={100}
            className="h-12 w-auto rounded-sm bg-white object-contain p-1"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            {dict.home.footer.intro}
          </p>
        </div>
        <FooterColumn
          title={dict.home.footer.products}
          links={dict.home.footer.productLinks}
        />
        <FooterColumn title={dict.home.footer.company} links={dict.home.footer.companyLinks} />
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white">{dict.home.footer.contact}</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {contactLinks.slice(0, 3).map((link) => (
              <a key={link.label} href={link.href} className="flex gap-3 hover:text-white">
                <link.icon className="mt-0.5 h-4 w-4 flex-none text-[var(--brand-yellow)]" />
                <span>{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
        © 2026 {company.legalName}. {dict.home.footer.rights}
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-wide text-white">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-slate-300">
        {links.map((link) => (
          <a key={link} href="#products" className="hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
