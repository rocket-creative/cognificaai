/* |UXUIDC| NumberedStep */
import { ReactNode } from "react";

interface NumberedStepProps {
  index: number;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export function NumberedStep({ index, title, children, className = "" }: NumberedStepProps) {
  const label = index.toString().padStart(2, "0");
  return (
    <div className={`flex flex-col gap-4 border-t border-[#D2D2D7] pt-6 ${className}`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-heading text-[10px] tracking-widest uppercase text-orange-grad">
          {label}
        </span>
        <span className="h-px flex-1 bg-[#E5E5EA]" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl sm:text-2xl text-[#0A0A0A] leading-tight">{title}</h3>
      <div className="font-body text-sm sm:text-base text-[#515154] font-light leading-relaxed">
        {children}
      </div>
    </div>
  );
}
