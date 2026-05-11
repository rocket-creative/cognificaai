/* |UXUIDC| MedicalPage */
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
import { MedicalGroupForm } from "@/components/MedicalGroupForm";
import { PayerForm } from "@/components/PayerForm";
import { HeroVideo } from "@/components/HeroVideo";
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "COGAI Medical | Catching the spark before the fire.",
  description:
    "Population mental health for clinics and insurance plans. Monthly validated screeners. The R Score sorts the panel. The clinician acts. Per patient per month.",
  path: "/medical",
  ogDescription:
    "Proactive screening for every patient. Clinician routing for the ones who need a person next. Twelve month trend. Per patient per month.",
  keywords: [
    "COGAI Medical",
    "population mental health",
    "panel triage",
    "PHQ 9",
    "GAD 7",
    "PCL 5",
    "PSQI",
    "R Score",
    "HEDIS",
    "clinical screening",
    "behavioral health software",
  ],
});

const beliefs = [
  {
    n: "01",
    title: "Most mental health care is reactive. It should not be.",
    body: "Patients show up when they are already in crisis. Monthly population level screening catches the spark before it becomes a fire.",
  },
  {
    n: "02",
    title: "The screeners that define good psychiatric care already exist.",
    body: "PHQ 9. GAD 7. PCL 5. DAST 10. AUDIT. PSQI. Every clinician knows them. What did not exist was a panel view that ran them monthly across an entire population and handed a provider a twelve month trend before the visit started.",
  },
  {
    n: "03",
    title: "The clinician's time is the bottleneck.",
    body: "Screening done before the patient arrives. Thresholds pre wired. Panel sorts by R Score. Notes, referral log, and the weekly schedule cadence one click away. The twelve week high risk check in is templated.",
  },
  {
    n: "04",
    title: "Population health is not a dashboard. It is a workflow.",
    body: "Screen. Flag. Clinician acts. Secure messaging thread opens or referral fires. Next cycle measures whether anything changed. A dashboard reports. A workflow moves patients.",
  },
  {
    n: "05",
    title: "The same privacy architecture works across use cases.",
    body: "Consent per user, revocable. Identified access restricted to the Medical Provider role. AI non diagnostic and non emergency. The guardrails do not weaken when we move between use cases. They carry over.",
  },
];

const instruments = [
  { acronym: "PHQ 9", name: "Depression" },
  { acronym: "GAD 7", name: "Anxiety" },
  { acronym: "PCL 5", name: "Trauma" },
  { acronym: "DAST 10", name: "Drug use" },
  { acronym: "AUDIT", name: "Alcohol use" },
  { acronym: "PSQI", name: "Sleep" },
  { acronym: "WORK", name: "Work wellness" },
];

const consoleFeatures = [
  {
    title: "Panel sorted by R Score",
    body: "Composite wellness metric across all seven instruments. Zero to one, lower is better. The patient with the most urgent picture is row one. The trend line is visible without drilling in.",
  },
  {
    title: "Clinical thresholds pre wired",
    body: "PHQ 9 ≥ 15. GAD 7 ≥ 15. PCL 5 ≥ 50. The flags are not a guess. They are the same thresholds the literature defines.",
  },
  {
    title: "Twelve month trend on every patient",
    body: "Each patient carries a twelve month trend on every instrument. Treatment response, remission, and relapse all show up on the same chart. The visit starts with the data already loaded.",
  },
  {
    title: "LiveChat with crisis protocol threads",
    body: "Encrypted secure messaging. The clinician opens a thread the moment a flag fires. Start a crisis protocol thread is a one click action.",
  },
  {
    title: "Twelve week high risk check in",
    body: "Templated. Activated with one button on the patient profile. Weekly cadence runs automatically through the recovery window. Clinical Notes, referral log, and Recent Activity sit alongside.",
  },
];

