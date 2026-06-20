export type SeoLandingPage = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  brand?: string;
  category?: string;
  relatedBrands: string[];
  buyerTypes: string[];
  modelExamples: string[];
  sections: {
    title: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const sharedBuyerTypes = ["Importers", "Dealers", "Distributors", "Copier repair shops", "Office equipment resellers"];

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "ricoh-compatible-toner-supplier",
    keyword: "Ricoh compatible toner supplier",
    title: "Ricoh Compatible Toner Supplier | EVE Toner",
    description:
      "Source Ricoh compatible copier toner cartridges and toner powder from EVE Toner for B2B wholesale, OEM packaging and export supply.",
    h1: "Ricoh Compatible Toner Supplier for B2B Buyers",
    eyebrow: "Ricoh toner supply",
    intro:
      "EVE Toner supplies Ricoh compatible toner cartridges, toner powder and selected replacement parts for importers, copier dealers and service companies that need stable bulk supply.",
    brand: "Ricoh",
    category: "Toner Cartridge",
    relatedBrands: ["Ricoh", "Canon", "Xerox", "Konica Minolta"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["MP C5000", "IM C2000", "IM C2500", "Aficio MP series"],
    sections: [
      {
        title: "Bulk Ricoh compatible toner sourcing",
        text:
          "Buyers can send Ricoh model numbers, target quantity and destination market to confirm suitable versions, packing details and lead time before ordering."
      },
      {
        title: "OEM packaging and export support",
        text:
          "For qualified B2B orders, EVE Toner can discuss label, carton and packaging requirements for local resale channels."
      }
    ],
    faqs: [
      {
        question: "Can EVE Toner quote Ricoh compatible toner by model number?",
        answer: "Yes. Send the Ricoh copier model, cartridge code, color and quantity so our team can check the suitable version."
      },
      {
        question: "Do you support wholesale Ricoh toner orders?",
        answer: "Yes. We support B2B procurement, export packing and repeat supply for dealers, importers and distributors."
      }
    ]
  },
  {
    slug: "canon-compatible-toner-cartridge-supplier",
    keyword: "Canon compatible toner cartridge supplier",
    title: "Canon Compatible Toner Cartridge Supplier | EVE Toner",
    description:
      "EVE Toner supplies Canon compatible copier toner cartridges and replacement consumables for distributors, importers and repair shops.",
    h1: "Canon Compatible Toner Cartridge Supplier",
    eyebrow: "Canon copier toner",
    intro:
      "Use this page to request Canon compatible toner cartridge sourcing for bulk orders, OEM packing discussions and export-ready B2B quotation.",
    brand: "Canon",
    category: "Toner Cartridge",
    relatedBrands: ["Canon", "Ricoh", "Xerox", "Sharp"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["GPR series", "NPG series", "C-EXV series", "imageRUNNER series"],
    sections: [
      {
        title: "Canon model matching",
        text:
          "Canon toner requirements may vary by region, part code and copier series. Share your current model list before bulk purchase."
      },
      {
        title: "Quotation details buyers should prepare",
        text:
          "Provide model code, color, estimated monthly volume, packaging request and destination country for a practical quotation."
      }
    ],
    faqs: [
      {
        question: "What information is needed for Canon compatible toner quotation?",
        answer: "Please provide copier model, toner code, color, quantity, destination country and packing requirement."
      },
      {
        question: "Can EVE Toner supply Canon toner for distributors?",
        answer: "Yes. We support compatible toner sourcing for distributors, copier dealers, importers and repair teams."
      }
    ]
  },
  {
    slug: "xerox-compatible-toner-supplier",
    keyword: "Xerox compatible toner supplier",
    title: "Xerox Compatible Toner Supplier | EVE Toner",
    description:
      "Find Xerox compatible toner cartridges and drum units for DocuCentre, ApeosPort and selected Xerox copier applications.",
    h1: "Xerox Compatible Toner Supplier",
    eyebrow: "Xerox toner and drums",
    intro:
      "EVE Toner helps overseas buyers source Xerox compatible toner cartridges, drum units and selected copier replacement parts for bulk supply.",
    brand: "Xerox",
    category: "Toner Cartridge",
    relatedBrands: ["Xerox", "Fuji Xerox", "Ricoh", "Konica Minolta"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["C560", "C570", "C60", "C70", "DocuCentre series"],
    sections: [
      {
        title: "Xerox toner and drum supply",
        text:
          "Many Xerox projects include toner cartridges, drum cartridges and maintenance parts. EVE Toner can help buyers check model compatibility before quotation."
      },
      {
        title: "For importers and service companies",
        text:
          "The page is built for B2B buyers who need repeat supply, practical MOQ, export packing and fast WhatsApp response."
      }
    ],
    faqs: [
      {
        question: "Can you quote Xerox C560 or C570 compatible toner?",
        answer: "Yes. Send the exact model, color and required quantity so we can confirm suitable supply."
      },
      {
        question: "Do you also supply Xerox drum units?",
        answer: "Yes. EVE Toner supplies selected Xerox compatible drum units and replacement parts."
      }
    ]
  },
  {
    slug: "konica-minolta-compatible-toner-supplier",
    keyword: "Konica Minolta compatible toner supplier",
    title: "Konica Minolta Compatible Toner Supplier | EVE Toner",
    description:
      "Source Konica Minolta compatible toner cartridges, developer units and drum units from EVE Toner for wholesale B2B orders.",
    h1: "Konica Minolta Compatible Toner Supplier",
    eyebrow: "Konica Minolta consumables",
    intro:
      "EVE Toner supplies Konica Minolta compatible toner, developer units, drum units and related consumables for importers and copier service channels.",
    brand: "Konica Minolta",
    category: "Toner Cartridge",
    relatedBrands: ["Konica Minolta", "Ricoh", "Xerox", "Canon"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["TN622", "DV311", "DR-910", "bizhub PRESS series"],
    sections: [
      {
        title: "Toner, developer and drum matching",
        text:
          "Konica Minolta procurement often requires toner, developer and drum items together. Confirm part code and machine series before bulk order."
      },
      {
        title: "B2B supply for repeat orders",
        text:
          "EVE Toner supports dealers and importers with export packing, inspection notes and model-based quotation."
      }
    ],
    faqs: [
      {
        question: "Can EVE Toner supply Konica Minolta TN622 compatible toner?",
        answer: "Yes. Send your required color, quantity and destination country for a model-based quote."
      },
      {
        question: "Do you support Konica Minolta developer unit sourcing?",
        answer: "Yes. Selected developer units and drum units are available for B2B inquiry."
      }
    ]
  },
  {
    slug: "copier-spare-parts-supplier",
    keyword: "copier spare parts supplier",
    title: "Copier Spare Parts Supplier | EVE Toner",
    description:
      "EVE Toner supplies copier spare parts, drum units, fuser units, developer units and maintenance parts for B2B buyers.",
    h1: "Copier Spare Parts Supplier for Dealers and Repair Shops",
    eyebrow: "Copier parts supply",
    intro:
      "EVE Toner helps importers, repair shops and office equipment dealers source copier spare parts and replacement consumables for service demand.",
    category: "Copier Spare Parts",
    relatedBrands: ["Ricoh", "Canon", "Xerox", "Konica Minolta", "Sharp", "Toshiba", "Kyocera"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["Drum unit", "Fuser unit", "Developer unit", "Roller", "Waste toner box"],
    sections: [
      {
        title: "Spare parts procurement by model",
        text:
          "Send copier model, part number, product photos or old part label to help the sales team confirm suitable replacement options."
      },
      {
        title: "For maintenance and resale channels",
        text:
          "Copier spare parts pages target buyers who need reliable repair supply, not only one-time retail purchase."
      }
    ],
    faqs: [
      {
        question: "What copier spare parts can EVE Toner quote?",
        answer: "We can quote selected drum units, fuser units, developer units, rollers, chips, waste toner boxes and related maintenance parts."
      },
      {
        question: "How should I request a copier parts quotation?",
        answer: "Send machine model, part code, quantity, destination country and product photos if available."
      }
    ]
  },
  {
    slug: "copier-drum-unit-supplier",
    keyword: "copier drum unit supplier",
    title: "Copier Drum Unit Supplier | EVE Toner",
    description:
      "Buy compatible copier drum units and imaging units for Xerox, Konica Minolta, Ricoh and other copier brands from EVE Toner.",
    h1: "Copier Drum Unit Supplier",
    eyebrow: "Drum unit sourcing",
    intro:
      "EVE Toner supplies selected compatible copier drum units and imaging units for repair shops, importers and parts distributors.",
    category: "Drum Unit",
    relatedBrands: ["Xerox", "Konica Minolta", "Ricoh", "Canon"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["013R00664", "013R00663", "DR-910", "CT350887"],
    sections: [
      {
        title: "Compatible drum unit matching",
        text:
          "Drum unit matching depends on machine series, color position and part code. Confirm these details before bulk order."
      },
      {
        title: "Inspection and packing focus",
        text:
          "Drum units need careful surface, gear and packing inspection to reduce transport and installation risk."
      }
    ],
    faqs: [
      {
        question: "Can EVE Toner quote drum units by part number?",
        answer: "Yes. Part number, machine series and color position help us confirm the suitable drum unit."
      },
      {
        question: "Are drum units suitable for bulk export?",
        answer: "Yes. Export packing can be discussed according to model, quantity and destination market."
      }
    ]
  },
  {
    slug: "copier-fuser-unit-supplier",
    keyword: "copier fuser unit supplier",
    title: "Copier Fuser Unit Supplier | EVE Toner",
    description:
      "Source compatible copier fuser units and fixing assemblies for repair, refurbishment and maintenance supply channels.",
    h1: "Copier Fuser Unit Supplier",
    eyebrow: "Fuser unit sourcing",
    intro:
      "EVE Toner supports B2B buyers sourcing copier fuser units and fixing assemblies for repair and maintenance projects.",
    category: "Fuser Unit",
    relatedBrands: ["Ricoh", "Canon", "Xerox", "Konica Minolta"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["Fixing assembly", "Fuser film", "Fuser unit", "110V / 220V versions"],
    sections: [
      {
        title: "Confirm voltage and machine version",
        text:
          "Fuser unit procurement should confirm copier model, voltage, region version and part number to avoid mismatch."
      },
      {
        title: "Repair channel supply",
        text:
          "These pages are written for service companies and parts dealers that need practical replacement supply."
      }
    ],
    faqs: [
      {
        question: "What details are needed before ordering fuser units?",
        answer: "Please provide machine model, part number, voltage, quantity and destination market."
      },
      {
        question: "Can EVE Toner help check fuser compatibility?",
        answer: "Yes. Our team can review the model and part code before quotation."
      }
    ]
  },
  {
    slug: "wholesale-copier-toner-cartridge",
    keyword: "wholesale copier toner cartridge",
    title: "Wholesale Copier Toner Cartridge | EVE Toner",
    description:
      "Wholesale compatible copier toner cartridges for importers, distributors and office equipment dealers with OEM/ODM support.",
    h1: "Wholesale Copier Toner Cartridge Supply",
    eyebrow: "Wholesale toner",
    intro:
      "EVE Toner supplies compatible copier toner cartridges for wholesale buyers that need model-based quotation, export packing and stable repeat supply.",
    category: "Toner Cartridge",
    relatedBrands: ["Ricoh", "Canon", "Xerox", "Konica Minolta", "Sharp", "Toshiba", "Kyocera"],
    buyerTypes: sharedBuyerTypes,
    modelExamples: ["Toner cartridge", "CMYK set", "Black toner", "Color copier toner"],
    sections: [
      {
        title: "Built for wholesale procurement",
        text:
          "This page targets buyers searching for compatible copier toner suppliers, not retail cartridge purchases."
      },
      {
        title: "What to send for quotation",
        text:
          "Share brand, model list, color, quantity, packaging requirement and destination country."
      }
    ],
    faqs: [
      {
        question: "Can EVE Toner support mixed model wholesale orders?",
        answer: "Yes. Send your model list and target quantity so we can check availability and packing options."
      },
      {
        question: "Do you offer OEM or private label packaging?",
        answer: "OEM/ODM packaging can be discussed for qualified B2B orders."
      }
    ]
  }
];

export function findSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
