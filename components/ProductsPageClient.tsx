import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Filter, Search } from "lucide-react";

export type CatalogProductCard = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  moq: string;
  image: string;
  canonicalSlug: string;
  imageAlt: string;
};

type ProductsPageClientProps = {
  products: CatalogProductCard[];
  categories: string[];
  brands: string[];
  selectedCategory?: string;
  selectedBrand?: string;
  query?: string;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
};

function productsUrl({
  category,
  brand,
  query,
  page
}: {
  category?: string;
  brand?: string;
  query?: string;
  page?: number;
}) {
  const params = new URLSearchParams();
  if (category && category !== "All") params.set("category", category);
  if (brand && brand !== "All") params.set("brand", brand);
  if (query) params.set("q", query);
  if (page && page > 1) params.set("page", String(page));
  const search = params.toString();
  return search ? `/products?${search}` : "/products";
}

export function ProductsPageClient({
  products,
  categories,
  brands,
  selectedCategory = "All",
  selectedBrand = "All",
  query = "",
  currentPage,
  totalPages,
  totalProducts
}: ProductsPageClientProps) {
  const sharedUrlState = {
    category: selectedCategory,
    brand: selectedBrand,
    query
  };

  return (
    <section className="container-page py-10 md:py-14">
      <form action="/products" method="get" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.75fr_0.75fr_auto] lg:items-end">
          <label className="grid gap-1">
            <span className="text-xs font-black uppercase tracking-wide text-slate-500">Search</span>
            <span className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                name="q"
                defaultValue={query}
                placeholder="Search model, brand or product keyword"
                className="h-12 w-full rounded-md border border-slate-200 pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100"
              />
            </span>
          </label>
          <SelectFilter label="Category" name="category" value={selectedCategory} options={["All", ...categories]} />
          <SelectFilter label="Brand" name="brand" value={selectedBrand} options={["All", ...brands]} />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]"
          >
            Apply filters <Filter size={16} />
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
          <Filter className="h-4 w-4 text-[var(--brand-cyan)]" />
          {totalProducts} products found · page {currentPage} of {totalPages}
        </div>
        <a href="/inquiry" className="hidden h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)] sm:inline-flex">
          Send Product List <ArrowRight size={16} />
        </a>
      </div>

      {products.length ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const productHref = `/products/${product.canonicalSlug}`;
            return (
              <article key={product.id} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)] transition hover:-translate-y-1 hover:border-[var(--brand-cyan)] hover:shadow-xl hover:shadow-cyan-950/10">
                <Link href={productHref} className="block">
                  <div className="aspect-square bg-white p-4">
                    <Image src={product.image} alt={product.imageAlt} width={350} height={350} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="border-t border-slate-100 p-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--soft-cyan)] px-2.5 py-1 text-[11px] font-black text-[var(--brand-cyan)]">{product.category}</span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-600">{product.brand}</span>
                    </div>
                    <h2 className="mt-3 line-clamp-3 min-h-[72px] text-sm font-black leading-6 text-slate-950">{product.name}</h2>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div><p className="text-xs font-bold text-slate-500">FOB Price</p><p className="text-base font-black text-[var(--brand-cyan)]">{product.price}</p></div>
                      <div className="text-right"><p className="text-xs font-bold text-slate-500">MOQ</p><p className="text-sm font-black text-slate-900">{product.moq}</p></div>
                    </div>
                  </div>
                </Link>
                <div className="grid grid-cols-2 border-t border-slate-100">
                  <Link href={productHref} className="inline-flex h-12 items-center justify-center text-sm font-black text-slate-900 transition hover:bg-slate-50 hover:text-[var(--brand-cyan)]">Details</Link>
                  <a href={`/inquiry?product=${encodeURIComponent(product.name)}`} className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--brand-cyan)] text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]">Inquiry <ArrowRight size={15} /></a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-10 text-center">
          <h2 className="text-xl font-black text-slate-950">No matching products found</h2>
          <p className="mt-3 text-sm text-slate-600">Try a broader model keyword or send your product list for manual matching.</p>
        </div>
      )}

      {totalPages > 1 ? (
        <nav className="mt-8 flex items-center justify-center gap-3" aria-label="Product catalog pagination">
          {currentPage > 1 ? <Link rel="prev" href={productsUrl({ ...sharedUrlState, page: currentPage - 1 })} className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]"><ArrowLeft size={16} /> Previous</Link> : null}
          <span className="px-3 text-sm font-bold text-slate-600">{currentPage} / {totalPages}</span>
          {currentPage < totalPages ? <Link rel="next" href={productsUrl({ ...sharedUrlState, page: currentPage + 1 })} className="inline-flex h-11 items-center gap-2 rounded-md border border-[var(--brand-cyan)] bg-white px-4 text-sm font-black text-[var(--brand-cyan)] hover:bg-cyan-50">Next <ArrowRight size={16} /></Link> : null}
        </nav>
      ) : null}

      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
        <h2 className="text-2xl font-black text-slate-950">Need a product recommendation?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">Send model numbers, quantity and destination market. EVE Toner will help match compatible toner, drum units, developer units and copier supplies.</p>
        <a href="/inquiry" className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand-cyan)] px-5 text-sm font-black text-white transition hover:bg-[var(--brand-cyan-dark)]">Send Your Requirements <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

function SelectFilter({ label, name, value, options }: { label: string; name: string; value: string; options: string[] }) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</span>
      <select name={name} defaultValue={value} className="h-12 rounded-md border border-slate-200 bg-white px-4 text-sm font-black text-slate-800 outline-none transition focus:border-[var(--brand-cyan)] focus:ring-4 focus:ring-cyan-100">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
