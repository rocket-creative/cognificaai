/* |UXUIDC| CrisisResourcesStrip */
interface CrisisResourcesStripProps {
  variant?: "footer" | "inline";
  className?: string;
}

export function CrisisResourcesStrip({
  variant = "footer",
  className = "",
}: CrisisResourcesStripProps) {
  const isInline = variant === "inline";
  return (
    <div
      className={`${
        isInline
          ? "border border-[#D2D2D7] bg-[#F5F5F7] p-6"
          : ""
      } ${className}`}
      role="region"
      aria-label="Crisis resources"
    >
      {isInline ? (
        <p className="font-nav text-[10px] tracking-widest uppercase text-[#86868B] mb-3">
          In crisis right now
        </p>
      ) : null}
      <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 font-body text-sm text-[#515154] font-light" role="list">
        <li>
          Call{" "}
          <a
            href="tel:988"
            className="text-[#0A0A0A] text-orange-grad-hover transition-colors"
          >
            988
          </a>{" "}
          for the Suicide and Crisis Lifeline
        </li>
        <li>
          Text{" "}
          <a
            href="sms:741741"
            className="text-[#0A0A0A] text-orange-grad-hover transition-colors"
          >
            741741
          </a>{" "}
          for the Crisis Text Line
        </li>
      </ul>
    </div>
  );
}
