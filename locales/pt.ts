import { en, type TranslationDictionary } from "./en";

export const pt = {
  ...en,
  common: { ...en.common, getQuote: "Solicitar Cotação", downloadCatalog: "Baixar Catálogo", sendInquiry: "Enviar Consulta", contact: "Contato", required: "Campo obrigatório", optional: "Opcional" },
  header: {
    ...en.header,
    languageSelector: "Seletor de idioma",
    nav: [
      { key: "home", label: "Início", href: "/" },
      { key: "products", label: "Produtos", href: "/products" },
      { key: "applications", label: "Aplicações", href: "/#applications" },
      { key: "about", label: "Sobre", href: "/#about" },
      { key: "factory", label: "Fábrica", href: "/#factory" },
      { key: "blog", label: "Blog", href: "/blog" },
      { key: "contact", label: "Contato", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "Centro de Produtos",
      title: "Toner para copiadoras e peças",
      brandsLabel: "Marcas Compatíveis",
      rfqTitle: "Precisa de cotação em volume?",
      rfqText: "Envie modelos, quantidade e mercado de destino. Nossa equipe responderá com detalhes práticos de fornecimento.",
      sendRfq: "Enviar RFQ",
      products: [
        { title: "Cartucho de Toner", text: "Toner compatível para fornecimento em volume." },
        { title: "Peças de Copiadora", text: "Cilindros, roletes, chips e caixas de resíduo." },
        { title: "Unidade de Cilindro / Fusor", text: "Unidades de reposição para manutenção." },
        { title: "Copiadora", text: "Copiadoras recondicionadas para distribuidores." }
      ],
      advantages: ["Fabricante desde 2012", "Suporte OEM/ODM", "Controle de qualidade industrial", "Entrega rápida e suporte"]
    }
  },
  home: {
    ...en.home,
    hero: { ...en.home.hero, titlePrefix: "Fornecedor de Toner Compatível", titleAccent: "e Peças", titleSuffix: "para Copiadoras", lead: "Cartuchos de toner compatíveis, peças para copiadoras e soluções com qualidade estável, entrega rápida e suporte profissional para distribuidores e importadores.", points: ["Fabricante desde 2012", "Personalização OEM/ODM", "Controle de qualidade industrial", "Entrega rápida e suporte de projeto"] },
    stats: [
      { label: "Fundada", value: "2012", text: "Mais de uma década de experiência" },
      { label: "Área da Fábrica", value: "6,000+ m²", text: "Base moderna de produção em Zhuhai" },
      { label: "Equipe", value: "40+", text: "Equipe experiente e dedicada" },
      { label: "Suporte", value: "OEM/ODM", text: "Sua marca, nossa fabricação" }
    ],
    productsTitle: "Categorias de Produtos",
    products: [
      { name: "Cartucho de Toner", text: "Alto rendimento, qualidade estável e ampla compatibilidade", alt: en.home.products[0].alt },
      { name: "Peças de Copiadora", text: "Linha completa para grandes marcas", alt: en.home.products[1].alt },
      { name: "Copiadora", text: "Desempenho confiável para escritório e produção", alt: en.home.products[2].alt },
      { name: "Unidade de Cilindro", text: "Longa vida útil e saída consistente", alt: en.home.products[3].alt },
      { name: "Unidade Fusora", text: "Fixação estável e qualidade durável", alt: en.home.products[4].alt },
      { name: "Pó de Toner", text: "Pó premium com qualidade consistente", alt: en.home.products[5].alt },
      { name: "Tinta Digital HP Indigo", text: "ElectroInk compatível para compradores de impressão digital", alt: en.home.products[6].alt }
    ],
    about: { title: "Por Que Escolher a EVE Toner", text: "A EVE Toner foca em valor B2B real: fornecimento estável, personalização, controle de qualidade e resposta rápida." },
    factory: { ...en.home.factory, title: "Fábrica e Controle de Qualidade", cta: "Ver Fábrica" },
    applications: { ...en.home.applications, title: "Aplicações e Mercados" },
    faq: { ...en.home.faq, title: "FAQ", stillTitle: "Ainda tem dúvidas?", chat: "Conversar no WhatsApp" },
    contact: { ...en.home.contact, title: "Solicitar Cotação", whatsappTitle: "Fale Conosco no WhatsApp", addressLabel: "Endereço da Empresa", openMap: "Abrir no OpenStreetMap" },
    footer: { ...en.home.footer, products: "Produtos", company: "Empresa", contact: "Contato", rights: "Todos os direitos reservados." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "Consulta B2B",
    title: "Conte-nos o que você precisa. Prepararemos uma cotação prática.",
    text: "Compartilhe modelo, quantidade e mercado de destino. A EVE Toner ajuda com toner compatível, pó, cilindros, fusores, copiadoras e peças.",
    backHome: "Voltar ao início",
    requiredNote: "Obrigatório: nome, email e telefone",
    antiSpam: "Proteção anti-spam incluída",
    form: { ...en.inquiry.form, name: "Nome", nameError: "Digite seu nome.", emailEmpty: "Digite seu email.", emailInvalid: "Digite um email válido.", phone: "Telefone", phoneEmpty: "Digite seu telefone.", company: "Empresa", country: "País / Região", product: "Necessidade de Produto", message: "Mensagem", completeRequired: "Preencha todos os campos obrigatórios.", sending: "Enviando sua consulta...", submitting: "Enviando...", submit: "Enviar Consulta", success: "Obrigado. Nossa equipe de vendas entrará em contato em breve.", required: "Campo obrigatório", optional: "Opcional" }
  }
} satisfies TranslationDictionary;
