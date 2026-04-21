/* |UXUIDC| PrivacyPolicyPage */
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Cognifica privacy policy. Collection, use, and retention of personal information. HIPAA aligned posture. Consent architecture.",
  alternates: {
    canonical: "https://www.cognifica.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy policy",
    description:
      "Cognifica privacy policy. Collection, use, and retention of personal information.",
    url: "https://www.cognifica.app/privacy-policy",
    siteName: "Cognifica",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognifica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy policy",
    description: "Cognifica privacy policy.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Privacy policy", url: "https://www.cognifica.app/privacy-policy" }]}
      />

      <div className="min-h-screen bg-[#0A0A0A] pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy architecture
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Privacy policy</li>
            </ol>
          </nav>

          <article className="bg-[#161616] p-8 sm:p-12 border border-white/5">
            <header className="mb-8 pb-8 border-b border-white/10">
              <h1 className="font-heading text-3xl sm:text-4xl text-white mb-4">
                Privacy policy
              </h1>
              <p className="font-body text-sm text-white/50">
                Last updated: April 20, 2026
              </p>
              <p className="mt-4 font-body text-sm text-white/70 font-light leading-relaxed">
                This is the legal privacy policy. For the plain language
                explanation of the consent architecture, see{" "}
                <Link href="/privacy" className="text-[#E6A91A] hover:underline">
                  the privacy architecture page
                </Link>
                .
              </p>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Introduction
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed mb-4">
                  Cognifica (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                  your privacy. This policy explains how we collect, use,
                  disclose, and safeguard information when you use the Cognifica
                  screening and risk stratification products, including CogAI
                  Workforce and CogAI Medical.
                </p>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  The posture is HIPAA aligned. A Business Associate Agreement
                  is available on request.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Information we collect
                </h2>
                <h3 className="font-heading text-base text-white mb-2">
                  From members and employees
                </h3>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light mb-4">
                  <li>Responses to validated instruments: PHQ-9, GAD-7, PCL-5, DAST-10, AUDIT, PSQI, Work Wellness</li>
                  <li>Usage data and engagement metrics</li>
                  <li>Optional messages to the clinical team through LiveChat</li>
                </ul>
                <h3 className="font-heading text-base text-white mb-2">
                  From tenants (employers, clinics, insurers)
                </h3>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>Tenant contact information</li>
                  <li>Roster for platform access only, never for score linkage</li>
                  <li>Billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  How we use information
                </h2>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>Provide validated screening, R-Score stratification, and routed clinical support</li>
                  <li>Generate aggregate, de-identified tenant insights where consent supports it</li>
                  <li>Facilitate crisis intervention through the Cognifica clinical team</li>
                  <li>Improve the platform and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  The employer never sees
                </h2>
                <div className="bg-[#0A0A0A] p-6 mb-4 border border-[#E6A91A]/30">
                  <p className="font-body text-sm text-white font-bold mb-2">
                    The employer tenant will never receive:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-body text-sm text-white/70 font-light">
                    <li>Any individual score</li>
                    <li>Any identity linked to any data</li>
                    <li>Any therapy notes or messages</li>
                    <li>Any signal that a specific employee used the platform</li>
                  </ul>
                </div>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  Employers receive only aggregate, de-identified data subject
                  to a minimum cohort floor. No individual level data leaves the
                  clinical boundary.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Data security
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed mb-4">
                  Security measures include:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>AES 256 encryption at rest and in transit</li>
                  <li>HIPAA aligned infrastructure, BAA on request</li>
                  <li>Access controls and audit logging at the clinical boundary</li>
                  <li>Scoped identity resolution limited to the Medical Provider role</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Crisis situations
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  If a check-in response indicates immediate risk of harm to
                  self or to others, anonymity may be paused solely to connect
                  urgent clinical or crisis support. This is the only
                  circumstance under which identity is disclosed, and the
                  escalation runs through the Cognifica clinical team.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Your rights
                </h2>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/70 font-light">
                  <li>Access personal data held about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of personal data</li>
                  <li>Revoke consent at any time; the change is timestamped in the record</li>
                  <li>Receive a copy of personal data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Contact
                </h2>
                <p className="font-body text-sm text-white/70 font-light leading-relaxed">
                  For privacy inquiries, contact{" "}
                  <a href="mailto:privacy@cognifica.app" className="text-[#E6A91A] hover:underline">
                    privacy@cognifica.app
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+19147056830" className="text-[#E6A91A] hover:underline">
                    (914) 705 6830
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
