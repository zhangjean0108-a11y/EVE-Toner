import { company, faqs } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.brand,
    url: siteUrl,
    logo: `${siteUrl}/images/eve-toner-logo.png`,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zhuhai",
      addressRegion: "Guangdong",
      addressCountry: "CN"
    },
    location: [
      {
        "@type": "Place",
        name: "EVE Toner Copier Toner & Spare Parts Production Base",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4/F, Building 2, No.16 Qianjin 2nd Road, Tanzhou Town",
          addressLocality: "Zhongshan",
          addressRegion: "Guangdong",
          addressCountry: "CN"
        }
      },
      {
        "@type": "Place",
        name: "EVE Toner HP Indigo Ink Production Base",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 79, Huli Industrial Park, Tong'an District",
          addressLocality: "Xiamen",
          addressRegion: "Fujian",
          addressCountry: "CN"
        }
      }
    ],
    sameAs: [company.alibabaUrl, company.facebookUrl],
    description:
      "Zhuhai Eve Technology Co., Ltd. operates the EVE Toner brand with separate production bases for compatible copier toner and spare parts, and HP Indigo ElectroInk supply."
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brand,
    url: siteUrl
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
