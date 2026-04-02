"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useMobileMenuAnimation } from "@/components/animations";

const navLinks = [
  { href: "#how", label: "How It Works" },
  { href: "#employers", label: "For Employers" },
  { href: "#assessments", label: "Assessments" },
  { href: "#roi", label: "ROI" },
  { href: "#faq", label: "FAQ" },
];

const cognificaHealthLink = {
  href: "https://cognifica-health.vercel.app/for-employees?utm_source=cognificaapp&utm_medium=nav",
  label: "Cognifica Health",
  ariaLabel: "Visit Cognifica Health for clinical care (opens in new tab)",
};

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useMobileMenuAnimation(isOpen, mobileMenuRef);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div
      className={`transition-all duration-300 border-b border-transparent ${
        isScrolled ? "border-white/5" : ""
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Cognifica App Home"
          >
            <Image
              src="/cognifica-app-logo.svg"
              alt="Cognifica App"
              width={160}
              height={46}
              priority
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-5 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-nav text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white/30 font-nav text-xs" aria-hidden="true">
              |
            </span>
            <a
              href={cognificaHealthLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={cognificaHealthLink.ariaLabel}
              className="font-nav text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors whitespace-nowrap"
            >
              {cognificaHealthLink.label}
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <Link
              href="tel:+19147056830"
              className="font-nav text-xs tracking-wider text-white/60 hover:text-white transition-colors"
            >
              (914) 705 6830
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center gap-3 bg-[#E6A91A] text-[#0A0A0A] py-3 px-6 text-[10px] tracking-widest uppercase font-light hover:gap-5 transition-all"
            >
              Request Demo
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 top-28 sm:top-32 bg-[#0A0A0A] z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full px-6 py-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-2xl text-white hover:text-[#E6A91A] transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={cognificaHealthLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={cognificaHealthLink.ariaLabel}
              onClick={() => setIsOpen(false)}
              className="font-heading text-2xl text-white hover:text-[#E6A91A] transition-colors min-h-[44px] flex items-center"
            >
              {cognificaHealthLink.label}
            </a>
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <Link
              href="tel:+19147056830"
              className="block font-body text-sm text-white/60 mb-4"
            >
              (914) 705 6830
            </Link>
            <Link
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-4 bg-[#E6A91A] text-[#0A0A0A] py-4 px-8 w-full uppercase tracking-widest text-xs font-light hover:gap-6 transition-all"
            >
              Request Demo
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
