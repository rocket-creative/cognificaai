import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Essentials",
    price: 2.5,
    features: [
      "Quarterly mental health surveys",
      "Aggregate reporting dashboard",
      "Annual trend analysis",
      "Email support",
      "25 employee minimum",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: 4.5,
    features: [
      "Everything in Essentials",
      "Phone support (first-line clinical)",
      "Live chat support",
      "At-risk employee outreach",
      "Quarterly benchmark reports",
      "25 employee minimum",
    ],
    popular: true,
  },
  {
    name: "Complete",
    price: 6.5,
    features: [
      "Everything in Standard",
      "Clinical referral management",
      "Referral tracking & follow-up",
      "Custom survey modules",
      "Dedicated account manager",
      "50 employee minimum",
    ],
    popular: false,
  },
];

const volumeTable = [
  { employees: "25–99", essentials: "$2.50", standard: "$4.50", complete: "$6.50" },
  { employees: "100–249", essentials: "$2.25", standard: "$4.00", complete: "$5.75" },
  { employees: "250–499", essentials: "$2.00", standard: "$3.60", complete: "$5.25" },
  { employees: "500–999", essentials: "$1.75", standard: "$3.25", complete: "$4.75" },
  { employees: "1,000+", essentials: "Contact Us", standard: "Contact Us", complete: "Contact Us" },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-[#0A0A0A]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-nav text-xs tracking-widest uppercase text-[#D4B8E8] mb-4">
          Pricing
        </p>
        <h2
          id="pricing-heading"
          className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
        >
          Simple, Transparent Pricing
        </h2>
        <p className="font-body text-sm text-white/60 font-light mb-12 max-w-2xl">
          Per employee per month. No hidden fees. Cancel with 90 days notice.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative bg-[#161616] p-6 border ${
                tier.popular ? "border-[#D4B8E8]" : "border-white/10"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4B8E8] text-[#0A0A0A] text-[10px] tracking-widest uppercase px-3 py-1 font-bold">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl text-white mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="font-heading text-3xl text-[#D4B8E8]">
                  ${tier.price.toFixed(2)}
                </span>
                <span className="font-body text-sm text-white/60 font-light ml-1">
                  PEPM
                </span>
              </div>
              <ul className="space-y-3" role="list">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 text-[#D4B8E8] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-body text-xs text-white/70 font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full max-w-3xl mx-auto text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/40">
                <th scope="col" className="text-left py-3 px-4 font-nav text-xs tracking-widest uppercase text-white/60">
                  Employees
                </th>
                <th scope="col" className="text-left py-3 px-4 font-nav text-xs tracking-widest uppercase text-white/60">
                  Essentials
                </th>
                <th scope="col" className="text-left py-3 px-4 font-nav text-xs tracking-widest uppercase text-white/60">
                  Standard
                </th>
                <th scope="col" className="text-left py-3 px-4 font-nav text-xs tracking-widest uppercase text-white/60">
                  Complete
                </th>
              </tr>
            </thead>
            <tbody>
              {volumeTable.map((row) => (
                <tr key={row.employees} className="border-b border-white/10">
                  <td className="py-3 px-4 font-body text-white/70">{row.employees}</td>
                  <td className="py-3 px-4 font-body text-white/70">{row.essentials}</td>
                  <td className="py-3 px-4 font-body text-white/70">{row.standard}</td>
                  <td className="py-3 px-4 font-body text-white/70">{row.complete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-2 mb-8 max-w-2xl">
          <p className="font-body text-xs text-white/50 font-light">
            Annual contracts · Quarterly billing · Minimum 25 employees
          </p>
          <p className="font-body text-xs text-white/50 font-light">
            HIPAA compliant data handling included in all tiers
          </p>
          <p className="font-body text-xs text-white/50 font-light">
            Individual employee data is never shared with employer — aggregate only
          </p>
          <p className="font-body text-xs text-white/50 font-light">
            Volume discounts available for 500+ employees
          </p>
        </div>

        <Link
          href="#demo"
          className="inline-flex items-center justify-center gap-4 bg-[#D4B8E8] text-[#0A0A0A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4B8E8] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
        >
          Start with a 90-Day Pilot
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
