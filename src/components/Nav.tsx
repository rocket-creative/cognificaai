/* |UXUIDC| Nav */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const primaryLinks = [
  { href: "/for-employers", label: "For Employers" },
  { href: "/for-clinics", label: "For Clinics" },
  { href: "/for-insurers", label: "For Insurers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

const cognificaHealthLink = {
  href: "https://www.cognifica.health/for-employees?utm_source=cognificaapp&utm_medium=nav",
  label: "Cognifica Health",
  ariaLabel: "Visit Cognifica Health for clinical care (opens in new tab)",
};

function ctaForPath(pathname: string | null) {
  if (!pathname) return { href: "/pilot", label: "Schedule a call" };
  if (pathname.startsWith("/for-insurers")) return { href: "/for-insurers#contact", label: "Book a call" };
  if (pathname.startsWith("/for-clinics")) return { href: "/for-clinics#demo", label: "Request a demo" };
  if (pathname.startsWith("/for-employers")) return { href: "/for-employers#demo", label: "Request a demo" };
  if (pathname.startsWith("/pilot")) return { href: "/pilot#consultation", label: "Schedule a consultation" };
  return { href: "/pilot", label: "Schedule a call" };
}

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const cta = ctaForPath(pathname);

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
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className={`transition-all duration-300 border-b ${
        isScrolled ? "border-white/5" : "border-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Cognifica home"
          >
            <Image
              src="/cognifica-app-logo.svg"
              alt="Cognifica"
              width={160}
              height={46}
              priority
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-6 flex-shrink-0">
            {primaryLinks.map((link) => {
              const active = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-nav text-xs tracking-widest uppercase transition-colors whitespace-nowrap ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
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

          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+19147056830"
              className="font-nav text-xs tracking-wider text-white/60 hover:text-white transition-colors"
            >
              (914) 705 6830
            </a>
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-3 bg-[#E6A91A] text-[#0A0A0A] py-3 px-6 text-[10px] tracking-widest uppercase font-light hover:gap-5 transition-all"
            >
              {cta.label}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>

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

      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 top-28 sm:top-32 bg-[#0A0A0A] z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {primaryLinks.map((link, i) => (
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
            <a
              href="tel:+19147056830"
              className="block font-body text-sm text-white/60 mb-4"
            >
              (914) 705 6830
            </a>
            <Link
              href={cta.href}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-4 bg-[#E6A91A] text-[#0A0A0A] py-4 px-8 w-full uppercase tracking-widest text-xs font-light hover:gap-6 transition-all"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
