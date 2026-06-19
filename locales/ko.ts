import { en, type TranslationDictionary } from "./en";

export const ko = {
  ...en,
  common: { ...en.common, getQuote: "견적 요청", downloadCatalog: "카탈로그 다운로드", sendInquiry: "문의 보내기", contact: "문의", required: "필수 항목", optional: "선택" },
  header: {
    ...en.header,
    languageSelector: "언어 선택",
    nav: [
      { key: "home", label: "홈", href: "/" },
      { key: "products", label: "제품", href: "/products" },
      { key: "applications", label: "적용 분야", href: "/#applications" },
      { key: "about", label: "회사 소개", href: "/#about" },
      { key: "factory", label: "공장", href: "/#factory" },
      { key: "blog", label: "블로그", href: "/blog" },
      { key: "contact", label: "연락처", href: "/#contact" }
    ],
    mega: {
      ...en.header.mega,
      label: "제품 센터",
      title: "복사기 토너 및 교체 부품",
      brandsLabel: "호환 브랜드",
      rfqTitle: "대량 구매 견적이 필요하신가요?",
      rfqText: "모델 번호, 수량, 목적 시장을 보내주시면 실제 공급 조건을 안내해드립니다.",
      sendRfq: "RFQ 보내기",
      products: [
        { title: "토너 카트리지", text: "대량 공급용 호환 복사기 토너." },
        { title: "복사기 부품", text: "드럼, 롤러, 칩, 폐토너 박스." },
        { title: "드럼 / 정착 유닛", text: "수리 및 유지보수용 교체 유닛." },
        { title: "복사기", text: "딜러용 안정적인 재생 복사기." }
      ],
      advantages: ["2012년부터 제조", "OEM/ODM 포장 지원", "산업급 품질 관리", "빠른 납기와 지원"]
    }
  },
  home: {
    ...en.home,
    hero: { ...en.home.hero, titlePrefix: "호환 복사기 토너", titleAccent: "및 부품", titleSuffix: "공급업체", lead: "안정적인 품질, 빠른 납기, 전문 지원을 갖춘 호환 토너 카트리지, 복사기 부품 및 솔루션을 제공합니다.", points: ["2012년부터 제조", "OEM/ODM 맞춤 지원", "산업급 품질 관리", "빠른 납기 및 프로젝트 지원"] },
    stats: [
      { label: "설립", value: "2012", text: "10년 이상의 업계 경험" },
      { label: "공장 면적", value: "6,000+ m²", text: "주하이 현대 생산 기지" },
      { label: "팀", value: "40+", text: "경험 있고 전담하는 팀" },
      { label: "지원", value: "OEM/ODM", text: "귀사의 브랜드, 당사의 제조" }
    ],
    productsTitle: "제품 카테고리",
    products: [
      { name: "토너 카트리지", text: "높은 출력량, 안정 품질, 넓은 호환성", alt: en.home.products[0].alt },
      { name: "복사기 부품", text: "주요 브랜드용 완전한 부품 범위", alt: en.home.products[1].alt },
      { name: "복사기", text: "사무 및 생산용 안정 성능", alt: en.home.products[2].alt },
      { name: "드럼 유닛", text: "긴 수명과 일관된 출력", alt: en.home.products[3].alt },
      { name: "정착 유닛", text: "안정적인 정착 성능과 내구성", alt: en.home.products[4].alt },
      { name: "토너 파우더", text: "일관된 품질의 프리미엄 토너", alt: en.home.products[5].alt }
    ],
    about: { title: "EVE Toner를 선택하는 이유", text: "EVE Toner는 안정 공급, 맞춤 제작, 품질 관리, 빠른 대응이라는 실질적인 B2B 가치를 중시합니다." },
    factory: { ...en.home.factory, title: "공장 및 품질 관리", cta: "공장 보기" },
    applications: { ...en.home.applications, title: "적용 분야 및 시장" },
    faq: { ...en.home.faq, title: "FAQ", stillTitle: "궁금한 점이 있나요?", chat: "WhatsApp 상담" },
    contact: { ...en.home.contact, title: "견적 요청", whatsappTitle: "WhatsApp으로 문의", addressLabel: "회사 주소", openMap: "OpenStreetMap에서 열기" },
    footer: { ...en.home.footer, products: "제품", company: "회사", contact: "문의", rights: "All rights reserved." }
  },
  inquiry: {
    ...en.inquiry,
    eyebrow: "B2B 문의",
    title: "필요한 내용을 알려주세요. 실용적인 견적을 준비하겠습니다.",
    text: "모델 번호, 수량, 목적 시장을 공유해 주세요. 호환 토너, 토너 파우더, 드럼, 정착 유닛, 복사기 및 부품을 지원합니다.",
    backHome: "홈으로 돌아가기",
    requiredNote: "필수: 이름, 이메일, 전화",
    antiSpam: "스팸 방지 포함",
    form: { ...en.inquiry.form, name: "이름", nameError: "이름을 입력해 주세요.", emailEmpty: "이메일을 입력해 주세요.", emailInvalid: "올바른 이메일을 입력해 주세요.", phone: "전화", phoneEmpty: "전화번호를 입력해 주세요.", company: "회사명", country: "국가 / 지역", product: "제품 요구사항", message: "메시지", completeRequired: "필수 항목을 입력해 주세요.", sending: "문의 전송 중...", submitting: "전송 중...", submit: "문의 보내기", success: "감사합니다. 영업팀이 곧 연락드리겠습니다.", required: "필수 항목", optional: "선택" }
  }
} satisfies TranslationDictionary;