const useCases = [
  {
    label: "Use case A",
    title: "Medical clinics",
    body: "Practice administrators, medical directors, and directors of behavioral health at multi site clinics or behavioral health groups. The panel view sorts by R Score with clinical thresholds pre wired. LiveChat routes a flagged patient to a clinician without a three system scramble. Medical directors care for a larger panel without missing the people who are declining.",
    cta: { href: "#demo", label: "COGAI Medical — request a demo" },
  },
  {
    label: "Use case B",
    title: "Small insurance plans",
    body: "Medical directors, VPs of care management, and the care team at small insurance companies. Proactive population health on the membership without an EAP hotline deflection. Medication compliance up. ER admissions down. HEDIS depression and follow up measures move. Per patient per month pricing.",
    cta: { href: "#payer", label: "For insurance plans — scope a pilot" },
  },
];

const insurerOutcomes = [
  {
    label: "Medication compliance",
    body: "Members at risk of stopping a behavioral health medication are surfaced before the gap. The clinician reaches them through LiveChat. Adherence improves on the panel level.",
  },
  {
    label: "ER admissions",
    body: "Behavioral health crisis events that present in the ER are an expensive failure mode. Catching the spark earlier reduces the downstream pattern of crisis ER visits tied to anxiety, depression, and substance use.",
  },
  {
    label: "HEDIS measures movement",
    body: "Follow up after positive screen. Response at six and twelve weeks. Remission tracking. The metrics CMS and NCQA already expect. The product is designed to move them.",
  },
  {
    label: "Workflow leverage",
    body: "The same care management team can carry a larger panel because the panel arrives sorted. Stratified, with thresholds, with twelve month context. The work goes to the members who need it most.",
  },
];

const crisisSteps = [
  {
    t: "Real time clinical alert",
    b: "Crisis flag fires on submission. The Medical Provider role is paged immediately. Not at the end of the day.",
  },
  {
    t: "LiveChat thread opens",
    b: "Encrypted secure messaging. The clinician initiates the conversation inside the boundary, with the trend visible.",
  },
  {
    t: "Warm handoff to 988",
    b: "When appropriate, the counselor facilitates the handoff to 988 or local emergency services on the line. 988 is visible on every screen.",
  },
  {
    t: "Twelve week high risk check in",
    b: "Templated. Activated with one button. Weekly cadence runs automatically through the recovery window.",
  },
];

const faqs = [
  {
    question: "What is the difference between COGAI Medical and a chart review tool?",
    answer:
      "A chart review tool reports. COGAI Medical is a workflow. Screen, flag, clinician acts, LiveChat thread opens or referral fires, next cycle measures whether anything changed. A dashboard tells you the past. A workflow moves patients in the present.",
  },
  {
    question: "Why these seven instruments?",
    answer:
      "PHQ 9 for depression, GAD 7 for anxiety, PCL 5 for trauma, DAST 10 for drug use, AUDIT for alcohol use, PSQI for sleep, plus a work wellness scale. Every clinician in this field already uses them. The thresholds are defined in the literature. We pre wire them so triage is consistent across providers.",
  },
  {
    question: "What is the R Score?",
    answer:
      "A composite drawn from the seven validated screeners. Zero to one, lower is better. The clinician sees individual R Scores in a sortable panel. Trends carry twelve months of context. R Score movement starts the conversation. The instrument breakdown closes it.",
  },
  {
    question: "How does AI work inside COGAI Medical?",
    answer:
      "AI helps structure the conversation and spot patterns across instruments and across time. It does not diagnose, it does not treat, it does not decide. Every clinical action is initiated by a human. The line is in the consent document, not just the marketing.",
  },
  {
    question: "We already have a behavioral health vendor.",
    answer:
      "Behavioral health vendors typically deliver care. COGAI Medical identifies. The two sit together, not on top of each other. For plans without a clinical delivery arm, Cognifica Health is available for delivery under BAA.",
  },
  {
    question: "Our care management team already does this.",
    answer:
      "Care management typically engages members after a claim signals a problem. COGAI Medical engages before. Validated instruments on a monthly cadence surface members whose trajectories are shifting, and deliver them into care management with a composite score and a visible trend.",
  },
  {
    question: "How does the consent work for an insurer sponsored deployment?",
    answer:
      "The clinic facing consent names the clinical entity as sponsor. For an insurer sponsored deployment, a parallel consent names the insurer as sponsor with appropriate permitted use language. That document is being co authored with counsel. The same architectural rule holds: identified access is restricted to the Medical Provider role.",
  },
  {
    question: "What about EMR integration?",
    answer:
      "Most clinics start without EMR integration. The Medical Provider console runs alongside the chart and the panel data is exportable. Direct EMR integration is on roadmap. The pilot does not require it.",
  },
  {
    question: "Patients say it is yet another survey.",
    answer:
      "The cycle is eight minutes a month and the patient sees their own R Score and trend immediately. Completion in seeded tenants runs above ninety percent because something comes back. It is not a survey. It is a check in with feedback.",
  },
  {
    question: "What about workers compensation?",
    answer:
      "Workers comp is the closest existing adjacency to a payer deployment. The carrier is the third party sponsor. The injured worker owns the clinical relationship. Clinical outcomes go to the carrier under a narrower permitted use. Pricing is per claim or per episode. We treat workers comp as the first proof point that COGAI Medical can operate under a third party sponsor model.",
  },
];

