interface FAQItem {
  question: string;
  answer: string;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cognifica AI",
    url: "https://cognifica.ai",
    logo: "https://cognifica.ai/cognifica-ai-logo.svg",
    description:
      "Employee Mental Health Hub providing anonymous assessments, digital support, and optional professional access for the modern workforce.",
    parentOrganization: {
      "@type": "Organization",
      name: "Kronos Health",
      url: "https://kronoshealth.co",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-914-705-6830",
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

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cognifica AI",
    url: "https://cognifica.ai",
    description:
      "Employee Mental Health Hub. Trusted by employees. Safe for employers.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cognifica.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cognifica AI",
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
    provider: {
      "@type": "Organization",
      name: "Cognifica AI",
      url: "https://cognifica.ai",
    },
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cognifica.ai",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.url ? { item: item.url } : {}),
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
      name: "Cognifica AI",
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
