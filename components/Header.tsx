"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-outline-variant bg-background px-page md:bg-background/95 md:backdrop-blur-sm">
      <div className="flex items-center gap-12">
        <Logo size="header" />

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body-md uppercase tracking-wider transition-none ${
                  isActive
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <Link
        href="/contact"
        className="hidden bg-primary px-8 py-3 font-label text-label-sm uppercase tracking-widest text-on-primary transition-none hover:bg-secondary hover:text-on-secondary md:inline-block"
      >
        Book a Free Consultation
      </Link>

      <button
        type="button"
        className="touch-manipulation p-2 text-primary md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full border-b border-outline-variant bg-background px-page py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-body-md uppercase tracking-wider transition-none ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 bg-primary px-8 py-3 text-center font-label text-label-sm uppercase tracking-widest text-on-primary transition-none hover:bg-secondary hover:text-on-secondary"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
