import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Download,
  Factory,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Printer,
  Send,
  Settings,
  ShieldCheck,
  Truck
} from "lucide-react";
import { createWhatsAppHref } from "@/lib/whatsapp";

export const company = {
  brand: "EVE Toner",
  legalName: "Zhuhai Eve Technology Co.,LTD",
  founded: "2012",
  factoryArea: "6,000+ m²",
  team: "40+ elite team members",
  contact: "Jean Zhang",
  email: "zhangjin@evecolor.net",
  phone: "008618824393154",
  whatsapp: "008618824393154",
  address: "4/F, Building 2, No.16 Qianjin 2nd Road, Tanzhou Town, Zhongshan City, China",
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=113.4350%2C22.2200%2C113.5150%2C22.2900&layer=mapnik&marker=22.2550%2C113.4750",
  mapLink:
    "https://www.openstreetmap.org/search?query=4%2FF%2C%20Building%202%2C%20No.16%20Qianjin%202nd%20Road%2C%20Tanzhou%20Town%2C%20Zhongshan%20City%2C%20China",
  markets: [
    "Middle East",
    "Africa",
    "South America",
    "Kenya",
    "USA",
    "Brazil",
    "Indonesia",
    "Russia"
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "About", href: "/#about" },
  { label: "Factory", href: "/#factory" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" }
];

export const heroPoints = [
  "Source manufacturer since 2012",
  "OEM/ODM customization",
  "Industrial-grade quality control",
  "Fast delivery and project support"
];

export const productCategories = [
  {
    name: "Toner Cartridge",
    category: "Toner Cartridge",
    text: "High yield, stable quality, wide compatibility",
    image: "/images/category-toner-cartridge-group.webp",
    alt: "Compatible toner cartridge"
  },
  {
    name: "Copier Spare Parts",
    category: "Copier Spare Parts",
    text: "Complete range of parts for major copier brands",
    image: "/images/category-copier-spare-parts-group.webp",
    alt: "Copier spare parts"
  },
  {
    name: "Copier Machine",
    category: "Copier Machine",
    text: "Reliable performance for office and production",
    image: "/images/category-copier-machine-group.webp",
    alt: "Copier machine"
  },
  {
    name: "Drum Unit",
    category: "Drum Unit",
    text: "Long life, high page yield, consistent output",
    image: "/images/category-drum-unit-group.webp",
    alt: "Compatible drum unit"
  },
  {
    name: "Fuser Unit",
    category: "Fuser Unit",
    text: "Stable fixing performance and durable quality",
    image: "/images/category-fuser-unit.webp",
    alt: "Compatible fuser unit"
  },
  {
    name: "Toner Powder",
    category: "Toner Powder",
    text: "Premium toner powder with consistent quality",
    image: "/images/category-big-toner-powder.webp",
    alt: "CMYK copier toner powder"
  }
];

export const advantages = [
  {
    icon: Factory,
    title: "Source Manufacturer",
    text: "Founded in 2012 with a 6,000+ m² factory and practical export experience."
  },
  {
    icon: Settings,
    title: "OEM/ODM Customization",
    text: "Support logo, packaging, color box and product configuration requests."
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    text: "Strict inspection process helps protect page yield, color stability and compatibility."
  },
  {
    icon: Truck,
    title: "Fast Delivery & Support",
    text: "Stock preparation, shipping coordination and project support for global buyers."
  }
];

export const factoryHighlights = [
  {
    title: "Warehouse",
    text: "Organized stock helps support repeated orders and urgent replenishment.",
    image: "/images/factory-warehouse.webp"
  },
  {
    title: "Testing Room",
    text: "Compatibility and print quality checks before shipment.",
    image: "/images/factory-research-room.webp"
  },
  {
    title: "Production Line",
    text: "Toner filling, assembly, packing and shipment preparation in one supply chain.",
    image: "/images/factory-production-line.webp"
  },
  {
    title: "Trade Show",
    text: "Meet EVE Toner at international exhibitions and review product solutions in person.",
    image: "/images/factory-trade-show.webp"
  }
];

export const applications = [
  {
    icon: Globe2,
    title: "Importers",
    text: "Build a stable supply chain with competitive bulk pricing."
  },
  {
    icon: PackageCheck,
    title: "Dealers & Distributors",
    text: "Grow local resale channels with compatible toner and spare parts."
  },
  {
    icon: Printer,
    title: "Printing Shops",
    text: "Reliable output for high-frequency office and production printing."
  },
  {
    icon: Building2,
    title: "Rental Shops",
    text: "Long-term replacement supply for copier rental and maintenance operations."
  },
  {
    icon: ClipboardCheck,
    title: "Schools & Institutions",
    text: "Cost-effective consumables for education and office procurement."
  }
];

export const faqs = [
  {
    question: "Are your products compatible with original copier cartridges?",
    answer:
      "Yes. EVE Toner supplies compatible copier toner cartridges, drum units and spare parts for major copier brands including Ricoh, Canon, Xerox, Konica Minolta, Sharp, Toshiba and Kyocera."
  },
  {
    question: "Can I request OEM/ODM customization?",
    answer:
      "Yes. We support logo, packaging, color box and selected product customization for qualified B2B orders."
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "MOQ depends on product model, packaging requirements and destination market. Send the model and quantity to our team for a practical quotation."
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We use compatibility checks, print testing, inspection and packing control to help maintain stable page yield, clear output and lower after-sales risk."
  },
  {
    question: "What is the delivery time?",
    answer:
      "Delivery time depends on stock, order quantity and shipping method. For regular models, our sales team can confirm availability and lead time quickly."
  }
];

export const quoteBenefits = [
  { icon: BadgeCheck, text: "Competitive price" },
  { icon: ShieldCheck, text: "Stable quality" },
  { icon: Headphones, text: "Professional support" }
];

export const contactLinks = [
  { icon: MessageCircle, label: "WhatsApp", value: company.whatsapp, href: createWhatsAppHref(company.whatsapp) },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Address", value: company.address, href: "#contact" },
  { icon: Download, label: "Catalog", value: "Download product catalog", href: "/images/konica-product-list.jpg" },
  { icon: Send, label: "Contact", value: company.contact, href: "#contact" }
];
