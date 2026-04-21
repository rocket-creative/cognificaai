/* |UXUIDC| Footer */
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "CogAI Workforce", href: "/for-employers" },
    { label: "CogAI Medical", href: "/for-clinics" },
    { label: "For Insurers", href: "/for-insurers" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Schedule a call", href: "/pilot" },
  ],
  company: [
    { label: "About", href: "/about" },
    {
      label: "Cognifica Health",
      href: "https://www.cognifica.health?utm_source=cognificaapp&utm_medium=footer",
      external: true,
    },
    { label: "Press", href: "/about#press" },
  ],
  legal: [
    { label: "Privacy architecture", href: "/privacy" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#111111] border-t border-white/5"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl tracking-wide text-white"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 300 }}
              aria-label="Cognifica home"
            >
              cognifica
            </Link>
            <p className="mt-4 font-body text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Validated mental health screening and risk stratification, built by
              practicing clinicians. Two products. Three audiences. One clinical
              boundary that the employer never crosses.
            </p>

            <div className="mt-8">
              <p className="font-nav text-[10px] tracking-widest uppercase text-white/40 mb-3">
                In crisis right now
              </p>
              <ul className="space-y-2 font-body text-sm text-white/70 font-light" role="list">
                <li>
                  Call{" "}
                  <a href="tel:988" className="text-white hover:text-[#E6A91A] transition-colors">
                    988
                  </a>{" "}
                  for the Suicide and Crisis Lifeline
                </li>
                <li>
                  Text{" "}
                  <a href="sms:741741" className="text-white hover:text-[#E6A91A] transition-colors">
                    741741
                  </a>{" "}
                  for the Crisis Text Line
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in new tab)`}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="font-body text-xs text-white/40 font-light space-y-1">
              <p>Cognifica Health · Aquebogue NY · West Harrison NY</p>
              <p>
                © {currentYear} Cognifica. A{" "}
                <a
                  href="https://www.cognifica.health?utm_source=cognificaapp&utm_medium=footer_copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Cognifica Health (opens in new tab)"
                  className="text-[#E6A91A]/80 hover:text-[#E6A91A] transition-colors"
                >
                  Cognifica Health
                </a>{" "}
                company.
              </p>
            </div>
            <p className="font-body text-xs text-white/30 font-light">
              Not used for diagnosis. Not for emergency response. Clinical decisions are always initiated by a human.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
