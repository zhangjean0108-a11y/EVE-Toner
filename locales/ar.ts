import { en, type TranslationDictionary } from "./en";

export const ar = {
  ...en,
  common: { ...en.common, getQuote: "اطلب عرض سعر", downloadCatalog: "تحميل الكتالوج", sendInquiry: "إرسال استفسار", contact: "اتصل بنا", required: "حقل مطلوب", optional: "اختياري" },
  header: {
    ...en.header,
    languageSelector: "اختيار اللغة",
    nav: [
      { key: "home", label: "الرئيسية", href: "/" },
      { key: "products", label: "المنتجات", href: "/products" },
      { key: "applications", label: "التطبيقات", href: "/#applications" },
      { key: "about", label: "من نحن", href: "/#about" },
      { key: "factory", label: "المصنع", href: "/#factory" },
      { key: "blog", label: "المدونة", href: "/#faq" },
      { key: "contact", label: "اتصل بنا", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "مركز المنتجات",
      title: "تونر آلات النسخ وقطع الغيار",
      brandsLabel: "العلامات المتوافقة",
      rfqTitle: "هل تحتاج إلى عرض سعر للشراء بالجملة؟",
      rfqText: "أرسل أرقام الموديلات والكمية وسوق الوجهة، وسيرد فريقنا بتفاصيل توريد عملية.",
      sendRfq: "إرسال طلب سعر",
      products: [
        { title: "خرطوشة تونر", text: "تونر متوافق للتوريد بالجملة." },
        { title: "قطع غيار آلات النسخ", text: "درامات، بكرات، شرائح وصناديق تونر مستهلك." },
        { title: "وحدة درام / وحدة فيوزر", text: "وحدات بديلة للصيانة والإصلاح." },
        { title: "آلة نسخ", text: "آلات نسخ مجددة موثوقة للموزعين." }
      ],
      advantages: ["مصنع منذ 2012", "دعم OEM/ODM", "رقابة جودة صناعية", "تسليم سريع ودعم"]
    }
  },
  home: {
    ...en.home,
    hero: { ...en.home.hero, titlePrefix: "مورد تونر متوافق", titleAccent: "وقطع غيار", titleSuffix: "لآلات النسخ", lead: "نوفر خراطيش تونر متوافقة وقطع غيار وحلولاً بجودة مستقرة وتسليم سريع ودعم مهني للموزعين والمستوردين.", points: ["مصنع منذ 2012", "تخصيص OEM/ODM", "رقابة جودة صناعية", "تسليم سريع ودعم مشاريع"] },
    stats: [
      { label: "تأسست", value: "2012", text: "أكثر من عشر سنوات من الخبرة" },
      { label: "مساحة المصنع", value: "6,000+ m²", text: "قاعدة إنتاج حديثة في جوهاي" },
      { label: "الفريق", value: "40+", text: "فريق ذو خبرة وتفانٍ" },
      { label: "الدعم", value: "OEM/ODM", text: "علامتك التجارية، تصنيعنا" }
    ],
    productsTitle: "فئات المنتجات",
    products: [
      { name: "خرطوشة تونر", text: "إنتاجية عالية وجودة مستقرة وتوافق واسع", alt: en.home.products[0].alt },
      { name: "قطع غيار آلات النسخ", text: "مجموعة كاملة للعلامات الرئيسية", alt: en.home.products[1].alt },
      { name: "آلة نسخ", text: "أداء موثوق للمكاتب والإنتاج", alt: en.home.products[2].alt },
      { name: "وحدة درام", text: "عمر طويل وإخراج ثابت", alt: en.home.products[3].alt },
      { name: "وحدة فيوزر", text: "تثبيت مستقر وجودة متينة", alt: en.home.products[4].alt },
      { name: "مسحوق تونر", text: "مسحوق تونر ممتاز بجودة ثابتة", alt: en.home.products[5].alt }
    ],
    about: { title: "لماذا تختار EVE Toner", text: "تركز EVE Toner على قيمة B2B عملية: توريد مستقر، تخصيص، رقابة جودة واستجابة سريعة." },
    factory: { ...en.home.factory, title: "المصنع ورقابة الجودة", cta: "عرض جولة المصنع" },
    applications: { ...en.home.applications, title: "التطبيقات والأسواق" },
    faq: { ...en.home.faq, title: "الأسئلة الشائعة", stillTitle: "هل لديك أسئلة أخرى؟", chat: "الدردشة عبر WhatsApp" },
    contact: { ...en.home.contact, title: "اطلب عرض سعر", whatsappTitle: "تواصل معنا عبر WhatsApp", addressLabel: "عنوان الشركة", openMap: "فتح في OpenStreetMap" },
    footer: { ...en.home.footer, products: "المنتجات", company: "الشركة", contact: "اتصل بنا", rights: "جميع الحقوق محفوظة." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "استفسار B2B",
    title: "أخبرنا بما تحتاجه. سنجهز عرض سعر عملياً.",
    text: "شارك رقم الموديل والكمية وسوق الوجهة. تساعد EVE Toner في التونر المتوافق، المسحوق، وحدات الدرام، الفيوزر، آلات النسخ وقطع الغيار.",
    backHome: "العودة للرئيسية",
    requiredNote: "مطلوب: الاسم والبريد الإلكتروني والهاتف",
    antiSpam: "حماية من الرسائل المزعجة مدمجة",
    form: { ...en.inquiry.form, name: "الاسم", nameError: "يرجى إدخال الاسم.", email: "البريد الإلكتروني", emailEmpty: "يرجى إدخال البريد الإلكتروني.", emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.", phone: "الهاتف", phoneEmpty: "يرجى إدخال رقم الهاتف.", company: "اسم الشركة", country: "الدولة / المنطقة", product: "متطلبات المنتج", message: "الرسالة", completeRequired: "يرجى إكمال جميع الحقول المطلوبة.", sending: "جارٍ إرسال الاستفسار...", submitting: "جارٍ الإرسال...", submit: "إرسال استفسار", success: "شكراً لك. سيتواصل معك فريق المبيعات قريباً.", required: "حقل مطلوب", optional: "اختياري" }
  }
} satisfies TranslationDictionary;
