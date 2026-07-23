"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface ContactSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSuccessModal({ isOpen, onClose }: ContactSuccessModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close confirmation"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-success-title"
        aria-describedby="contact-success-description"
        className="relative w-full max-w-md border border-brand-yellow/30 bg-brand-grey p-8 text-center shadow-2xl"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-yellow/40 bg-brand-yellow/10">
          <CheckCircle2 className="h-9 w-9 text-brand-yellow" aria-hidden="true" />
        </div>

        <h2
          id="contact-success-title"
          className="mt-6 text-2xl font-black uppercase tracking-wide text-white"
        >
          Message Sent
        </h2>

        <p id="contact-success-description" className="mt-3 text-sm leading-relaxed text-white/70">
          Thanks for getting in touch. Your enquiry has been emailed to Johnson and he&apos;ll be
          back to you shortly.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full bg-brand-yellow px-6 py-4 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-yellow-300"
        >
          Done
        </button>
      </div>
    </div>
  );
}
