export type InternalSeoLink = {
  label: string;
  href: string;
  description: string;
  tags: string[];
};

export const prioritySeoPages: InternalSeoLink[] = [
  {
    label: "Compatible Xerox C2265 Toner Cartridge Supplier",
    href: "/products/compatible-xerox-c2265-toner-cartridge-supplier",
    description: "Long-tail sourcing page for buyers searching Xerox C2265 CMYK compatible toner cartridges.",
    tags: ["xerox", "toner cartridge", "compatible toner", "c2265"]
  },
  {
    label: "Bulk Copier Toner Supplier for Africa",
    href: "/products/bulk-copier-toner-supplier-africa",
    description: "Export-focused page for African dealers, importers and copier consumables distributors.",
    tags: ["africa", "bulk toner", "toner cartridge", "import guide"]
  },
  {
    label: "Drum Unit Supplier for Copier Dealers",
    href: "/products/drum-unit-supplier-for-copier-dealers",
    description: "Commercial page for copier dealers buying drum units and imaging parts.",
    tags: ["drum unit", "copier spare parts", "dealer", "imaging unit"]
  },
  {
    label: "HP Indigo Ink Supplier",
    href: "/products/hp-indigo-ink-supplier",
    description: "Digital press ink sourcing page for HP Indigo ink and compatible ElectroInk buyers.",
    tags: ["hp indigo", "digital press ink", "electroink", "ink supplier"]
  },
  {
    label: "HP Indigo Q4132D ElectroInk Supplier",
    href: "/products/hp-indigo-q4132d-electroink-supplier",
    description: "Model-specific page for buyers searching HP Indigo Q4132D ElectroInk supply.",
    tags: ["hp indigo", "q4132d", "electroink", "digital press ink"]
  }
];

export const procurementGuides: InternalSeoLink[] = [
  {
    label: "How to Choose a Reliable Compatible Copier Toner Supplier",
    href: "/blog/how-to-choose-reliable-compatible-copier-toner-supplier",
    description: "Supplier selection checklist for importers and distributors.",
    tags: ["supplier", "toner cartridge", "compatible toner", "importer"]
  },
  {
    label: "How to Check Toner Cartridge Quality Before Bulk Purchase",
    href: "/blog/how-to-check-toner-cartridge-quality-before-bulk-purchase",
    description: "Quality inspection checklist before buying copier toner in bulk.",
    tags: ["quality control", "toner cartridge", "bulk toner", "inspection"]
  },
  {
    label: "Drum Unit vs Toner Cartridge: What Is the Difference?",
    href: "/blog/drum-unit-vs-toner-cartridge-difference",
    description: "Clear product education for dealers buying toner and drum units.",
    tags: ["drum unit", "toner cartridge", "copier spare parts", "dealer"]
  },
  {
    label: "Copier Toner Import Guide for Dealers in Africa and Middle East",
    href: "/blog/copier-toner-import-guide-africa-middle-east-dealers",
    description: "Import planning guide for Africa and Middle East copier toner buyers.",
    tags: ["africa", "middle east", "bulk toner", "import guide"]
  },
  {
    label: "How to Choose a Compatible HP Indigo ElectroInk Supplier",
    href: "/blog/how-to-choose-compatible-hp-indigo-electroink-supplier",
    description: "Digital press ink sourcing guide for HP Indigo buyers.",
    tags: ["hp indigo", "digital press ink", "electroink", "ink supplier"]
  },
  {
    label: "Fuser Unit Buying Guide for Copier Parts Dealers",
    href: "/blog/fuser-unit-buying-guide-copier-parts-dealers",
    description: "Buying checklist for copier fuser units, voltage and packing.",
    tags: ["fuser unit", "copier spare parts", "dealer", "parts"]
  }
];

function scoreLink(link: InternalSeoLink, terms: string[]) {
  return link.tags.reduce((score, tag) => {
    return score + (terms.some((term) => tag.includes(term) || term.includes(tag)) ? 1 : 0);
  }, 0);
}

function normalizeTerms(values: Array<string | undefined>) {
  return values
    .filter(Boolean)
    .flatMap((value) => String(value).toLowerCase().split(/[^a-z0-9]+/))
    .filter((term) => term.length > 2);
}

export function getPrioritySeoLinksForBlog(slug: string, keywords: string[] = []) {
  const terms = normalizeTerms([slug, ...keywords]);
  return prioritySeoPages
    .map((link) => ({ link, score: scoreLink(link, terms) }))
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .map((item) => item.link)
    .slice(0, 3);
}

export function getProductPageSeoLinks(category: string, brand: string) {
  const terms = normalizeTerms([category, brand]);
  return prioritySeoPages
    .map((link) => ({ link, score: scoreLink(link, terms) }))
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .map((item) => item.link)
    .slice(0, 3);
}

export function getProductGuideLinks(category: string, brand: string) {
  const terms = normalizeTerms([category, brand]);
  return procurementGuides
    .map((link) => ({ link, score: scoreLink(link, terms) }))
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .map((item) => item.link)
    .slice(0, 3);
}

export function getSeoLandingGuideLinks(slug: string, keyword: string, category?: string) {
  const terms = normalizeTerms([slug, keyword, category]);
  return procurementGuides
    .map((link) => ({ link, score: scoreLink(link, terms) }))
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .map((item) => item.link)
    .slice(0, 3);
}
