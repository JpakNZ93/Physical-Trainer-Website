import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-white/60">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href={siteConfig.phoneHref} className="hover:text-brand-yellow">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-yellow">
                {siteConfig.email}
              </a>
              <a href={siteConfig.url} className="hover:text-brand-yellow">
                {siteConfig.url.replace("https://", "")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} 180PT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
