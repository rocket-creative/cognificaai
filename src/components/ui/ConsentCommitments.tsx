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
        <h3 className="font-heading text-2xl sm:text-3xl text-white mb-8">{heading}</h3>
      ) : null}
      <ul className="space-y-6" role="list">
        {commitments.map((c) => (
          <li key={c.label} className="flex items-start gap-6 border-t border-white/10 pt-6">
            <span className="font-heading text-[10px] tracking-widest text-[#E6A91A] pt-1 shrink-0">
              {c.label}
            </span>
            <p className="font-body text-base sm:text-lg text-white font-light leading-relaxed">
              {c.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
