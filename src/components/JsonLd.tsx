interface FAQItem {
  question: string;
  answer: string;
}

const ORGANIZATION_ID = "https://cognifica.ai/#organization";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Cognifica App",
    url: "https://cognifica.ai",
    logo: "https://cognifica.ai/og-image.png",
    description:
      "Employee Mental Health Hub providing anonymous assessments, digital support, and optional professional access for the modern workforce.",
    parentOrganization: {
      "@type": "Organization",
      name: "Kronos Group",
      url: "https://kronoshealth.co",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 914 705 6830",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: ["https://kronoshealth.co"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const WEBSITE_ID = "https://cognifica.ai/#website";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Cognifica App",
    url: "https://cognifica.ai",
    description:
      "Employee Mental Health Hub. Trusted by employees. Safe for employers.",
    publisher: { "@id": ORGANIZATION_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const SOFTWARE_APP_ID = "https://cognifica.ai/#softwareapplication";

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_APP_ID,
    name: "Cognifica App",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Workplace mental health platform with PHQ-9, GAD-7, PSQI, DAST, AUDIT, and PCL-5 assessments, cognitive remediation, and crisis support.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for enterprise pricing",
    },
    featureList: [
      "Anonymous mental health assessments",
      "PHQ-9 depression screening",
      "GAD-7 anxiety assessment",
      "PSQI sleep quality index",
      "AUDIT alcohol screening",
      "DAST substance use screening",
      "PCL-5 PTSD assessment",
      "Computerized cognitive remediation",
      "24/7 crisis support",
      "Licensed mental health professional access",
      "HIPAA compliant",
      "Aggregate employer dashboard",
    ],
    provider: { "@id": ORGANIZATION_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ questions }: { questions: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url?: string }[];
}) {
  const baseUrl = "https://cognifica.ai";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url ?? baseUrl,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Cognifica App",
      url: "https://cognifica.ai",
    },
    areaServed: "United States",
    serviceType: "Mental Health Software",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
