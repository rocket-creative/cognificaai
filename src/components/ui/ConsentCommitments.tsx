/* |UXUIDC| ConsentCommitments */
import { ReactNode } from "react";

interface ConsentCommitmentsProps {
  heading?: ReactNode;
  className?: string;
}

const commitments = [
  {
    label: "01",
    text: "No PHI leaves the clinical boundary.",
  },
  {
    label: "02",
    text: "No therapy notes are ever accessible to the employer.",
  },
  {
    label: "03",
    text: "No individual symptom scores are ever accessible to the employer.",
  },
];

export function ConsentCommitments({ heading, className = "" }: ConsentCommitmentsProps) {
  return (
    <div className={className}>
      {heading ? (
        <h3 className="font-heading text-2xl sm:text-3xl text-[#0A0A0A] mb-8">{heading}</h3>
      ) : null}
      <ul className="space-y-6" role="list">
        {commitments.map((c) => (
          <li key={c.label} className="flex items-start gap-6 border-t border-[#D2D2D7] pt-6">
            <span className="font-heading text-[10px] tracking-widest text-orange-grad pt-1 shrink-0">
              {c.label}
            </span>
            <p className="font-body text-base sm:text-lg text-[#0A0A0A] font-light leading-relaxed">
              {c.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
