"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/contact">Book a Free Consultation</CTAButton>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-brand-black px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-brand-yellow"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <CTAButton href="/contact" className="mt-2 w-full text-center">
              Book a Free Consultation
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}
