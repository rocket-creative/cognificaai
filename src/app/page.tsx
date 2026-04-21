/* |UXUIDC| HomePage (placeholder) */
import Link from "next/link";
import { PageContainer, Eyebrow, ArrowLink } from "@/components/ui";

export default function HomePage() {
  return (
    <PageContainer className="py-16 sm:py-24 lg:py-32">
      <Eyebrow>Cognifica</Eyebrow>
      <h1 className="font-heading text-[clamp(32px,7vw,96px)] leading-[1.05] text-white mt-6 max-w-4xl">
        Cognitive health, measured. Managed. Never surveilled.
      </h1>
      <p className="mt-8 font-body text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
        Cognifica builds validated screening and risk stratification for two
        audiences that have never had the right tool. Employers who want to
        support workforce mental health without violating privacy. Clinicians
        who want to know which patients need them most on Monday morning.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/for-employers"
          className="border border-white/10 hover:border-[#E6A91A] transition-colors p-8 flex flex-col gap-4 min-h-[220px]"
        >
          <Eyebrow tone="muted">For Employers</Eyebrow>
          <p className="font-heading text-2xl text-white">CogAI Workforce</p>
          <p className="font-body text-sm text-white/60 font-light mt-auto">
            Seat-based. 90-day pilot. Explore CogAI Workforce.
          </p>
        </Link>
        <Link
          href="/for-clinics"
          className="border border-white/10 hover:border-[#E6A91A] transition-colors p-8 flex flex-col gap-4 min-h-[220px]"
        >
          <Eyebrow tone="muted">For Clinics</Eyebrow>
          <p className="font-heading text-2xl text-white">CogAI Medical</p>
          <p className="font-body text-sm text-white/60 font-light mt-auto">
            Panel triage. Validated thresholds. Explore CogAI Medical.
          </p>
        </Link>
        <Link
          href="/for-insurers"
          className="border border-white/10 hover:border-[#E6A91A] transition-colors p-8 flex flex-col gap-4 min-h-[220px]"
        >
          <Eyebrow tone="muted">For Insurers</Eyebrow>
          <p className="font-heading text-2xl text-white">CogAI Medical</p>
          <p className="font-body text-sm text-white/60 font-light mt-auto">
            Per patient per month. HEDIS movement. Book a call.
          </p>
        </Link>
      </div>

      <div className="mt-16">
        <ArrowLink href="/how-it-works" variant="ghost">
          How it works
        </ArrowLink>
      </div>
    </PageContainer>
  );
}
