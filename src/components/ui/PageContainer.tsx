/* |UXUIDC| PageContainer */
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
  className?: string;
}

export function PageContainer({ children, size = "default", className = "" }: PageContainerProps) {
  const max =
    size === "wide" ? "max-w-7xl" : size === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`${max} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
