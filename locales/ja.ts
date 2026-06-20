import { en, type TranslationDictionary } from "./en";

export const ja = {
  ...en,
  common: { ...en.common, getQuote: "見積依頼", downloadCatalog: "カタログをダウンロード", sendInquiry: "問い合わせを送信", contact: "お問い合わせ", required: "必須項目", optional: "任意" },
  header: {
    ...en.header,
    languageSelector: "言語選択",
    nav: [
      { key: "home", label: "ホーム", href: "/" },
      { key: "products", label: "製品", href: "/products" },
      { key: "applications", label: "用途", href: "/#applications" },
      { key: "about", label: "会社情報", href: "/#about" },
      { key: "factory", label: "工場", href: "/#factory" },
      { key: "blog", label: "ブログ", href: "/blog" },
      { key: "contact", label: "連絡先", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "製品センター",
      title: "複合機トナーと交換部品",
      brandsLabel: "対応ブランド",
      rfqTitle: "大量購入の見積が必要ですか？",
      rfqText: "型番、数量、仕向け市場をお送りください。供給条件を実務的にご案内します。",
      sendRfq: "RFQを送信",
      products: [
        { title: "トナーカートリッジ", text: "大量供給向け互換トナー。" },
        { title: "複合機部品", text: "ドラム、ローラー、チップ、廃トナーボックス。" },
        { title: "ドラム / 定着ユニット", text: "保守交換用ユニット。" },
        { title: "複合機", text: "販売店向けの再生複合機。" }
      ],
      advantages: ["2012年創業のメーカー", "OEM/ODM包装対応", "工業レベルの品質管理", "迅速な納品とサポート"]
    }
  },
  home: {
    ...en.home,
    hero: { ...en.home.hero, titlePrefix: "互換複合機トナー", titleAccent: "交換部品", titleSuffix: "サプライヤー", lead: "安定した品質、迅速な納品、専門サポートを備えた互換トナーカートリッジ、複合機部品、ソリューションを提供します。", points: ["2012年創業のメーカー", "OEM/ODMカスタマイズ", "工業レベルの品質管理", "迅速な納品とプロジェクト支援"] },
    stats: [
      { label: "創業", value: "2012", text: "10年以上の業界経験" },
      { label: "工場面積", value: "6,000+ m²", text: "珠海の近代的生産拠点" },
      { label: "チーム", value: "40+", text: "経験豊富な専門チーム" },
      { label: "対応", value: "OEM/ODM", text: "お客様ブランドを当社が製造" }
    ],
    productsTitle: "製品カテゴリ",
    products: [
      { name: "トナーカートリッジ", text: "高印字枚数、安定品質、幅広い互換性", alt: en.home.products[0].alt },
      { name: "複合機部品", text: "主要ブランド向け部品を幅広く供給", alt: en.home.products[1].alt },
      { name: "複合機", text: "オフィスと生産現場に信頼性のある性能", alt: en.home.products[2].alt },
      { name: "ドラムユニット", text: "長寿命で安定した出力", alt: en.home.products[3].alt },
      { name: "定着ユニット", text: "安定した定着性能と耐久品質", alt: en.home.products[4].alt },
      { name: "トナー粉", text: "安定品質のプレミアムトナー粉", alt: en.home.products[5].alt },
      { name: "HP Indigo デジタルインク", text: "デジタル印刷向け互換 ElectroInk", alt: en.home.products[6].alt }
    ],
    about: { title: "EVE Tonerが選ばれる理由", text: "安定供給、カスタマイズ、品質管理、迅速対応という実用的なB2B価値を重視しています。" },
    factory: { ...en.home.factory, title: "工場と品質管理", cta: "工場を見る" },
    applications: { ...en.home.applications, title: "用途と市場" },
    faq: { ...en.home.faq, title: "FAQ", stillTitle: "ご不明点がありますか？", chat: "WhatsAppで相談" },
    contact: { ...en.home.contact, title: "見積依頼", whatsappTitle: "WhatsAppでお問い合わせ", addressLabel: "会社住所", openMap: "OpenStreetMapで開く" },
    footer: { ...en.home.footer, products: "製品", company: "会社", contact: "お問い合わせ", rights: "All rights reserved." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "B2B問い合わせ",
    title: "必要な内容をお知らせください。実用的な見積を作成します。",
    text: "型番、数量、仕向け市場を共有してください。互換トナー、トナー粉、ドラム、定着ユニット、複合機、部品に対応します。",
    backHome: "ホームに戻る",
    requiredNote: "必須：氏名、メール、電話",
    antiSpam: "スパム対策を含む",
    form: { ...en.inquiry.form, name: "氏名", nameError: "氏名を入力してください。", emailEmpty: "メールアドレスを入力してください。", emailInvalid: "有効なメールアドレスを入力してください。", phone: "電話", phoneEmpty: "電話番号を入力してください。", company: "会社名", country: "国 / 地域", product: "製品要件", message: "メッセージ", completeRequired: "必須項目を入力してください。", sending: "問い合わせを送信中...", submitting: "送信中...", submit: "問い合わせを送信", success: "ありがとうございます。営業チームよりご連絡いたします。", required: "必須項目", optional: "任意" }
  }
} satisfies TranslationDictionary;
