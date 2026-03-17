"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Tier = "essentials" | "standard" | "complete";

const VOLUME_TABLE: { min: number; max: number; essentials: number; standard: number; complete: number }[] = [
  { min: 25, max: 99, essentials: 2.5, standard: 4.5, complete: 6.5 },
  { min: 100, max: 249, essentials: 2.25, standard: 4.0, complete: 5.75 },
  { min: 250, max: 499, essentials: 2.0, standard: 3.6, complete: 5.25 },
  { min: 500, max: 999, essentials: 1.75, standard: 3.25, complete: 4.75 },
  { min: 1000, max: 5000, essentials: 1.75, standard: 3.25, complete: 4.75 },
];

function getPepm(employees: number, tier: Tier): number {
  const row = VOLUME_TABLE.find((r) => employees >= r.min && employees <= r.max);
  if (!row) return tier === "essentials" ? 2.5 : tier === "standard" ? 4.5 : 6.5;
  return tier === "essentials" ? row.essentials : tier === "standard" ? row.standard : row.complete;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function ROICalculator() {
  const [employees, setEmployees] = useState(100);
  const [annualSalary, setAnnualSalary] = useState(65000);
  const [turnoverRate, setTurnoverRate] = useState(15);
  const [absenteeDays, setAbsenteeDays] = useState(4);
  const [tier, setTier] = useState<Tier>("standard");

  const results = useMemo(() => {
    const turnoverEvents = employees * (turnoverRate / 100);
    const costPerReplacement = annualSalary * 1.0;
    const totalTurnoverCost = turnoverEvents * costPerReplacement;
    const absenteeismCost = employees * absenteeDays * (annualSalary / 250);
    const costOfInaction = totalTurnoverCost + absenteeismCost;

    const pepm = getPepm(employees, tier);
    const annualCost = employees * pepm * 12;
    const estAnnualSavings = costOfInaction * 0.22;
    const netBenefit = estAnnualSavings - annualCost;
    const roiMultiple = annualCost > 0 ? netBenefit / annualCost : 0;
    const paybackMonths =
      estAnnualSavings > 0 ? annualCost / (estAnnualSavings / 12) : 0;

    return {
      costOfInaction,
      annualCost,
      estAnnualSavings,
      netBenefit,
      roiMultiple,
      paybackMonths,
    };
  }, [employees, annualSalary, turnoverRate, absenteeDays, tier]);

  const paybackDisplay =
    results.paybackMonths < 1
      ? "< 1 month"
      : `${Math.round(results.paybackMonths)} months`;

  return (
    <section
      id="roi"
      className="py-24 sm:py-32 bg-[#161616]"
      aria-labelledby="roi-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-nav text-xs tracking-widest uppercase text-[#E6A91A] mb-4">
          ROI Calculator
        </p>
        <h2
          id="roi-heading"
          className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
        >
          Calculate Your Cost of Inaction
        </h2>
        <p className="font-body text-sm text-white/60 font-light mb-12 max-w-2xl">
          See what untreated workforce mental health is costing your organization
          right now.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="roi-employees" className="block font-body text-xs text-white/70 mb-2">
                Number of employees
              </label>
              <input
                id="roi-employees"
                type="range"
                min={25}
                max={5000}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-white/10 accent-[#E6A91A]"
              />
              <span className="font-body text-sm text-white/90">{employees}</span>
            </div>

            <div>
              <label htmlFor="roi-salary" className="block font-body text-xs text-white/70 mb-2">
                Average annual salary
              </label>
              <input
                id="roi-salary"
                type="range"
                min={30000}
                max={200000}
                step={5000}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(Number(e.target.value))}
                className="w-full h-2 bg-white/10 accent-[#E6A91A]"
              />
              <span className="font-body text-sm text-white/90">
                {formatCurrency(annualSalary)}
              </span>
            </div>

            <div>
              <label htmlFor="roi-turnover" className="block font-body text-xs text-white/70 mb-2">
                Annual turnover rate
              </label>
              <input
                id="roi-turnover"
                type="range"
                min={5}
                max={50}
                value={turnoverRate}
                onChange={(e) => setTurnoverRate(Number(e.target.value))}
                className="w-full h-2 bg-white/10 accent-[#E6A91A]"
              />
              <span className="font-body text-sm text-white/90">{turnoverRate}%</span>
            </div>

            <div>
              <label htmlFor="roi-absentee" className="block font-body text-xs text-white/70 mb-2">
                Absenteeism days per employee per year
              </label>
              <input
                id="roi-absentee"
                type="range"
                min={0}
                max={20}
                value={absenteeDays}
                onChange={(e) => setAbsenteeDays(Number(e.target.value))}
                className="w-full h-2 bg-white/10 accent-[#E6A91A]"
              />
              <span className="font-body text-sm text-white/90">{absenteeDays}</span>
            </div>

            <div>
              <label htmlFor="roi-tier" className="block font-body text-xs text-white/70 mb-2">
                Pricing tier
              </label>
              <select
                id="roi-tier"
                value={tier}
                onChange={(e) => setTier(e.target.value as Tier)}
                autoComplete="off"
                style={{ fontSize: "16px" }}
                className="w-full h-12 bg-[#0A0A0A] border border-white/10 text-white px-4 font-body focus:outline-none focus:ring-2 focus:ring-[#E6A91A]"
              >
                <option value="essentials">Essentials ($2.50 PEPM)</option>
                <option value="standard">Standard ($4.50 PEPM)</option>
                <option value="complete">Complete ($6.50 PEPM)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#110e00] p-6 border border-[#E6A91A]/20">
              <p className="font-nav text-[10px] tracking-widest uppercase text-white/50 mb-2">
                Cost of Inaction
              </p>
              <p className="font-heading text-xl sm:text-2xl text-white">
                {formatCurrency(results.costOfInaction)}
              </p>
              <p className="font-body text-[10px] text-white/50 mt-1">annual</p>
            </div>
            <div className="bg-[#161616] p-6 border border-white/10">
              <p className="font-nav text-[10px] tracking-widest uppercase text-white/50 mb-2">
                Your Investment
              </p>
              <p className="font-heading text-xl sm:text-2xl text-white">
                {formatCurrency(results.annualCost)}
              </p>
              <p className="font-body text-[10px] text-white/50 mt-1">annual</p>
            </div>
            <div className="bg-[#1a1400] p-6 border border-[#E6A91A]/40">
              <p className="font-nav text-[10px] tracking-widest uppercase text-white/50 mb-2">
                Net Benefit
              </p>
              <p className="font-heading text-xl sm:text-2xl text-[#E6A91A]">
                {formatCurrency(results.netBenefit)}
              </p>
              <p className="font-body text-[10px] text-white/50 mt-1">
                ROI {results.roiMultiple >= 0 ? `${Math.round(results.roiMultiple)}x` : "—"} · Payback {paybackDisplay}
              </p>
            </div>
          </div>
        </div>

        <p className="font-body text-[10px] text-white/40 mt-8 max-w-2xl">
          Savings estimates are conservative (22% reduction) based on published
          EAP outcomes research. Source: EAPA.
        </p>

        <Link
          href="#demo"
          className="inline-flex items-center justify-center gap-4 bg-[#E6A91A] text-[#0A0A0A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all mt-8 focus:outline-none focus:ring-2 focus:ring-[#E6A91A] focus:ring-offset-2 focus:ring-offset-[#161616]"
        >
          Get a Custom ROI Analysis
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
