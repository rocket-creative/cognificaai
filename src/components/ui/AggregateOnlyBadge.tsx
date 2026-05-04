/* |UXUIDC| AggregateOnlyBadge */
import { Shield } from "lucide-react";

interface AggregateOnlyBadgeProps {
  label?: string;
  className?: string;
}

export function AggregateOnlyBadge({
  label = "Aggregate only",
  className = "",
}: AggregateOnlyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-[#3B5A75] bg-white px-3 py-1 text-[10px] tracking-widest uppercase text-orange-grad font-light ${className}`}
    >
      <Shield className="w-3 h-3" aria-hidden="true" />
      {label}
    </span>
  );
}
