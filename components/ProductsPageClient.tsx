"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";

type ProductsPageClientProps = {
  products: Product[];
  categories: string[];
  initialCategory?: string;
};

export function ProductsPageClient({ products, categories, initialCategory = "All" }: ProductsPageClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("All");

  const categoryOptions = useMemo(() => ["All", ...categories], [categories]);
  const brands = useMemo(() => ["All", ...Array.from(new Set(products.map((item) => item.brand)))], [products]);

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesQuery =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.brand.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized);
      const matchesCategory = category === "All" || product.category === category;
      const matchesBrand = brand === "All" || product.brand === brand;

      return matchesQuery && matchesCategory && matchesBrand;
    });
  }, [brand, category, products, query]);

  return (
    <section className="container-page py-10 md:py-14">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.75fr_0.75fr]">
          <label className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search model, brand or product keyword"
              className="h-12 w-full rounded-md border border-slate-200 pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100"
            />
          </label>
          <SelectFilter label="Category" value={category} options={categoryOptions} onChange={setCategory} />
          <SelectFilter label="Brand" value={brand} options={brands} onChange={setBrand} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
          <Filter className="h-4 w-4 text-[var(--brand-cyan)]" />
          {filteredProducts.length} products found
        </div>
        <a
          href="/inquiry"
          className="hidden h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)] sm:inline-flex"
        >
          Send Product List <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)] transition hover:-translate-y-1 hover:border-[var(--brand-cyan)] hover:shadow-xl hover:shadow-cyan-950/10"
          >
            <Link href={`/products/${product.slug}`} className="block">
              <div className="aspect-square bg-white p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={350}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-slate-100 p-4">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--soft-cyan)] px-2.5 py-1 text-[11px] font-black text-[var(--brand-cyan)]">
                    {product.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-600">
                    {product.brand}
                  </span>
                </div>
                <h2 className="mt-3 line-clamp-3 min-h-[72px] text-sm font-black leading-6 text-slate-950">
                  {product.name}
                </h2>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-500">FOB Price</p>
                    <p className="text-base font-black text-[var(--brand-cyan)]">{product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-500">MOQ</p>
                    <p className="text-sm font-black text-slate-900">{product.moq}</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="grid grid-cols-2 border-t border-slate-100">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex h-12 items-center justify-center text-sm font-black text-slate-900 transition hover:bg-slate-50 hover:text-[var(--brand-cyan)]"
              >
                Details
              </Link>
              <a
                href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--brand-cyan)] text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
              >
                Inquiry <ArrowRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
        <h2 className="text-2xl font-black text-slate-950">Need a product recommendation?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
          Send model numbers, quantity and destination market. EVE Toner will help match compatible toner, drum units, developer units and copier supplies.
        </p>
        <a
          href="/inquiry"
          className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
        >
          Send Your Requirements <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function SelectFilter({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-md border border-slate-200 bg-white px-4 text-sm font-black text-slate-800 outline-none transition focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
