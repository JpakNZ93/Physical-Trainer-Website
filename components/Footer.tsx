import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-surface px-page py-24">
      <div className="mb-20 grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="space-y-8">
          <Logo size="footer" />
          <p className="text-sm uppercase leading-relaxed tracking-wider text-on-surface-variant">
            Private personal training in Western Sydney. Helping everyday people become stronger,
            healthier, and more confident through professional coaching and real accountability.
          </p>
        </div>

        <div className="space-y-8">
          <h4 className="border-b border-outline pb-4 font-label text-label-sm uppercase text-primary">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-label text-label-sm uppercase text-on-surface-variant transition-none hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="border-b border-outline pb-4 font-label text-label-sm uppercase text-primary">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">call</span>
              <a
                href={siteConfig.phoneHref}
                className="font-label text-label-sm text-on-surface-variant hover:text-primary"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all font-label text-label-sm uppercase text-on-surface-variant hover:text-primary md:break-normal"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 border-t border-outline-variant pt-12 md:flex-row">
        <p className="font-label text-label-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} 180PT. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link
            href="#"
            className="touch-manipulation font-label text-label-sm uppercase text-on-surface-variant transition-none hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="touch-manipulation font-label text-label-sm uppercase text-on-surface-variant transition-none hover:text-primary"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="touch-manipulation font-label text-label-sm uppercase text-on-surface-variant transition-none hover:text-primary"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
