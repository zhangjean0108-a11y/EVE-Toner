import { en, type TranslationDictionary } from "./en";

export const fr = {
  ...en,
  common: { ...en.common, getQuote: "Demander un Devis", downloadCatalog: "Télécharger le Catalogue", sendInquiry: "Envoyer une Demande", contact: "Contact", required: "Champ obligatoire", optional: "Optionnel" },
  header: {
    ...en.header,
    languageSelector: "Sélecteur de langue",
    nav: [
      { key: "home", label: "Accueil", href: "/" },
      { key: "products", label: "Produits", href: "/products" },
      { key: "applications", label: "Applications", href: "/#applications" },
      { key: "about", label: "À Propos", href: "/#about" },
      { key: "factory", label: "Usine", href: "/#factory" },
      { key: "blog", label: "Blog", href: "/blog" },
      { key: "contact", label: "Contact", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "Centre Produits",
      title: "Toner copieur et pièces détachées",
      brandsLabel: "Marques Compatibles",
      rfqTitle: "Besoin d’un devis en gros ?",
      rfqText: "Envoyez les modèles, quantités et marché de destination. Notre équipe répondra avec des détails d’approvisionnement clairs.",
      sendRfq: "Envoyer RFQ",
      products: [
        { title: "Cartouche de Toner", text: "Toner compatible pour achats en gros." },
        { title: "Pièces de Copieur", text: "Tambours, rouleaux, puces et bacs de récupération." },
        { title: "Tambour / Unité de Fusion", text: "Unités de remplacement pour maintenance." },
        { title: "Copieur", text: "Copieurs reconditionnés fiables pour revendeurs." }
      ],
      advantages: ["Fabricant depuis 2012", "Support emballage OEM/ODM", "Contrôle qualité industriel", "Livraison rapide et support"]
    }
  },
  home: {
    ...en.home,
    hero: { ...en.home.hero, titlePrefix: "Fournisseur de Toner Compatible", titleAccent: "et Pièces", titleSuffix: "pour Copieurs", lead: "Cartouches de toner compatibles, pièces de copieur et solutions avec qualité stable, livraison rapide et support professionnel pour distributeurs et importateurs.", points: ["Fabricant depuis 2012", "Personnalisation OEM/ODM", "Contrôle qualité industriel", "Livraison rapide et support projet"] },
    stats: [
      { label: "Fondée", value: "2012", text: "Plus de dix ans d’expérience" },
      { label: "Surface Usine", value: "6,000+ m²", text: "Base de production moderne à Zhuhai" },
      { label: "Équipe", value: "40+", text: "Équipe expérimentée et dédiée" },
      { label: "Support", value: "OEM/ODM", text: "Votre marque, notre fabrication" }
    ],
    productsTitle: "Catégories de Produits",
    products: [
      { name: "Cartouche de Toner", text: "Haut rendement, qualité stable, large compatibilité", alt: en.home.products[0].alt },
      { name: "Pièces de Copieur", text: "Gamme complète pour grandes marques", alt: en.home.products[1].alt },
      { name: "Copieur", text: "Performance fiable pour bureau et production", alt: en.home.products[2].alt },
      { name: "Unité Tambour", text: "Longue durée de vie et sortie constante", alt: en.home.products[3].alt },
      { name: "Unité de Fusion", text: "Fixation stable et qualité durable", alt: en.home.products[4].alt },
      { name: "Poudre de Toner", text: "Poudre premium avec qualité constante", alt: en.home.products[5].alt }
    ],
    about: { title: "Pourquoi Choisir EVE Toner", text: "EVE Toner offre une valeur B2B concrète : approvisionnement stable, personnalisation, contrôle qualité et réponse rapide." },
    factory: { ...en.home.factory, title: "Usine et Contrôle Qualité", cta: "Voir l’Usine" },
    applications: { ...en.home.applications, title: "Applications et Marchés" },
    faq: { ...en.home.faq, title: "FAQ", stillTitle: "Encore des questions ?", chat: "Discuter sur WhatsApp" },
    contact: { ...en.home.contact, title: "Demander un Devis", whatsappTitle: "Contactez-nous sur WhatsApp", addressLabel: "Adresse de l’Entreprise", openMap: "Ouvrir dans OpenStreetMap" },
    footer: { ...en.home.footer, products: "Produits", company: "Entreprise", contact: "Contact", rights: "Tous droits réservés." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "Demande B2B",
    title: "Dites-nous ce dont vous avez besoin. Nous préparerons un devis pratique.",
    text: "Partagez modèle, quantité et destination. EVE Toner peut aider pour toner compatible, poudre, tambours, unités de fusion, copieurs et pièces.",
    backHome: "Retour à l’accueil",
    requiredNote: "Obligatoire : nom, email et téléphone",
    antiSpam: "Protection anti-spam incluse",
    form: { ...en.inquiry.form, name: "Nom", nameError: "Veuillez saisir votre nom.", emailEmpty: "Veuillez saisir votre email.", emailInvalid: "Veuillez saisir un email valide.", phone: "Téléphone", phoneEmpty: "Veuillez saisir votre téléphone.", company: "Entreprise", country: "Pays / Région", product: "Besoin Produit", message: "Message", completeRequired: "Veuillez compléter les champs obligatoires.", sending: "Envoi de votre demande...", submitting: "Envoi...", submit: "Envoyer une Demande", success: "Merci. Notre équipe commerciale vous contactera bientôt.", required: "Champ obligatoire", optional: "Optionnel" }
  }
} satisfies TranslationDictionary;
