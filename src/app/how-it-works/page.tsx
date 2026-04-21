/* |UXUIDC| HowItWorksPage */
import type { Metadata } from "next";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  NumberedStep,
  Reveal,
} from "@/components/ui";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Validated instruments on a cadence. R-Score risk stratification. Three views: employee, manager, executive. Crisis protocol routed through the clinical team. AI is not diagnostic, and clinical decisions are always initiated by a human.",
  alternates: { canonical: "https://www.cognifica.app/how-it-works" },
  openGraph: {
    title: "How Cognifica works",
    description:
      "Validated instruments. R-Score stratification. A consent architecture that prevents employer reidentification.",
    url: "https://www.cognifica.app/how-it-works",
  },
};

const screeners = [
  {
    acronym: "PHQ-9",
    name: "Patient Health Questionnaire 9",
    measures: "Depression severity",
    note: "Validated across primary care, behavioral health, and workplace settings.",
  },
  {
    acronym: "GAD-7",
    name: "Generalized Anxiety Disorder 7",
    measures: "Anxiety severity",
    note: "Short, validated anxiety screener used widely across primary care.",
  },
  {
    acronym: "PCL-5",
    name: "PTSD Checklist for DSM 5",
    measures: "Trauma and posttraumatic stress",
    note: "Used for screening, severity, and response to treatment over time.",
  },
  {
    acronym: "DAST-10",
    name: "Drug Abuse Screening Test 10",
    measures: "Drug use",
    note: "Validated in clinical and general population screening.",
  },
  {
    acronym: "AUDIT",
    name: "Alcohol Use Disorders Identification Test",
    measures: "Alcohol use",
    note: "Developed by the World Health Organization. Validated across care settings.",
  },
  {
    acronym: "PSQI",
    name: "Pittsburgh Sleep Quality Index",
    measures: "Sleep quality",
    note: "Captures sleep duration, latency, disturbances, and daytime dysfunction.",
  },
  {
    acronym: "Work Wellness",
    name: "Workplace Wellbeing Index",
    measures: "Work related wellbeing",
    note: "Captures engagement, workload pressure, and psychological safety signals.",
  },
];

const views = [
  {
    label: "Employee",
    title: "Eight minute check in. Always private.",
    body: "The employee sees their own trends. Their score is theirs. Nobody at the employer can pull it, request it, or reconstruct it.",
  },
  {
    label: "Manager",
    title: "Aggregate only. Department level.",
    body: "The manager sees department level trends. No individual scores. No reconstruction. The aggregate only floor is a function of minimum cohort size, not a dashboard setting.",
  },
  {
    label: "Executive",
    title: "Organization R-Score and engagement.",
    body: "Leadership sees organization level R-Score, participation, and trend. The same aggregate only rules apply. Every view enforces the same boundary.",
  },
];

const cadenceOptions = [
  {
    label: "Quarterly",
    body: "Four measurement cycles per year. The lightest cadence. Used where cultural readiness is still building.",
  },
  {
    label: "Monthly",
    body: "Twelve cycles per year. Standard for workforce programs that want trend visibility without over surveying.",
  },
  {
    label: "Weekly",
    body: "Used in clinical delivery for high risk check ins and short cycle response measurement.",
  },
  {
    label: "Custom",
    body: "Configurable per tenant. Defaults are sane. Edge cases are supported.",
  },
];

const crisisSteps = [
  {
    title: "Automated in app escalation",
    body: "Crisis flags from a check in trigger an automated escalation to the designated crisis counselor in real time. No delay. No manual routing.",
  },
  {
    title: "LiveChat 24 by 7",
    body: "A secure messaging channel is available at all hours. On the clinician side, this is the messaging workbench routed at /secure-messaging. On the user side, it is LiveChat.",
  },
  {
    title: "Warm handoff to 988",
    body: "When the situation calls for it, the counselor facilitates a warm handoff to the 988 Suicide and Crisis Lifeline. Not a redirect. A warm handoff.",
  },
  {
    title: "Scheduled safety check in",
    body: "A follow up check in is scheduled at 24 to 48 hours. The record stays with the clinical team. Anonymity may be paused only to connect urgent clinical support.",
  },
];