export default function MedicalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Medical", url: "https://www.cogai.health/medical" }]}
      />
      <ServiceSchema
        name="COGAI Medical"
        description="Population mental health for clinics and small insurance plans. Validated screeners on a monthly cadence. R Score sorted panel. Clinical thresholds pre wired. LiveChat with crisis protocol. Per patient per month."
        url="https://www.cogai.health/medical"
      />
      <FAQSchema questions={faqs} />

      <section className="relative bg-black text-white" aria-label="Intro">
        <div className="relative w-full aspect-video overflow-hidden">
          <HeroVideo />
          <div
            className="absolute inset-x-0 bottom-0 bg-white/40 backdrop-blur-md border-t border-white/50"
            role="presentation"
          >
            <PageContainer className="py-6 sm:py-8 lg:py-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                <div className="max-w-3xl">
                  <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-[#0A0A0A]">
                    COGAI Medical
                  </p>
                  <h1 className="font-heading text-[clamp(28px,5vw,72px)] leading-[0.98] mt-3 uppercase">
                    <span className="gradient-text">Catching the spark before the fire.</span>
                  </h1>
                  <p className="mt-4 font-body text-sm sm:text-base text-[#0A0A0A] font-light leading-relaxed max-w-2xl">
                    Proactive screening for every patient in a population.
                    Clinician routing for the ones who need a person next. The
                    panel arrives sorted. The thresholds are pre wired.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 lg:flex-shrink-0">
                  <ArrowLink href="#demo" variant="solid">
                    COGAI Medical
                  </ArrowLink>
                  <Link
                    href="#payer"
                    className="group inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] py-3 px-6 text-[10px] sm:text-xs uppercase tracking-widest font-light hover:border-[#3B5A75] text-orange-grad-hover hover:gap-5 transition-all"
                  >
                    For insurance plans
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </PageContainer>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="vignette-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>The vignette</Eyebrow>
              <h2
                id="vignette-heading"
                className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                A 63 year old patient. Severe concussion. New onset depression.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                Most mental health care waits for the crisis to come to us.
                COGAI Medical catches it at the spark. This is what that looks
                like in a real practice.
              </p>
              <p className="mt-6 font-nav text-[10px] tracking-widest uppercase text-[#737373]">
                Anchor story · Dr. John Abrahams
              </p>
            </div>
            <div className="lg:col-span-3">
              <article className="border border-[#D4D4D4] bg-white p-8 sm:p-10">
                <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                  What actually happened
                </p>
                <div className="mt-6 space-y-5 font-body text-base sm:text-lg text-[#262626] font-light leading-relaxed">
                  <p>
                    Sixty three year old patient. Severe concussion. New onset
                    depression underneath. COGAI Medical alerted the team that
                    his depression was worsening over a three month cycle.
                    The R Score kept falling.
                  </p>
                  <p>
                    The team opened a LiveChat thread to reach him and
                    realized he had stopped refilling his anti depression
                    medication. His family was thankful. Once the medications
                    were back on schedule, he was doing much better.
                  </p>
                  <p className="font-heading text-[clamp(20px,2.4vw,32px)] leading-[1.2] text-[#0A0A0A]">
                    That is what this tool does. It catches the spark before
                    the fire.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="beliefs-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="What we believe"
            title="Five beliefs the product is built on."
            lede="Care should be proactive. The instruments to deliver it already exist. The clinician's time is the bottleneck. Population health is a workflow, not a dashboard. The privacy architecture is the same across use cases."
            as="h2"
          />
          <ol
            id="beliefs-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            role="list"
          >
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 60}>
                <li className="border border-[#D4D4D4] bg-white p-8 h-full flex flex-col">
                  <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                    {b.n}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl text-[#0A0A0A] mt-3 leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed">
                    {b.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="instruments-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Seven validated instruments"
            title="The same battery every clinician already uses."
            lede="Run monthly. Sorted by R Score. Clinical thresholds pre wired. The screening is done before the patient walks in."
            as="h2"
          />
          <ul
            id="instruments-heading"
            className="mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3"
            role="list"
          >
            {instruments.map((s, i) => (
              <li key={s.acronym}>
                <Reveal delay={i * 40}>
                  <div className="border border-[#D4D4D4] bg-white p-4 sm:p-5 h-full flex flex-col">
                    <p className="font-heading text-base sm:text-lg text-[#0A0A0A] leading-tight">
                      {s.acronym}
                    </p>
                    <p className="mt-2 font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                      {s.name}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="console-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Medical Provider console</Eyebrow>
              <h2
                id="console-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.04] text-[#0A0A0A] mt-4"
              >
                Screen. Flag. Act. Measure.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                The Medical Provider role is the only role that resolves
                individual identity to a score. Scoped, logged, and auditable.
                A dashboard reports. This is a workflow.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0" role="list">
                {consoleFeatures.map((f, i) => (
                  <li key={f.title}>
                    <NumberedStep index={i + 1} title={f.title}>
                      {f.body}
                    </NumberedStep>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="audiences-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Two use cases. One product."
            title="Same tech stack. Different deployment. Same privacy architecture."
            lede="The product difference is the routing layer, not the measurement layer."
            as="h2"
          />
          <div
            id="audiences-heading"
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <article className="flex flex-col h-full border border-[#D4D4D4] bg-white p-8 sm:p-10">
                  <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                    {u.label}
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] mt-4 leading-tight">
                    {u.title}
                  </h3>
                  <p className="mt-6 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed">
                    {u.body}
                  </p>
                  <div className="mt-auto pt-8">
                    <Link
                      href={u.cta.href}
                      className="font-nav text-xs tracking-widest uppercase text-[#525252] text-orange-grad-hover transition-colors"
                    >
                      {u.cta.label} →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        id="insurers"
        className="border-t border-[#D4D4D4] scroll-mt-32"
        aria-labelledby="insurers-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="For insurance plans"
            title="Proactive care, priced per patient per month."
            lede="Members do not show up to behavioral health care until they are in crisis. COGAI Medical catches them before the crisis. The underlying software works across both use cases. The go to market for the insurance company use case is being co designed with our first prospective client."
            as="h2"
          />
          <div
            id="insurers-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {insurerOutcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 70}>
                <article className="border border-[#D4D4D4] bg-white p-8 h-full">
                  <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl text-[#0A0A0A] mt-3">
                    {o.label}
                  </h3>
                  <p className="mt-4 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed">
                    {o.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-body text-xs text-[#737373] font-light italic max-w-2xl">
            Specific percentages are confirmed against the plan&apos;s own
            panel during pilot scoping. Outcome categories are designed targets
            for the product, not delivered claims.
          </p>
        </PageContainer>
      </section>

      <section
        id="workers-comp"
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="wc-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <Eyebrow>Workers compensation</Eyebrow>
              <h2
                id="wc-heading"
                className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                The first proof point for a third party sponsor model.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                Mental health complications are the dominant driver of
                prolonged recovery after a work related injury. Untreated
                anxiety, depression, PTSD, and sleep disturbance extend time
                off, increase reinjury risk, and inflate claim cost. A
                carrier sponsors. The injured worker owns the clinical
                relationship. Clinical outcomes go to the carrier under a
                narrower permitted use.
              </p>
              <p className="mt-4 font-body text-sm text-[#525252] font-light italic">
                COGAI Medical is not a pain management tool. It surfaces the
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
                  <NumberedStep index={2} title="Stratify by R Score">
                    The member panel is sorted by R Score and by instrument
                    flags. Claims with a rising trajectory are visible before
                    the claim runs long.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={3} title="Route to care">
                    Members above threshold are routed to the plan&apos;s
                    behavioral health benefit or to Cognifica Health under
                    BAA.
                  </NumberedStep>
                </li>
                <li>
                  <NumberedStep index={4} title="Track recovery">
                    Instruments run on a cadence through recovery. Response
                    and remission are visible to the clinical team, priced
                    per claim or per episode.
                  </NumberedStep>
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="crisis-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Crisis protocol"
            title="Automated the moment a patient clears threshold."
            lede="The escalation does not wait for a human to notice. The Medical Provider role is paged, LiveChat is open, and the twelve week high risk check in is one click away."
            as="h2"
          />
          <ol
            id="crisis-heading"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {crisisSteps.map((s, i) => (
              <li
                key={s.t}
                className="border border-[#D4D4D4] bg-white p-6 h-full"
              >
                <p className="font-heading text-[10px] tracking-widest text-orange-grad">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-lg text-[#0A0A0A] mt-3">
                  {s.t}
                </h3>
                <p className="mt-3 font-body text-sm text-[#404040] font-light leading-relaxed">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="ai-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>AI posture</Eyebrow>
              <h2
                id="ai-heading"
                className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                A clinician hearing AI in a mental health product is more
                cautious than an HR leader. They should be.
              </h2>
            </div>
            <div className="font-body text-base text-[#404040] font-light leading-relaxed space-y-5">
              <p>
                AI in COGAI Medical helps structure the conversation and spot
                patterns across instruments and across time. It does not
                diagnose, it does not treat, it does not decide.
              </p>
              <p>
                Identified access is restricted to the Medical Provider role.
                Every clinical action is initiated by a human. The line is in
                the consent document, not just the marketing.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="founder-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <Eyebrow>From the founder</Eyebrow>
              <h2
                id="founder-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Built for my own clinic. Now, for yours.
              </h2>
              <p className="mt-6 font-body text-sm text-[#525252] font-light leading-relaxed">
                Dr. John Abrahams, founder. Practicing neurosurgeon. Susan
                Mogan, PMHNP, leads behavioral health delivery. The product
                runs every day inside Cognifica Health, an active practice in
                Aquebogue and West Harrison, New York.
              </p>
            </div>
            <div className="lg:col-span-3">
              <blockquote className="font-heading text-[clamp(20px,2.6vw,36px)] leading-[1.2] text-[#0A0A0A]">
                &ldquo;I cannot look at every patient&rsquo;s mood and mental
                health assessment between visits. This shows me who needs me
                first. When a patient in a Cognifica clinic crosses a
                threshold, they can route straight into my own waiting room.
                That is not hypothetical. That is how the system works.&rdquo;
              </blockquote>
              <p className="mt-6 font-nav text-[10px] tracking-widest uppercase text-[#737373]">
                Dr. John Abrahams · Founder
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4] bg-[#F7F7F7]"
        aria-labelledby="pricing-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <h2
                id="pricing-heading"
                className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.05] text-[#0A0A0A] mt-4"
              >
                Two pricing models. One product.
              </h2>
              <p className="mt-6 font-body text-base text-[#404040] font-light leading-relaxed">
                Clinics buy seats. Insurance plans and workers comp carriers
                buy panels. Both rates are confirmed at pilot scoping.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border border-[#D4D4D4] bg-white p-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                  COGAI Medical
                </p>
                <h3 className="font-heading text-xl text-[#0A0A0A] mt-2">
                  Seat based · four tiers
                </h3>
                <p className="mt-3 font-body text-sm text-[#404040] font-light">
                  XS · SM · MD · LG. Same tier structure as the workforce
                  product.
                </p>
                <p className="mt-3 font-nav text-xs tracking-widest uppercase text-[#737373]">
                  $TBD / seat / month
                </p>
              </div>
              <div className="border border-[#D4D4D4] bg-white p-6">
                <p className="font-nav text-[10px] tracking-widest uppercase text-orange-grad">
                  For insurance plans and carriers
                </p>
                <h3 className="font-heading text-xl text-[#0A0A0A] mt-2">
                  Per patient per month
                </h3>
                <p className="mt-3 font-body text-sm text-[#404040] font-light">
                  Plan size, panel shape, and the instruments in scope drive
                  the rate. Workers comp prices per claim or per episode.
                </p>
                <p className="mt-3 font-nav text-xs tracking-widest uppercase text-[#737373]">
                  $TBD / patient / month
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="border-t border-[#D4D4D4]"
        aria-labelledby="faq-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <SectionHeading eyebrow="FAQ" title="What we are usually asked" as="h2" />
          <div id="faq-heading" className="mt-12 divide-y divide-[#E5E5E5] border-y border-[#D4D4D4]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-body text-base sm:text-lg text-[#0A0A0A] font-light">
                    {item.question}
                  </h3>
                  <span className="font-nav text-xs tracking-widest uppercase text-orange-grad shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 font-body text-sm sm:text-base text-[#404040] font-light leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        id="demo"
        className="border-t border-[#D4D4D4] bg-[#404040] scroll-mt-32"
        aria-labelledby="demo-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-orange-grad">
                COGAI Medical
              </p>
              <h2
                id="demo-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                Walk the Medical Provider console with a clinician.
              </h2>
              <p className="mt-6 font-body text-base text-white font-light leading-relaxed">
                A clinician will be on the call. We open a real anonymized
                panel, show the R Score sort, the twelve month trends, the
                LiveChat thread, and the crisis flag path. Forty five
                minutes.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-white font-light">
                <li>Medical Provider console walk through</li>
                <li>R Score sort and clinical thresholds</li>
                <li>Crisis protocol live</li>
                <li>Pilot scoping, if the fit is right</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="tel:+19147056830"
                  className="font-nav text-xs tracking-widest uppercase text-white border-b border-white hover:border-[#3B5A75] transition-colors"
                >
                  Or call (914) 705 6830
                </Link>
              </div>
            </div>
            <div>
              <MedicalGroupForm />
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        id="payer"
        className="border-t border-white bg-[#404040] scroll-mt-32"
        aria-labelledby="payer-heading"
      >
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-nav text-[10px] sm:text-xs tracking-widest uppercase text-orange-grad">
                For insurance plans
              </p>
              <h2
                id="payer-heading"
                className="font-heading text-[clamp(28px,4vw,56px)] leading-[1.05] text-white mt-4"
              >
                Scope a pilot against your own panel.
              </h2>
              <p className="mt-6 font-body text-base text-white font-light leading-relaxed">
                A clinical operator and the founder are on the call. We look
                at the panel shape, the HEDIS measures in scope, the
                permitted use posture, and the pricing axis. Forty five
                minutes.
              </p>
              <ul className="mt-8 space-y-2 font-body text-sm text-white font-light">
                <li>Panel scoping and enrollment model</li>
                <li>HEDIS depression and follow up in scope</li>
                <li>Per patient per month proposal</li>
                <li>Workers comp adjacency, if relevant</li>
              </ul>
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
