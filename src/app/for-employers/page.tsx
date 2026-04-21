/* |UXUIDC| ForEmployersPage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  NumberedStep,
  Reveal,
  AggregateOnlyBadge,
  ConsentCommitments,
} from "@/components/ui";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "CogAI Workforce for employers",
  description:
    "Proactive employee mental health screening. Seat based pricing. 90 day pilot. The employer never sees an individual score. Validated instruments. Aggregate only reporting.",
  alternates: { canonical: "https://www.cognifica.app/for-employers" },
  openGraph: {
    title: "CogAI Workforce for employers | Cognifica",
    description:
      "Proactive employee mental health screening. The employer never sees an individual score.",
    url: "https://www.cognifica.app/for-employers",
  },
};

const problemBlocks = [
  {
    title: "The visibility problem",
    body: "Your EAP runs at three to six percent utilization. You do not know who is struggling until they quit, or do not.",
  },
  {
    title: "The privacy dilemma",
    body: "Legally, you cannot see the data that would tell you. So you stop asking. And the problem goes underground.",
  },
  {
    title: "The silence problem",
    body: "Employees are embarrassed to raise mental health concerns to HR. Even when the program exists, they do not use it.",
  },
];

const views = [
  {
    label: "Employee view",
    title: "Monthly check in, eight minutes, always private",
    body: "The employee owns their score. Nothing about that record is reconstructable from the employer side.",
  },
  {
    label: "Manager view",
    title: "Aggregate only, department level trends",
    body: "Managers see department level signal, subject to a minimum cohort floor. No individual reconstruction.",
  },
  {
    label: "Executive view",
    title: "Organization R-Score and engagement",
    body: "Leadership sees organization level R-Score, participation, and trend. Same aggregate only rules apply.",
  },
];

const cadenceOptions = ["Quarterly", "Monthly", "Weekly", "Custom"];

const pricingTiers = [
  { tier: "XS", size: "Up to 25 employees", note: "Small practices, micro teams" },
  { tier: "SM", size: "Up to 150 employees", note: "Schools, nonprofits, small firms" },
  { tier: "MD", size: "Up to 355 employees", note: "Mid sized organizations" },
  { tier: "LG", size: "2,200 or more employees", note: "Enterprise and agencies" },
];

const faqs = [
  {
    question: "Can employers see individual employee data or identities?",
    answer:
      "No. The employer tenant never receives individual scores or identities. Aggregate reporting is subject to a minimum cohort floor. Individual level data does not leave the clinical boundary without explicit employee consent in a clinical context.",
  },
  {
    question: "What if we do not want to see employee results?",
    answer:
      "Employers can opt to not see any data at all, including aggregate reports. Some tenants prefer this posture, sponsoring the benefit without receiving population level reporting. The architecture supports it.",
  },
  {
    question: "What happens if an employee reports self harm or harm to others?",
    answer:
      "Crisis escalation runs through the Cognifica clinical team, not HR. A designated crisis counselor is engaged, LiveChat is available 24 by 7, a warm handoff to 988 is available, and a safety check in is scheduled at 24 to 48 hours.",
  },
  {
    question: "Are we responsible if an employee discloses substance use?",
    answer:
      "The employer does not see the disclosure. Substance use flags from AUDIT or DAST-10 stay inside the clinical boundary and drive clinical follow up, not HR follow up.",
  },
  {
    question: "Does this create a duty to act for HR or managers?",
    answer:
      "No, because HR and managers never see the underlying signal. Department aggregate trends do not create a duty to act on a specific employee because no specific employee is identified.",
  },
  {
    question: "What data do employers receive?",
    answer:
      "Aggregate organization and department level R-Score trends, participation metrics, and engagement metrics, subject to the minimum cohort floor. No individual scores. No identities. No therapy notes.",
  },
  {
    question: "Is this a replacement for our EAP?",
    answer:
      "Not by default. CogAI Workforce sits alongside the EAP and surfaces the employees who need care, routing them to care. Tenants that want to consolidate can use it as an EAP replacement in combination with the Cognifica clinical team.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a demo from this page. A product lead walks you through the employee view, the manager view, and the consent architecture. If the fit is right, a 90-day pilot follows with a Day-35 board ready dashboard.",
  },
  {
    question: "My company is too small for department divisions. Can we still use it?",
    answer:
      "Yes. At smaller headcounts, aggregate reporting is produced at the organization level only, still under the minimum cohort floor. Tenants that want to proceed without any aggregate reporting can use the opt out clause.",
  },
];

export default function ForEmployersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "For employers", url: "https://www.cognifica.app/for-employers" }]}
      />
      <ServiceSchema
        name="CogAI Workforce"
        description="Validated mental health screening and risk stratification for employers. Aggregate only reporting. The employer never sees an individual score."
        url="https://www.cognifica.app/for-employers"
      />
      <FAQSchema questions={faqs} />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>CogAI Workforce</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,88px)] leading-[1.02] text-white mt-6">
            Proactive. Easy. Measurable. Without violating privacy.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-2xl">
            One in six of your employees is carrying moderate to severe anxiety
            right now. Your EAP will not find them. Your engagement survey will
            not find them. CogAI Workforce will, and will route them to care,
            without ever handing you a single individual score.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ArrowLink href="#demo" variant="solid">
              Request a demo
            </ArrowLink>
            <ArrowLink href="/privacy" variant="ghost">
              Read the consent architecture
            </ArrowLink>
            <AggregateOnlyBadge className="ml-1" />
          </div>
        </div>
      </PageContainer>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="problem-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="The problem"
            title="Three things every benefits leader already knows"
            as="h2"
          />
          <div
            id="problem-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {problemBlocks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="border border-white/10 p-8 h-full flex flex-col">
                  <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl text-white mt-3">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-white/10" aria-labelledby="how-heading">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>How it works</Eyebrow>
              <h2
                id="how-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Three views. One boundary.
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                Employee, manager, executive. The scope changes. The rules do
                not. In seeded tenants, completion runs above 90 percent.
              </p>
              <p className="mt-3 font-body text-xs text-white/40 font-light italic">
                Published as observed in seeded tenants, not a guarantee.
              </p>
              <div className="mt-8">
                <ArrowLink href="/how-it-works" variant="ghost">
                  See the mechanics
                </ArrowLink>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {views.map((v, i) => (
                  <li key={v.label}>
                    <NumberedStep index={i + 1} title={v.title}>
                      <p className="font-nav text-[10px] tracking-widest uppercase text-[#E6A91A] mb-2">
                        {v.label}
                      </p>
                      {v.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40">
                  Cadence
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cadenceOptions.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center border border-white/15 px-3 py-1 font-body text-xs text-white/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="privacy-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Privacy architecture</Eyebrow>
              <h2
                id="privacy-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.04] text-white mt-4"
              >
                The employer never sees an individual score.
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
                These three lines live in the contract. They are not a feature
                in a settings panel. They are a boundary the product
                architecture enforces.
              </p>
              <ul className="mt-8 space-y-3 font-body text-sm text-white/70 font-light">
                <li className="flex gap-3">
                  <span className="text-[#E6A91A]" aria-hidden="true">→</span>
                  Consent captured per user, revocable at any time, timestamped
                  in the record.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#E6A91A]" aria-hidden="true">→</span>
                  HIPAA aligned posture. BAA available on request.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#E6A91A]" aria-hidden="true">→</span>
                  Crisis escalation runs through the Cognifica clinical team,
                  not HR.
                </li>
              </ul>
              <div className="mt-8">
                <ArrowLink href="/privacy" variant="ghost">
                  Full privacy architecture
                </ArrowLink>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ConsentCommitments />
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="pricing-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Seat based. Four tiers."
            lede="Per-seat pricing is set with the client at the start of the pilot. Tier structure is fixed. The dollar figure is in conversation."
            as="h2"
          />
          <div id="pricing-heading" className="mt-12 border-t border-white/10">
            <table className="w-full text-left" aria-label="Workforce pricing tiers">
              <thead className="sr-only">
                <tr>
                  <th>Tier</th>
                  <th>Headcount</th>
                  <th>Typical fit</th>
                  <th>Per seat per month</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((t) => (
                  <tr key={t.tier} className="border-b border-white/10">
                    <td className="py-6 pr-4 font-heading text-3xl sm:text-4xl text-[#E6A91A] align-top">
                      {t.tier}
                    </td>
                    <td className="py-6 pr-4 font-body text-base text-white font-light align-top">
                      {t.size}
                    </td>
                    <td className="py-6 pr-4 font-body text-sm text-white/60 font-light align-top hidden md:table-cell">
                      {t.note}
                    </td>
                    <td className="py-6 font-nav text-xs tracking-widest uppercase text-white/40 text-right align-top">
                      $TBD / seat / month
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-body text-xs text-white/40 font-light italic">
            Pricing is confirmed during the pilot scoping call.
          </p>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="pilot-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>90-day pilot</Eyebrow>
              <h2
                id="pilot-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                One full cycle. Walk away clause.
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
                Ninety days. One full measurement cycle. A Day-35 decision
                meeting with a board ready dashboard. A walk away clause with
                no contract pressure. If the signal is not there, you stop.
              </p>
            </div>
            <ul className="space-y-0" role="list">
              <li>
                <NumberedStep index={1} title="Scope">
                  Configuration, consent capture, rollout to a defined cohort.
                </NumberedStep>
              </li>
              <li>
                <NumberedStep index={2} title="Duration">
                  90 days, one full measurement cycle.
                </NumberedStep>
              </li>
              <li>
                <NumberedStep index={3} title="Day 35 decision">
                  A board ready dashboard. Continue, adjust, or walk away.
                </NumberedStep>
              </li>
              <li>
                <NumberedStep index={4} title="Walk away clause">
                  No contract pressure. The clause is written to be used.
                </NumberedStep>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <ArrowLink href="/pilot" variant="ghost">
              Compare the three pilot shapes
            </ArrowLink>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="faq-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading eyebrow="FAQ" title="What we are usually asked" as="h2" />
          <div id="faq-heading" className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-body text-base sm:text-lg text-white font-light">
                    {item.question}
                  </h3>
                  <span className="font-nav text-xs tracking-widest uppercase text-[#E6A91A] shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 font-body text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        id="demo"
        className="border-t border-white/10 bg-[#E6A91A]"
        aria-labelledby="demo-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]/70">
                Request a demo
              </p>
              <h2
                id="demo-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Show me what this looks like in a real workforce.
              </h2>
              <p className="mt-6 font-body text-base text-[#0A0A0A]/80 font-light leading-relaxed">
                A product lead walks you through the three views, the consent
                architecture, and a representative dashboard. Forty-five
                minutes. No sales cadence after.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-[#0A0A0A] font-light">
                <li>Live product walkthrough</li>
                <li>Consent architecture explained</li>
                <li>Pilot scoping, if the fit is right</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="tel:+19147056830"
                  className="font-nav text-xs tracking-widest uppercase text-[#0A0A0A] border-b border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors"
                >
                  Or call (914) 705 6830
                </Link>
              </div>
            </div>
            <div>
              <DemoRequestForm />
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
