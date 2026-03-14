import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cognifica AI Privacy Policy. Learn how we protect your personal information and maintain HIPAA compliance for employee mental health data.",
  alternates: {
    canonical: "https://cognifica.ai/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy" }]} />

      <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Privacy Policy</li>
            </ol>
          </nav>

          <article className="bg-[#161616] p-8 sm:p-12 border border-white/5">
            <header className="mb-8 pb-8 border-b border-white/10">
              <h1 className="font-heading text-3xl sm:text-4xl text-white mb-4">
                Privacy Policy
              </h1>
              <p className="font-body text-sm text-white/50">
                Last updated: March 14, 2026
              </p>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Introduction
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                  Cognifica AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our
                  Employee Mental Health Hub platform.
                </p>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  We are HIPAA compliant and maintain the highest standards for
                  protecting Protected Health Information (PHI).
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Information We Collect
                </h2>
                <h3 className="font-heading text-base text-white mb-2">
                  From Employees
                </h3>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light mb-4">
                  <li>Assessment responses (PHQ 9, GAD 7, PSQI, AUDIT, DAST, PCL 5)</li>
                  <li>Usage data and engagement metrics</li>
                  <li>Optional messages to mental health professionals</li>
                </ul>
                <h3 className="font-heading text-base text-white mb-2">
                  From Employers
                </h3>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>Company name and contact information</li>
                  <li>Employee roster (for platform access only)</li>
                  <li>Billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>Provide personalized mental health support and resources</li>
                  <li>Generate aggregate, de identified workforce insights for employers</li>
                  <li>Facilitate crisis intervention when necessary</li>
                  <li>Improve our platform and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Employee Privacy Protections
                </h2>
                <div className="bg-[#0A0A0A] p-6 mb-4 border border-white/10">
                  <p className="font-body text-sm text-white font-bold mb-2">
                    Your employer will NEVER see:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-body text-sm text-white/60 font-light">
                    <li>Your individual assessment scores</li>
                    <li>Your identity linked to any data</li>
                    <li>Your messages or conversations</li>
                    <li>Whether you use the platform at all</li>
                  </ul>
                </div>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  Employers receive only aggregate, de identified data showing
                  workforce trends. No individual level data is ever shared.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Data Security
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                  We implement industry standard security measures including:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>AES 256 encryption at rest and in transit</li>
                  <li>HIPAA compliant infrastructure</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and audit logging</li>
                  <li>Secure data centers with SOC 2 compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Crisis Situations
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  If you indicate immediate risk of harm to yourself or others,
                  we may temporarily pause anonymity solely to connect you with
                  emergency crisis support. This is the only circumstance under
                  which your identity may be disclosed, and it is done to
                  protect your safety.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Your Rights
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-body text-sm text-white/60 font-light">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of non essential data collection</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg text-white mb-4">
                  Contact Us
                </h2>
                <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                  For privacy related inquiries, contact us at:
                </p>
                <p className="font-body text-sm text-white mt-2">
                  privacy@cognifica.ai
                  <br />
                  (914) 705 6830
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
