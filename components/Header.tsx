"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronDown,
  Factory,
  Layers3,
  Menu,
  MessageCircle,
  Printer,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  X
} from "lucide-react";
import { useState } from "react";
import { company } from "@/data/site";
import { useTranslation } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { createWhatsAppHref } from "@/lib/whatsapp";

const megaProductIcons = [
  {
    icon: Printer,
    href: "/products"
  },
  {
    icon: Boxes,
    href: "/products"
  },
  {
    icon: Layers3,
    href: "/products"
  },
  {
    icon: Printer,
    href: "/products"
  }
];

const megaBrands = ["Ricoh", "Canon", "Xerox", "Konica Minolta", "Sharp", "Toshiba", "Kyocera"];

const megaAdvantageIcons = [Factory, Settings, ShieldCheck, Truck];

export function Header() {
  const [open, setOpen] = useState(false);
  const { dictionary: dict, t } = useTranslation();
  const whatsappHref = createWhatsAppHref(company.whatsapp);
  const facebookHref = company.facebookUrl;
  const navItems = dict.header.nav;
  const megaProducts = dict.header.mega.products.map((product, index) => ({
    ...product,
    ...megaProductIcons[index]
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20 md:gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="EVE Toner homepage">
          <Image
            src="/images/eve-toner-logo.png"
            alt={t("header.logoAlt")}
            width={162}
            height={110}
            className="h-12 w-[150px] object-contain md:h-16 md:w-[210px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-800 lg:flex">
          {navItems.map((item) => {
            const isActive = item.key === "home";
            const hasChevron = item.key === "applications" || item.key === "about";

            return item.key === "products" ? (
              <div key={item.key} className="group">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 py-8 transition hover:text-[var(--brand-cyan)] focus:outline-none focus-visible:text-[var(--brand-cyan)]"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </a>
                <div className="pointer-events-none absolute left-1/2 top-[72px] w-[min(1040px,calc(100vw-48px))] -translate-x-1/2 translate-y-3 opacity-0 transition duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/78 shadow-[0_28px_90px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 backdrop-blur-2xl">
                    <div className="grid lg:grid-cols-[1.25fr_0.78fr_0.9fr]">
                      <div className="p-6">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
                              {dict.header.mega.label}
                            </p>
                            <h3 className="mt-2 text-xl font-black text-slate-950">
                              {dict.header.mega.title}
                            </h3>
                          </div>
                          <Sparkles className="h-7 w-7 text-[var(--brand-yellow)]" />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {megaProducts.map((product) => (
                            <a
                              key={product.title}
                              href={product.href}
                              className="group/item rounded-xl border border-slate-200/80 bg-white/72 p-4 transition hover:-translate-y-0.5 hover:border-[var(--brand-cyan)] hover:bg-white hover:shadow-lg hover:shadow-cyan-950/10"
                            >
                              <div className="flex items-start gap-3">
                                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[var(--soft-cyan)] text-[var(--brand-cyan)]">
                                  <product.icon size={20} />
                                </span>
                                <span>
                                  <span className="block text-sm font-black text-slate-950">
                                    {product.title}
                                  </span>
                                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                                    {product.text}
                                  </span>
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="border-y border-slate-200/80 bg-slate-50/70 p-6 lg:border-x lg:border-y-0">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                          {dict.header.mega.brandsLabel}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {megaBrands.map((brand) => (
                            <Link
                              key={brand}
                              href="/products"
                              className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]"
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 grid gap-3">
                          {dict.header.mega.advantages.map((advantage, index) => {
                            const AdvantageIcon = megaAdvantageIcons[index];
                            return (
                            <div key={advantage} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                              <AdvantageIcon className="h-4 w-4 text-[var(--brand-cyan)]" />
                              {advantage}
                            </div>
                          );
                          })}
                        </div>
                      </div>

                      <div className="relative overflow-hidden bg-[var(--navy)] p-6 text-white">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--brand-cyan)]/20 blur-2xl" />
                        <BadgeCheck className="relative h-9 w-9 text-[var(--brand-yellow)]" />
                        <h3 className="relative mt-5 text-2xl font-black leading-tight">
                          {dict.header.mega.rfqTitle}
                        </h3>
                        <p className="relative mt-3 text-sm leading-6 text-slate-300">
                          {dict.header.mega.rfqText}
                        </p>
                        <a
                          href="/inquiry"
                          className="relative mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-white px-4 text-sm font-black text-slate-950 transition hover:bg-[var(--soft-cyan)]"
                        >
                          {dict.header.mega.sendRfq} <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className={`relative inline-flex items-center gap-1.5 py-8 transition hover:text-[var(--brand-cyan)] ${
                  isActive
                    ? "text-[var(--brand-cyan)] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[var(--brand-cyan)]"
                    : ""
                }`}
              >
                {item.label}
                {hasChevron ? <ChevronDown className="h-4 w-4" /> : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/inquiry"
            className="inline-flex h-12 items-center rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white shadow-sm transition hover:bg-[var(--brand-cyan-dark)]"
          >
            {t("common.getQuote")}
          </a>
          <a
            href={whatsappHref}
            className="inline-flex items-center gap-2 text-sm font-black text-slate-800 transition hover:text-[#10a66a]"
          >
            <MessageCircle className="h-5 w-5 text-[#10a66a]" />
            {t("common.whatsapp")}
          </a>
          <a
            href={facebookHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black text-slate-800 transition hover:text-[#1877f2]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877f2] text-sm font-black leading-none text-white">
              f
            </span>
            Facebook
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={t("header.toggleMenu")}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page grid gap-1 py-4 text-sm font-semibold">
            {navItems.map((item) => (
              <div key={item.key}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-3 text-slate-800 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
                {item.key === "products" ? (
                  <div className="ml-3 grid gap-1 border-l border-slate-200 pl-3">
                    {megaProducts.map((product) => (
                      <a
                        key={product.title}
                        href={product.href}
                        className="rounded-md px-2 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-[var(--brand-cyan)]"
                        onClick={() => setOpen(false)}
                      >
                        {product.title}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a
              href="/inquiry"
              className="mt-2 rounded-md bg-[var(--brand-cyan)] px-4 py-3 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              {t("common.getQuote")}
            </a>
            <a
              href={facebookHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#1877f2]/25 bg-[#1877f2]/8 px-4 py-3 text-center font-bold text-[#1877f2]"
              onClick={() => setOpen(false)}
            >
              Facebook
            </a>
            <LanguageSwitcher compact />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
