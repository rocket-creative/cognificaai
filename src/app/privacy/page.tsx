/* |UXUIDC| PrivacyArchitecturePage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ConsentCommitments,
  ArrowLink,
  Reveal,
  NumberedStep,
  AggregateOnlyBadge,
} from "@/components/ui";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy architecture",
  description:
    "Consent first. Architecture, not policy. The employer never sees an individual score. Three contractual commitments, plain language, and the Cognifica AI Mental Health Hub consent document.",
  alternates: { canonical: "https://www.cognifica.app/privacy" },
  openGraph: {
    title: "Privacy architecture | Cognifica",
    description:
      "Consent first. The employer never sees an individual score. Architecture, not policy.",
    url: "https://www.cognifica.app/privacy",
  },
};

const consentPostures = [
  {
    label: "Employer sponsored consent",
    body: "Consent is captured per employee, revocable, and timestamped. Employer receives aggregate only reporting under a minimum cohort floor. No individual score is returned, ever. Crisis escalation runs through the Cognifica clinical team, not HR.",
  },
  {
    label: "Payer sponsored consent",
    body: "Member consent is captured under the plan relationship. Aggregate and HEDIS measures flow to the plan on a defined cadence. Member level records remain in the clinical entity under BAA. Identity does not flow to the plan without explicit member consent.",
  },
];

const hipaaPosture = [
  {
    title: "BAA on request",
    body: "Cognifica signs a Business Associate Agreement with every tenant that requires one. The clinical entity holds PHI.",
  },
  {
    title: "HIPAA aligned infrastructure",
    body: "Encryption at rest and in transit. Role scoped access. Audit logging at the clinical boundary. Scoped identity resolution limited to the Medical Provider role.",
  },
  {
    title: "No PHI in marketing tooling",
    body: "Marketing analytics never touch PHI. Cookie consent is honored before any non essential tooling runs. Global Privacy Control is respected.",
  },
];

const dataLifecycle = [
  {
    title: "Consent captured up front",
    body: "Before a first check-in, the user is walked through what is collected, who sees what, and how to revoke. The Cognifica AI Mental Health Hub consent document is the artifact that governs the relationship.",
  },
  {
    title: "Revocable at any time",
    body: "Consent can be revoked from the user portal. The revocation is timestamped. Future check-ins do not run. Past records are retained under the retention policy, or deleted on request.",
  },
  {
    title: "Retention under a stated policy",
    body: "Clinical records are retained under the retention policy applicable to the clinical entity. Non clinical usage data is retained for the minimum period needed for platform operation.",
  },
  {
    title: "Export on request",
    body: "Members and employees may export their own data in a portable format. The request runs through the clinical entity and is fulfilled within the timeframe the jurisdiction requires.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Privacy architecture", url: "https://www.cognifica.app/privacy" }]}
      />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>Privacy architecture</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,80px)] leading-[1.05] text-white mt-6">
            Consent first. Architecture, not policy.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            The employer never sees an individual score. That is not a feature
            toggle. That is how the system is built. The rest of this page
            explains the architecture that enforces it and the consent document
            that governs it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <AggregateOnlyBadge label="Aggregate only" />
            <span className="font-nav text-[10px] tracking-widest uppercase text-white/40">
              Minimum cohort floor enforced
            </span>
          </div>
        </div>
      </PageContainer>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="commitments-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 01</Eyebrow>
              <h2
                id="commitments-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Three contractual commitments
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                These three lines live in the contract. They are not a feature
                in a settings panel. They are a boundary that the product
                architecture enforces.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ConsentCommitments />
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="consent-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Section 02"
            title="Cognifica AI Mental Health Hub"
            lede="The branded name of the consent document, surfaced on both the workforce tenant and the clinical tenant. It is the same artifact whichever product applies to you."
            as="h2"
          />
          <div
            id="consent-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {consentPostures.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <article className="border border-white/10 p-8 h-full">
                  <p className="font-nav text-[10px] tracking-widest uppercase text-[#E6A91A]">
                    {p.label}
                  </p>
                  <p className="mt-4 font-body text-sm sm:text-base text-white/80 font-light leading-relaxed">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-body text-sm text-white/60 font-light italic">
            Consent document text is available on request while the
            self-serve download is in production.
          </p>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="hipaa-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 03</Eyebrow>
              <h2
                id="hipaa-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                HIPAA posture
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                The clinical entity holds PHI under BAA. Aggregate measures
                flow to the tenant on a defined cadence. The scoped identity
                resolution required to run a clinical workflow is restricted
                to the Medical Provider role.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {hipaaPosture.map((h, i) => (
                  <li key={h.title}>
                    <NumberedStep index={i + 1} title={h.title}>
                      {h.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="crisis-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 04</Eyebrow>
              <h2
                id="crisis-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Crisis escalation
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                Anonymity may be paused only to connect urgent clinical or
                crisis support. It is the single exception to the identity
                boundary. The escalation runs through the Cognifica clinical
                team, not through the employer or the plan.
              </p>
              <div className="mt-8 p-6 border border-[#E6A91A]/30 bg-[#E6A91A]/5">
                <p className="font-nav text-[10px] tracking-widest uppercase text-[#E6A91A] mb-3">
                  In crisis right now
                </p>
                <ul className="space-y-2 font-body text-sm text-white font-light" role="list">
                  <li>
                    Call{" "}
                    <a href="tel:988" className="text-[#E6A91A] hover:underline">
                      988
                    </a>{" "}
                    for the Suicide and Crisis Lifeline
                  </li>
                  <li>
                    Text{" "}
                    <a href="sms:741741" className="text-[#E6A91A] hover:underline">
                      741741
                    </a>{" "}
                    for the Crisis Text Line
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                <li>
                  <NumberedStep index={1} title="Automated in-app escalation">
                    Crisis flags from a check-in trigger an automated
                    escalation to the designated crisis counselor.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={2} title="LiveChat 24 by 7">
                    A secure messaging channel sits in front of the clinical
                    team at all hours.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={3} title="Warm handoff to 988">
                    When the situation calls for it, the counselor facilitates
                    a warm handoff to the 988 Suicide and Crisis Lifeline.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={4} title="Safety check in at 24 to 48 hours">
                    A follow up check-in is scheduled. The record stays with
                    the clinical team.
                  </NumberedStep>
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="ai-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Section 05"
            title="AI is non-diagnostic"
            lede="The system flags and stratifies. It does not diagnose. It does not decide. Clinical decisions are made by clinicians and initiated by humans."
            as="h2"
          />
          <div id="ai-heading" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Non-diagnostic", "Non-emergency", "Human-initiated clinical decisions only", "Transparent to the user"].map(
              (line, i) => (
                <Reveal key={line} delay={i * 60}>
                  <div className="border border-white/10 p-6 h-full">
                    <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 font-body text-base text-white font-light leading-snug">
                      {line}
                    </p>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="lifecycle-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Section 06"
            title="Data lifecycle"
            lede="Capture, revoke, retain, export. Each step has a defined rule. Each rule is auditable."
            as="h2"
          />
          <ul
            id="lifecycle-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            {dataLifecycle.map((d, i) => (
              <li key={d.title} className="md:px-6">
                <NumberedStep index={i + 1} title={d.title}>
                  {d.body}
                </NumberedStep>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="border-t border-white/10 bg-[#111111]" aria-label="Next steps">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Read the detail</Eyebrow>
              <h2 className="font-heading text-[clamp(26px,4vw,48px)] leading-[1.1] text-white mt-4">
                Privacy policy
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                The legal privacy policy is the long form document that
                accompanies this architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/privacy-policy"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-6 py-3 text-xs tracking-widest uppercase font-light hover:border-[#E6A91A] hover:text-[#E6A91A] hover:gap-5 transition-all"
              >
                Read the policy
                <span aria-hidden="true">→</span>
              </Link>
              <ArrowLink href="mailto:privacy@cognifica.app" variant="solid">
                Talk to our counsel
              </ArrowLink>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
