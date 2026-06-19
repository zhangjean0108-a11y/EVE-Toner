import { en, type TranslationDictionary } from "./en";

export const es = {
  ...en,
  common: {
    ...en.common,
    getQuote: "Solicitar Cotización",
    downloadCatalog: "Descargar Catálogo",
    sendInquiry: "Enviar Consulta",
    contact: "Contacto",
    required: "Campo obligatorio",
    optional: "Opcional"
  },
  header: {
    ...en.header,
    languageSelector: "Selector de idioma",
    nav: [
      { key: "home", label: "Inicio", href: "/" },
      { key: "products", label: "Productos", href: "/products" },
      { key: "applications", label: "Aplicaciones", href: "/#applications" },
      { key: "about", label: "Empresa", href: "/#about" },
      { key: "factory", label: "Fábrica", href: "/#factory" },
      { key: "blog", label: "Blog", href: "/blog" },
      { key: "contact", label: "Contacto", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "Centro de Productos",
      title: "Tóner para copiadoras y repuestos",
      brandsLabel: "Marcas Compatibles",
      rfqTitle: "¿Necesita una cotización al por mayor?",
      rfqText: "Envíe modelos, cantidad y mercado destino. Nuestro equipo responderá con detalles prácticos de suministro.",
      sendRfq: "Enviar RFQ",
      products: [
        { title: "Cartucho de Tóner", text: "Tóner compatible para suministro mayorista." },
        { title: "Repuestos de Copiadora", text: "Tambores, rodillos, chips y cajas de tóner residual." },
        { title: "Unidad de Tambor / Fusor", text: "Unidades de reemplazo para reparación y mantenimiento." },
        { title: "Copiadora", text: "Copiadoras reacondicionadas para distribuidores." }
      ],
      advantages: ["Fabricante desde 2012", "Soporte OEM/ODM", "Control de calidad industrial", "Entrega rápida y soporte"]
    }
  },
  home: {
    ...en.home,
    hero: {
      ...en.home.hero,
      titlePrefix: "Proveedor de Tóner Compatible",
      titleAccent: "y Repuestos",
      titleSuffix: "para Copiadoras",
      lead: "Cartuchos de tóner compatibles, repuestos y soluciones con calidad estable, entrega rápida y soporte profesional para distribuidores e importadores.",
      points: ["Fabricante desde 2012", "Personalización OEM/ODM", "Control de calidad industrial", "Entrega rápida y soporte de proyecto"]
    },
    stats: [
      { label: "Fundada", value: "2012", text: "Más de una década de experiencia" },
      { label: "Área de Fábrica", value: "6,000+ m²", text: "Base moderna de producción en Zhuhai" },
      { label: "Equipo", value: "40+", text: "Equipo experimentado y dedicado" },
      { label: "Soporte", value: "OEM/ODM", text: "Su marca, nuestra fabricación" }
    ],
    productsTitle: "Categorías de Productos",
    products: [
      { name: "Cartucho de Tóner", text: "Alto rendimiento, calidad estable y amplia compatibilidad", alt: en.home.products[0].alt },
      { name: "Repuestos de Copiadora", text: "Gama completa para las principales marcas", alt: en.home.products[1].alt },
      { name: "Copiadora", text: "Rendimiento fiable para oficina y producción", alt: en.home.products[2].alt },
      { name: "Unidad de Tambor", text: "Larga vida útil y salida constante", alt: en.home.products[3].alt },
      { name: "Unidad Fusora", text: "Fijación estable y calidad duradera", alt: en.home.products[4].alt },
      { name: "Polvo de Tóner", text: "Polvo premium con calidad consistente", alt: en.home.products[5].alt }
    ],
    about: { title: "Por Qué Elegir EVE Toner", text: "EVE Toner se centra en valor B2B práctico: suministro estable, personalización, control de calidad y respuesta rápida." },
    factory: { ...en.home.factory, title: "Fábrica y Control de Calidad", cta: "Ver Fábrica" },
    applications: { ...en.home.applications, title: "Aplicaciones y Mercados" },
    faq: { ...en.home.faq, title: "Preguntas Frecuentes", stillTitle: "¿Tiene más preguntas?", chat: "Chatear por WhatsApp" },
    contact: { ...en.home.contact, title: "Solicitar Cotización", whatsappTitle: "Contáctenos por WhatsApp", addressLabel: "Dirección de la Empresa", openMap: "Abrir en OpenStreetMap" },
    footer: { ...en.home.footer, products: "Productos", company: "Empresa", contact: "Contacto", rights: "Todos los derechos reservados." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "Consulta B2B",
    title: "Cuéntenos qué necesita. Prepararemos una cotización práctica.",
    text: "Comparta modelo, cantidad y mercado destino. EVE Toner puede ayudar con tóner compatible, polvo de tóner, tambores, fusores, copiadoras y repuestos.",
    backHome: "Volver al inicio",
    requiredNote: "Obligatorio: nombre, email y teléfono",
    antiSpam: "Protección anti-spam incluida",
    form: {
      ...en.inquiry.form,
      name: "Nombre",
      nameError: "Ingrese su nombre.",
      emailEmpty: "Ingrese su email.",
      emailInvalid: "Ingrese un email válido.",
      phone: "Teléfono",
      phoneEmpty: "Ingrese su teléfono.",
      company: "Empresa",
      country: "País / Región",
      product: "Producto requerido",
      message: "Mensaje",
      completeRequired: "Complete todos los campos obligatorios.",
      sending: "Enviando su consulta...",
      submitting: "Enviando...",
      submit: "Enviar Consulta",
      success: "Gracias. Nuestro equipo de ventas le contactará pronto.",
      required: "Campo obligatorio",
      optional: "Opcional"
    }
  }
} satisfies TranslationDictionary;
