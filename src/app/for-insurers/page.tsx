/* |UXUIDC| ForInsurersPage */
import type { Metadata } from "next";
import Link from "next/link";
import {
  PageContainer,
  Eyebrow,
  SectionHeading,
  ArrowLink,
  NumberedStep,
  Reveal,
} from "@/components/ui";
import { PayerForm } from "@/components/PayerForm";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "CogAI Medical for insurers and workers compensation",
  description:
    "Small insurance plans. Validated depression and anxiety screening. HEDIS movement. Per-patient-per-month pricing. Work-related injury recovery support.",
  alternates: { canonical: "https://www.cognifica.app/for-insurers" },
  openGraph: {
    title: "CogAI Medical for insurers | Cognifica",
    description:
      "Validated screening and risk stratification for small insurance plans. HEDIS movement. Per-patient-per-month pricing.",
    url: "https://www.cognifica.app/for-insurers",
  },
};

const outcomes = [
  {
    label: "HEDIS depression measure movement",
    body: "Follow up after positive screen. Response at six and twelve weeks. Remission tracking. The metrics CMS and NCQA already expect.",
  },
  {
    label: "Reduced ER use linked to mental health",
    body: "Early identification of high risk members supports proactive outreach. The downstream pattern is fewer crisis ER visits tied to anxiety, depression, and substance use.",
  },
  {
    label: "Reduced inpatient psychiatric admissions",
    body: "Stratified panels let care management engage the members whose trend lines are moving in the wrong direction, before the event that lands them inpatient.",
  },
  {
    label: "Lower overall medical spend",
    body: "Members with untreated behavioral health conditions consume more medical spend elsewhere. Identifying and engaging them reduces that downstream load.",
  },
];

const pricingLines = [
  {
    head: "Per patient per month",
    body: "Pricing is expressed per patient per month for the panel in scope. The rate is set during the pilot scoping conversation.",
  },
  {
    head: "Panel scope set up front",
    body: "The plan defines the denominator. The pilot runs at that scope. Expansion happens on renewal, not mid pilot.",
  },
  {
    head: "No individual level data flows to the plan",
    body: "Aggregate HEDIS movement and panel level trend report to the plan. Individual member records remain with the clinical entity under BAA.",
  },
];

const objections = [
  {
    q: "Our care management team already does this.",
    a: "Care management typically engages members after a claim signals a problem. CogAI Medical engages before. Validated instruments on a monthly cadence surface members whose trajectories are shifting, and deliver them into care management with a composite score and a visible trend.",
  },
  {
    q: "We already have a behavioral health vendor.",
    a: "Behavioral health vendors typically deliver care. CogAI Medical identifies. The two sit together, not on top of each other. For plans without a clinical delivery arm, Cognifica Health is available for delivery under BAA.",
  },
  {
    q: "We are not set up for a new clinical workflow.",
    a: "The only role that resolves identity at the individual level is the Medical Provider role. Plan-side users see aggregate and HEDIS movement. The clinical workflow runs in the Cognifica boundary.",
  },
  {
    q: "What about downside pressure on premiums?",
    a: "Per patient per month pricing is set against projected claim offset. For plans with documented ER and inpatient pressure on behavioral health, the pilot is structured to surface the offset inside six months.",
  },
  {
    q: "How do you handle privacy and HIPAA?",
    a: "Cognifica signs a BAA with every plan. Member consent is captured up front, revocable, and timestamped. Aggregate and HEDIS reporting flow to the plan. Individual identity does not, absent explicit member consent in a clinical context.",
  },
  {
    q: "Why would a small plan buy this instead of a larger vendor?",
    a: "Small plans need a real operator on the line, not a sales team. The clinical team is on the pilot call. The founder is on the pilot call. The rollout is fast, and the commitment is measured on one HEDIS cycle.",
  },
];

const useCases = [
  {
    title: "Medicare Advantage plans",
    body: "Depression and anxiety screening on a monthly cadence. HEDIS movement across the panel. Identification of members whose trajectories suggest rising utilization.",
  },
  {
    title: "Regional commercial plans",
    body: "Member level deterioration detection for plans that want an early warning system on behavioral health without building one.",
  },
  {
    title: "Workers compensation carriers",
    body: "Behavioral health screening for members recovering from a work-related injury. Anxiety, depression, PTSD, pain adjacent mental health, and sleep instruments appropriate to recovery are run on a cadence.",
  },
  {
    title: "Self insured TPAs",
    body: "Third party administrators serving self insured employer books. The same per patient per month model applies to the administered population.",
  },
];

