import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-sm text-white/60 font-light mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 bg-[#E6A91A] text-[#0A0A0A] py-3 px-6 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all"
        >
          Return Home
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
