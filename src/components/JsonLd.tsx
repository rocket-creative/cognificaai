/* |UXUIDC| JsonLd */
interface FAQItem {
  question: string;
  answer: string;
}

const ORGANIZATION_ID = "https://www.cognifica.app/#organization";
const WEBSITE_ID = "https://www.cognifica.app/#website";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Cognifica",
    alternateName: ["CogAI Workforce", "CogAI Medical"],
    url: "https://www.cognifica.app",
    logo: "https://www.cognifica.app/og-image.png",
    description:
      "Validated mental health screening and risk stratification for employers, clinics, and insurers. Built by practicing clinicians on top of an active clinical practice.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 914 705 6830",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: ["https://www.cognifica.health"],
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
    "@id": WEBSITE_ID,
    name: "Cognifica",
    url: "https://www.cognifica.app",
    description:
      "Cognitive health, measured. Validated screening for employers, clinics, and insurers.",
    publisher: { "@id": ORGANIZATION_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const SOFTWARE_APP_ID = "https://www.cognifica.app/#softwareapplication";

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_APP_ID,
    name: "Cognifica",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Validated mental health screening and panel triage. PHQ-9, GAD-7, PCL-5, DAST-10, AUDIT, PSQI, and Work Wellness. HIPAA-aligned posture. The employer never sees an individual score.",
    featureList: [
      "PHQ-9 depression screening",
      "GAD-7 anxiety screening",
      "PCL-5 trauma screening",
      "DAST-10 drug use screening",
      "AUDIT alcohol use screening",
      "PSQI sleep screening",
      "Work Wellness screening",
      "R-Score risk stratification",
      "Panel triage for clinicians",
      "Aggregate-only employer dashboard",
      "Consent-first architecture",
      "HIPAA-aligned posture",
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
  const baseUrl = "https://www.cognifica.app";
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
    provider: { "@id": ORGANIZATION_ID },
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

export function MedicalOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Cognifica Health",
    url: "https://www.cognifica.health",
    description:
      "Active clinical practice of Dr. John Abrahams. Locations in Aquebogue and West Harrison, NY.",
    location: [
      {
        "@type": "Place",
        name: "Cognifica Health Aquebogue",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aquebogue",
          addressRegion: "NY",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Cognifica Health West Harrison",
        address: {
          "@type": "PostalAddress",
          addressLocality: "West Harrison",
          addressRegion: "NY",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