const aiPostureLines = [
  "Not used for diagnosis",
  "Not for emergency response",
  "Clinical decisions are always initiated by a human",
  "Transparent to the user",
];

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "How it works", url: "https://www.cognifica.app/how-it-works" }]} />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,80px)] leading-[1.05] text-white mt-6">
            Validated instruments. Run on a cadence. Stratified by risk.
            Consented up front.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            One reference page. One set of mechanics. Every audience page sits
            on top of what is described here. The clinical boundary, the
            aggregate only floor, and the crisis protocol are the same
            whichever product you buy.
          </p>
        </div>
      </PageContainer>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="screeners-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Section 01"
            title="Seven validated screeners"
            lede="Clinical instruments with years of research behind them. Named. Scored. Tracked. No proprietary questionnaires stand in for them."
            as="h2"
          />
          <ul
            id="screeners-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            role="list"
          >
            {screeners.map((s, i) => (
              <li key={s.acronym}>
                <Reveal delay={i * 40}>
                  <article className="border border-white/10 p-6 sm:p-8 h-full flex flex-col">
                    <p className="font-heading text-2xl sm:text-3xl text-white">
                      {s.acronym}
                    </p>
                    <p className="mt-2 font-nav text-[10px] tracking-widest uppercase text-[#E6A91A]">
                      {s.measures}
                    </p>
                    <p className="mt-4 font-body text-sm text-white/70 font-light leading-relaxed">
                      {s.name}. {s.note}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="border-t border-white/10" aria-labelledby="rscore-heading">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 02</Eyebrow>
              <h2
                id="rscore-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                The R-Score
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                A single composite stratifier computed from weighted instrument
                scores. The weighting formula is not published. What the R-Score
                is for and who can see it are.
              </p>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Scale
                </p>
                <p className="font-body text-base text-white/80 font-light">
                  0.0 to 1.0. Lower is better.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Scope
                </p>
                <p className="font-body text-base text-white/80 font-light">
                  Individual, department, and organization. Individual scope is
                  visible only to the Medical Provider role. Department and
                  organization scope are available to the employer tenant on an
                  aggregate only basis.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Clinical thresholds pre wired
                </p>
                <p className="font-body text-base text-white/80 font-light">
                  PHQ-9 ≥ 15 · GAD-7 ≥ 15 · PCL-5 ≥ 50 · DAST-10 ≥ 6 · AUDIT ≥ 18.
                  Flags fire at the instrument layer before the R-Score
                  composite is computed. Every threshold is auditable.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="views-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Section 03"
            title="Three views, one boundary"
            lede="Every view sits on the same clinical boundary. What changes across views is scope, not the rules."
            as="h2"
          />
          <div id="views-heading" className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {views.map((v, i) => (
              <Reveal key={v.label} delay={i * 80}>
                <article className="border border-white/10 p-8 h-full">
                  <p className="font-nav text-[10px] tracking-widest uppercase text-[#E6A91A]">
                    {v.label}
                  </p>
                  <h3 className="font-heading text-2xl text-white mt-3">
                    {v.title}
                  </h3>
                  <p className="mt-4 font-body text-sm text-white/70 font-light leading-relaxed">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-white/10" aria-labelledby="cadence-heading">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 04</Eyebrow>
              <h2
                id="cadence-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Cadence
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                Pick a rhythm that matches the program. Change it later. The
                system does not assume one answer.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {cadenceOptions.map((c, i) => (
                  <li key={c.label}>
                    <NumberedStep index={i + 1} title={c.label}>
                      {c.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="scheduling-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Section 05"
            title="Scheduling, in three clicks"
            lede="Configuration. New Schedule. Save. Screens are pulled from the live tenant UI, not from a design deck."
            as="h2"
          />
          <ol
            id="scheduling-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                n: "01",
                t: "Configuration",
                b: "Open the Configuration panel from the admin console. Tenant scope is confirmed on the page header.",
              },
              {
                n: "02",
                t: "New Schedule",
                b: "Pick the instrument bundle, the audience group, and the cadence. Preview a dry run before commit.",
              },
              {
                n: "03",
                t: "Save",
                b: "The schedule goes live at the next cycle boundary. Anyone on the audience receives the check in on the chosen cadence.",
              },
            ].map((step, i) => (
              <li
                key={step.n}
                className={`border border-white/10 p-8 ${
                  i === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                  {step.n}
                </p>
                <h3 className="font-heading text-xl text-white mt-3">
                  {step.t}
                </h3>
                <p className="mt-3 font-body text-sm text-white/70 font-light leading-relaxed">
                  {step.b}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-body text-xs text-white/40 font-light italic">
            Screenshots from the live tenant UI land with the production
            launch. Until then, the three click flow above is the sequence.
          </p>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="crisis-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 06</Eyebrow>
              <h2
                id="crisis-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Crisis protocol
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                The escalation path runs through the Cognifica clinical team,
                not through HR and not through the employer. Anonymity may be
                paused only to connect urgent clinical or crisis support.
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
                {crisisSteps.map((s, i) => (
                  <li key={s.title}>
                    <NumberedStep index={i + 1} title={s.title}>
                      {s.body}
                    </NumberedStep>
                  </li>
                ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Section 07</Eyebrow>
              <h2
                id="ai-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                AI posture
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                The system flags and sorts. It does not diagnose. It does not
                decide. Clinicians decide. Users see what the system concluded
                and why.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {aiPostureLines.map((line, i) => (
                  <li
                    key={line}
                    className="flex items-baseline gap-6 border-t border-white/10 py-6"
                  >
                    <span className="font-heading text-[10px] tracking-widest text-[#E6A91A] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-lg sm:text-xl text-white font-light">
                      {line}.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-white/10" aria-label="Next steps">
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Try the sandbox</Eyebrow>
              <h2 className="font-heading text-[clamp(26px,4vw,48px)] leading-[1.1] text-white mt-4">
                See it running
              </h2>
              <p className="mt-6 font-body text-base text-white/70 font-light leading-relaxed">
                A live demo sandbox sits at cognifica.ai/demo. Click through a
                tenant. Run a check in. Look at the R-Score. Leave without
                leaving a record.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ArrowLink href="https://www.cognifica.ai/demo" variant="solid" external>
                Try the demo
              </ArrowLink>
              <ArrowLink href="/privacy" variant="ghost">
                Consent architecture
              </ArrowLink>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