export default function ForInsurersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "For insurers", url: "https://www.cognifica.app/for-insurers" }]}
      />
      <ServiceSchema
        name="CogAI Medical for insurers"
        description="Validated mental health screening and risk stratification for small insurance plans. Per-patient-per-month pricing. HEDIS depression measure movement."
        url="https://www.cognifica.app/for-insurers"
      />
      <FAQSchema questions={objections.map((o) => ({ question: o.q, answer: o.a }))} />

      <PageContainer className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>CogAI Medical for insurers</Eyebrow>
          <h1 className="font-heading text-[clamp(32px,6vw,88px)] leading-[1.02] text-white mt-6">
            Move HEDIS. Before a member shows up in the ER.
          </h1>
          <p className="mt-8 font-body text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-2xl">
            Small and mid size plans use CogAI Medical to screen, stratify, and
            engage the members whose behavioral health trajectories are moving
            in the wrong direction. Validated instruments. Per-patient-per-month
            pricing. A real clinical operator on the pilot call.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ArrowLink href="#contact" variant="solid">
              Book a call
            </ArrowLink>
            <ArrowLink href="/how-it-works" variant="ghost">
              How the mechanics work
            </ArrowLink>
          </div>
        </div>
      </PageContainer>

      <section
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="outcomes-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="What this moves"
            title="Four outcomes the plan already tracks"
            lede="Outcome names, not numbers. Pilot targets are set against the plan's own baseline, not against a marketing figure."
            as="h2"
          />
          <div
            id="outcomes-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 70}>
                <article className="border border-white/10 p-8 h-full">
                  <p className="font-heading text-[10px] tracking-widest text-[#E6A91A]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl text-white mt-3">
                    {o.label}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                    {o.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-body text-xs text-white/40 font-light italic">
            Specific percentages are confirmed against the plan&apos;s own
            panel during pilot scoping.
          </p>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="usecases-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Who this is for"
            title="Plans with a defined behavioral health problem"
            as="h2"
          />
          <div id="usecases-heading" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 70}>
                <article className="border border-white/10 p-8 h-full">
                  <h3 className="font-heading text-xl sm:text-2xl text-white">
                    {u.title}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                    {u.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        id="workers-comp"
        className="border-t border-white/10 bg-[#111111]"
        aria-labelledby="wc-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Workers compensation</Eyebrow>
              <h2
                id="wc-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Recovery from a work related injury.
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
                Mental health complications are the dominant driver of prolonged
                recovery after a work related injury. Untreated anxiety,
                depression, PTSD, and sleep disturbance extend time off,
                increase reinjury risk, and inflate claim cost.
              </p>
              <p className="mt-4 font-body text-sm text-white/60 font-light italic">
                CogAI Medical is not a pain management tool. It surfaces the
                mental health signal that drives the extended recovery curve.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                <li>
                  <NumberedStep index={1} title="Screen at claim open">
                    Validated instruments administered shortly after the claim
                    opens. The baseline is set. The trend line has a start.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={2} title="Stratify by risk">
                    The member panel is sorted by R-Score and by instrument
                    flags. Claims with a rising trajectory are visible before
                    the claim runs long.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={3} title="Route to care">
                    Members above threshold are routed to the plan&apos;s
                    behavioral health benefit or to Cognifica Health under BAA.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={4} title="Track recovery">
                    Instruments run on a cadence through recovery. Response and
                    remission are visible to the clinical team, not to the
                    employer.
                  </NumberedStep>
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-white/10"
        aria-labelledby="pricing-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Pricing</Eyebrow>
              <h2
                id="pricing-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.1] text-white mt-4"
              >
                Per patient per month
              </h2>
              <p className="mt-6 font-body text-base text-white/75 font-light leading-relaxed">
                The rate is set during the pilot scoping call. Plan size, panel
                shape, and the instruments in scope drive the number.
              </p>
              <p className="mt-8 font-nav text-xs tracking-widest uppercase text-white/40">
                $TBD / patient / month
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {pricingLines.map((p, i) => (
                  <li key={p.head}>
                    <NumberedStep index={i + 1} title={p.head}>
                      {p.body}
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
        aria-labelledby="objections-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="What we are usually asked"
            title="Objections, answered"
            as="h2"
          />
          <div
            id="objections-heading"
            className="mt-12 divide-y divide-white/10 border-y border-white/10"
          >
            {objections.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-body text-base sm:text-lg text-white font-light">
                    {item.q}
                  </h3>
                  <span className="font-nav text-xs tracking-widest uppercase text-[#E6A91A] shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 font-body text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-3xl">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[#E6A91A]"
        aria-labelledby="contact-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]/70">
                Book a call
              </p>
              <h2
                id="contact-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Scope a pilot against your own panel.
              </h2>
              <p className="mt-6 font-body text-base text-[#0A0A0A]/80 font-light leading-relaxed">
                A clinical operator and the founder are on the call. We look at
                the panel shape, the HEDIS measures in scope, and the timeline.
                Forty-five minutes.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-[#0A0A0A] font-light">
                <li>Panel scoping</li>
                <li>HEDIS measures in scope</li>
                <li>Per patient per month proposal</li>
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
              <PayerForm />
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
