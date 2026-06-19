import type { Product } from "@/data/products";

const GENERIC_MODEL_WORDS = new Set([
  "a",
  "and",
  "african",
  "application",
  "black",
  "bulk",
  "cartridge",
  "color",
  "colour",
  "compatible",
  "copier",
  "copy",
  "digital",
  "drum",
  "for",
  "high",
  "ink",
  "laser",
  "machine",
  "office",
  "parts",
  "powder",
  "printer",
  "printing",
  "press",
  "replacement",
  "series",
  "set",
  "toner",
  "unit",
  "use",
  "with"
]);

const CATEGORY_SLUGS: Record<string, string> = {
  "Copier Machine": "copier-machine",
  "Digital Press Ink": "digital-press-ink",
  "Developer Unit": "developer-unit",
  "Drum Unit": "drum-unit",
  "Fuser Unit": "fuser-unit",
  "Toner Cartridge": "toner-cartridge",
  "Toner Powder": "toner-powder"
};

const CATEGORY_ALT_NAMES: Record<string, string> = {
  "Copier Machine": "copier machine",
  "Digital Press Ink": "digital press ink",
  "Developer Unit": "developer unit",
  "Drum Unit": "drum unit",
  "Fuser Unit": "fuser unit",
  "Toner Cartridge": "toner cartridge",
  "Toner Powder": "toner powder"
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function uniqueTokens(tokens: string[]) {
  const seen = new Set<string>();
  return tokens.filter((token) => {
    const normalized = token.toLowerCase();
    if (seen.has(normalized)) {
      return false;
    }
    seen.add(normalized);
    return true;
  });
}

function normalizeToken(token: string) {
  return token.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

function isModelLikeToken(token: string) {
  const normalized = normalizeToken(token);
  if (!normalized) {
    return false;
  }

  const lower = normalized.toLowerCase();
  if (GENERIC_MODEL_WORDS.has(lower)) {
    return false;
  }

  const hasLetter = /[a-zA-Z]/.test(normalized);
  const hasNumber = /\d/.test(normalized);
  const isLongNumber = /^\d{3,}$/.test(normalized);
  const isPartPrefix = /^(tn|tk|npg|gpr|c-exv|cexv|dr|du|iu|dv|dk|mp|mpc|im|imc|dcc|dc|bhc|ct|ir|q|tfc|t-fc|apeos|apeosport|altalink|versalink|workcentre|docucentre|docuprint|bizhub)$/i.test(
    normalized
  );

  return (hasLetter && hasNumber) || isLongNumber || isPartPrefix;
}

export function getProductModelTokens(product: Product) {
  const rawTokens = product.name
    .replace(/[()]/g, " ")
    .split(/[\s,;:+]+/)
    .map(normalizeToken)
    .filter(Boolean);

  const modelTokens = rawTokens.filter(isModelLikeToken);
  const brandTokens = product.brand.split(/\s+/).map(normalizeToken).filter(Boolean);
  const selected = uniqueTokens([...brandTokens, ...modelTokens]).slice(0, 7);

  if (selected.length) {
    return selected;
  }

  return uniqueTokens([...brandTokens, product.category]).slice(0, 4);
}

export function getProductModelText(product: Product) {
  return getProductModelTokens(product).join(" ");
}

export function getProductTypeText(product: Product) {
  return CATEGORY_ALT_NAMES[product.category] ?? product.category.toLowerCase();
}

export function getProductCompatibleModels(product: Product) {
  const tokens = getProductModelTokens(product);
  const brandTokens = product.brand.split(/\s+/).map((token) => token.toLowerCase());
  const models = tokens.filter((token) => !brandTokens.includes(token.toLowerCase()));

  return models.length ? models.join(", ") : getProductModelText(product);
}

export function getProductPackageSummary(product: Product) {
  const colorWords = [
    ["cyan", "cyan"],
    ["magenta", "magenta"],
    ["yellow", "yellow"],
    ["black", "black"],
    ["cmyk", "CMYK"],
    ["color", "color set"],
    ["colour", "color set"]
  ];
  const detectedColors = colorWords
    .filter(([keyword]) => product.name.toLowerCase().includes(keyword))
    .map(([, label]) => label);
  const colorText = detectedColors.length ? `Color: ${Array.from(new Set(detectedColors)).join(", ")}.` : "Color: confirm by model and order requirement.";
  const yieldText =
    product.category === "Copier Machine"
      ? "Configuration, meter count and accessories should be confirmed before quotation."
      : "Yield and page output depend on the confirmed machine series, product version and operating environment.";

  return `${colorText} ${yieldText} Regular MOQ is ${product.moq}; reference FOB price is ${product.price}. Export carton packing, label options and OEM/ODM packaging can be discussed for bulk orders.`;
}

export function getProductCanonicalSlug(product: Product) {
  const modelPart = slugify(getProductModelTokens(product).slice(0, 6).join(" "));
  const categoryPart = CATEGORY_SLUGS[product.category] ?? slugify(product.category);
  const base = [modelPart, categoryPart].filter(Boolean).join("-");
  const compactBase = base.split("-").slice(0, 10).join("-");

  return `${compactBase || categoryPart}-${product.id}`;
}

export function findProductByRouteSlug(slug: string, products: Product[]) {
  return products.find((product) => product.slug === slug || getProductCanonicalSlug(product) === slug);
}

export function getProductSeoTitle(product: Product) {
  const modelText = getProductModelText(product);
  return `${modelText} Compatible ${product.category} for ${product.brand} | EVE Toner`;
}

export function getProductMetaDescription(product: Product) {
  const modelText = getProductModelText(product);
  const productType = getProductTypeText(product);

  return `Bulk supply of compatible ${modelText} ${productType} for ${product.brand} copiers. Stable quality, export packaging, OEM/ODM support and fast inquiry response from EVE Toner.`;
}

export function getProductLongDescription(product: Product) {
  const modelText = getProductModelText(product);
  const category = getProductTypeText(product);

  return `This compatible ${modelText} ${category} is supplied by EVE Toner for ${product.brand} copier and printing applications. It is prepared for B2B buyers, copier dealers, service teams and importers who need stable supply, practical MOQ and export-ready packing. Before quotation, our team can help confirm model compatibility, color or part number requirements, packaging method and order quantity. For bulk orders, customers can request product photos, sample confirmation, factory testing information or shipment inspection support. Share your copier model, target market and expected quantity to receive a practical quotation, lead time and packing suggestion. This page is written to help overseas buyers quickly understand the product category, application, matching points and inquiry information needed before purchasing.`;
}

export function getProductImageAlt(product: Product, imageIndex?: number) {
  const modelText = getProductModelText(product);
  const category = getProductTypeText(product);
  const colorSet = /cmyk|cyan|magenta|yellow|black|colour|color/i.test(product.name) ? " CMYK set" : "";
  const suffix = imageIndex ? ` image ${imageIndex}` : "";

  return `Compatible ${modelText} ${category}${colorSet}${suffix}.`;
}

export function getProductFaqs(product: Product) {
  const modelText = getProductModelText(product);
  const productType = getProductTypeText(product);

  return [
    {
      question: `Is this ${modelText} ${productType} compatible with my machine?`,
      answer: `Please send your copier model, part number, color requirement and destination market. EVE Toner will check the suitable version before quotation.`
    },
    {
      question: `Can EVE Toner support bulk orders and OEM/ODM packaging?`,
      answer: `Yes. Bulk supply, export carton packing, label options and OEM/ODM packaging can be discussed according to order quantity and market requirements.`
    },
    {
      question: `What should I provide before requesting a quote?`,
      answer: `Please provide the model code, product type, quantity, target country, preferred packing method and any sample or inspection requirements.`
    }
  ];
}
