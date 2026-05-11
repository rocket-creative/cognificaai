export function SuccessState() {
  return (
    <div
      className="border border-[#2A2D34] bg-white p-6 text-[#2A2D34] sm:p-8"
      role="status"
      aria-live="polite"
    >
      <p className="font-[var(--font-work-sans)] text-lg font-light leading-relaxed">
        Thanks. A real operator will reach out within one business day.
      </p>
    </div>
  );
}
