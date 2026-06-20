import { en, type TranslationDictionary } from "./en";

export const de = {
  ...en,
  common: { ...en.common, getQuote: "Angebot Anfragen", downloadCatalog: "Katalog Herunterladen", sendInquiry: "Anfrage Senden", contact: "Kontakt", required: "Pflichtfeld", optional: "Optional" },
  header: {
    ...en.header,
    languageSelector: "Sprachauswahl",
    nav: [
      { key: "home", label: "Startseite", href: "/" },
      { key: "products", label: "Produkte", href: "/products" },
      { key: "applications", label: "Anwendungen", href: "/#applications" },
      { key: "about", label: "Über Uns", href: "/#about" },
      { key: "factory", label: "Fabrik", href: "/#factory" },
      { key: "blog", label: "Blog", href: "/blog" },
      { key: "contact", label: "Kontakt", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "Produktzentrum",
      title: "Kopierer-Toner und Ersatzteile",
      brandsLabel: "Kompatible Marken",
      rfqTitle: "Benötigen Sie ein Großhandelsangebot?",
      rfqText: "Senden Sie Modellnummern, Mengen und Zielmarkt. Unser Team antwortet mit praktischen Lieferdetails.",
      sendRfq: "RFQ Senden",
      products: [
        { title: "Tonerpatrone", text: "Kompatibler Kopierer-Toner für Großhandel." },
        { title: "Kopierer-Ersatzteile", text: "Trommeln, Rollen, Chips und Resttonerbehälter." },
        { title: "Trommeleinheit / Fixiereinheit", text: "Ersatzeinheiten für Wartung und Reparatur." },
        { title: "Kopierer", text: "Zuverlässige generalüberholte Kopierer für Händler." }
      ],
      advantages: ["Hersteller seit 2012", "OEM/ODM Verpackung", "Industrielle Qualitätskontrolle", "Schnelle Lieferung und Support"]
    }
  },
  home: {
    ...en.home,
    hero: { ...en.home.hero, titlePrefix: "Lieferant für kompatiblen", titleAccent: "Kopierer-Toner", titleSuffix: "und Ersatzteile", lead: "Zuverlässige kompatible Tonerpatronen, Kopierer-Ersatzteile und Lösungen mit stabiler Qualität, schneller Lieferung und professionellem Support.", points: ["Hersteller seit 2012", "OEM/ODM Anpassung", "Industrielle Qualitätskontrolle", "Schnelle Lieferung und Projektunterstützung"] },
    stats: [
      { label: "Gegründet", value: "2012", text: "Mehr als ein Jahrzehnt Erfahrung" },
      { label: "Fabrikfläche", value: "6,000+ m²", text: "Moderne Produktionsbasis in Zhuhai" },
      { label: "Team", value: "40+", text: "Erfahrenes und engagiertes Team" },
      { label: "Support", value: "OEM/ODM", text: "Ihre Marke, unsere Fertigung" }
    ],
    productsTitle: "Produktkategorien",
    products: [
      { name: "Tonerpatrone", text: "Hohe Reichweite, stabile Qualität, breite Kompatibilität", alt: en.home.products[0].alt },
      { name: "Kopierer-Ersatzteile", text: "Komplettes Sortiment für führende Marken", alt: en.home.products[1].alt },
      { name: "Kopierer", text: "Zuverlässige Leistung für Büro und Produktion", alt: en.home.products[2].alt },
      { name: "Trommeleinheit", text: "Lange Lebensdauer und konstante Ausgabe", alt: en.home.products[3].alt },
      { name: "Fixiereinheit", text: "Stabile Fixierung und langlebige Qualität", alt: en.home.products[4].alt },
      { name: "Tonerpulver", text: "Premium-Pulver mit konstanter Qualität", alt: en.home.products[5].alt },
      { name: "HP Indigo Digitaldruckfarbe", text: "Kompatible ElectroInk für Digitaldruck-Käufer", alt: en.home.products[6].alt }
    ],
    about: { title: "Warum EVE Toner", text: "EVE Toner konzentriert sich auf echten B2B-Wert: stabile Lieferung, Anpassung, Qualitätskontrolle und schnelle Reaktion." },
    factory: { ...en.home.factory, title: "Fabrik und Qualitätskontrolle", cta: "Fabrik Ansehen" },
    applications: { ...en.home.applications, title: "Anwendungen und Märkte" },
    faq: { ...en.home.faq, title: "FAQ", stillTitle: "Noch Fragen?", chat: "Auf WhatsApp Chatten" },
    contact: { ...en.home.contact, title: "Angebot Anfragen", whatsappTitle: "Kontakt per WhatsApp", addressLabel: "Firmenadresse", openMap: "In OpenStreetMap Öffnen" },
    footer: { ...en.home.footer, products: "Produkte", company: "Unternehmen", contact: "Kontakt", rights: "Alle Rechte vorbehalten." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "B2B Anfrage",
    title: "Teilen Sie uns Ihren Bedarf mit. Wir erstellen ein praktisches Angebot.",
    text: "Senden Sie Modellnummer, Menge und Zielmarkt. EVE Toner unterstützt kompatiblen Toner, Pulver, Trommeln, Fixiereinheiten, Kopierer und Ersatzteile.",
    backHome: "Zurück zur Startseite",
    requiredNote: "Pflicht: Name, E-Mail und Telefon",
    antiSpam: "Anti-Spam Schutz enthalten",
    form: { ...en.inquiry.form, name: "Name", nameError: "Bitte geben Sie Ihren Namen ein.", emailEmpty: "Bitte geben Sie Ihre E-Mail ein.", emailInvalid: "Bitte geben Sie eine gültige E-Mail ein.", phone: "Telefon", phoneEmpty: "Bitte geben Sie Ihre Telefonnummer ein.", company: "Firmenname", country: "Land / Region", product: "Produktbedarf", message: "Nachricht", completeRequired: "Bitte füllen Sie alle Pflichtfelder aus.", sending: "Ihre Anfrage wird gesendet...", submitting: "Senden...", submit: "Anfrage Senden", success: "Danke. Unser Vertriebsteam wird Sie bald kontaktieren.", required: "Pflichtfeld", optional: "Optional" }
  }
} satisfies TranslationDictionary;
