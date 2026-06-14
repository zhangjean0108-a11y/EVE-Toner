import { company, faqs } from "@/data/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.brand,
    url: "http://www.evetoner.cn/",
    logo: "/images/eve-toner-logo.png",
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zhongshan",
      addressRegion: "Guangdong",
      addressCountry: "CN"
    }
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brand,
    url: "http://www.evetoner.cn/"
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      {[organization, website, faq].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
