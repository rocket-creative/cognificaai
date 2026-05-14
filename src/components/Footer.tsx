/* |UXUIDC| Footer */
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "COGAI Workforce", href: "/workforce" },
    { label: "COGAI Medical", href: "/medical" },
    { label: "For Insurers", href: "/medical#insurers" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Start your free trial", href: "/workforce#demo" },
  ],
  company: [
    { label: "About", href: "/about" },
    {
      label: "Cognifica Health",
      href: "https://www.cognifica.health?utm_source=cogai&utm_medium=footer",
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
      className="bg-[#F7F7F7] border-t border-[#E5E5E5]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="COGAI home">
              <Image
                src="/cogai-logo.svg"
                alt="COGAI"
                width={200}
                height={40}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>
            <p className="mt-6 font-body text-sm text-[#525252] font-light leading-relaxed max-w-sm">
              The workforce mental health platform that gives employers aggregate
              insight into the cognitive health of their workforce — without ever
              revealing an individual score. Six clinically validated screeners,
              monthly. Built inside an active clinical practice.
            </p>

            <div className="mt-8">
              <p className="font-nav text-[10px] tracking-widest uppercase text-[#737373] mb-3">
                In crisis right now
              </p>
              <ul className="space-y-2 font-body text-sm text-[#404040] font-light" role="list">
                <li>
                  Call{" "}
                  <a href="tel:988" className="text-[#0A0A0A] text-orange-grad-hover transition-colors">
                    988
                  </a>{" "}
                  for the Suicide and Crisis Lifeline
                </li>
                <li>
                  Text{" "}
                  <a href="sms:741741" className="text-[#0A0A0A] text-orange-grad-hover transition-colors">
                    741741
                  </a>{" "}
                  for the Crisis Text Line
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#737373] mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#737373] mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in new tab)`}
                      className="font-body text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-body text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#737373] mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="font-body text-xs text-[#737373] font-light space-y-1">
              <p>Cognifica Health · Aquebogue NY · West Harrison NY</p>
              <p>
                © {currentYear} COGAI. Built on top of{" "}
                <a
                  href="https://www.cognifica.health?utm_source=cogai&utm_medium=footer_copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Cognifica Health (opens in new tab)"
                  className="text-orange-grad text-orange-grad-hover transition-colors"
                >
                  Cognifica Health
                </a>
                .
              </p>
            </div>
            <p className="font-body text-xs text-[#737373] font-light">
              Not used for diagnosis. Not for emergency response. Clinical decisions are always initiated by a human.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
