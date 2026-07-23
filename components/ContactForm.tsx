"use client";

import { useState, FormEvent, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { packages } from "@/lib/constants";
import { ContactSuccessModal } from "@/components/ContactSuccessModal";

function buildPackageMessage(packageId: string | null) {
  if (!packageId) return "";

  const selectedPackage = packages.find((pkg) => pkg.id === packageId);
  if (!selectedPackage) return "";

  return `I'm interested in ${selectedPackage.title} — ${selectedPackage.detail}.`;
}

interface ContactFormFieldsProps {
  packageId: string | null;
}

function ContactFormFields({ packageId }: ContactFormFieldsProps) {
  const defaultMessage = useMemo(() => buildPackageMessage(packageId), [packageId]);
  const selectedPackage = packages.find((pkg) => pkg.id === packageId);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState(defaultMessage);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(text: string) {
    setErrorMessage(text);
    setShowErrorToast(true);
    setTimeout(() => setShowErrorToast(false), 5000);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const messageValue = formData.get("message") as string;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    if (!messageValue.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: messageValue.trim(),
          packageId,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        showError(data.error ?? "Unable to send your message. Please try again.");
        return;
      }

      form.reset();
      setMessage(defaultMessage);
      setShowSuccessModal(true);
    } catch {
      showError("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-white/20 bg-brand-grey px-4 py-3 text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none";

  return (
    <div className="relative">
      <h3 className="mb-6 text-2xl font-bold uppercase tracking-wider text-brand-yellow">
        Send Us a Message
      </h3>

      {selectedPackage && (
        <div className="mb-4 border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
            Selected Package
          </p>
          <p className="mt-1 text-sm text-white/90">
            {selectedPackage.title} — {selectedPackage.detail}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-white/70">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-white/70">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-white/70">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-white/70">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={inputClass}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full bg-brand-yellow px-6 py-4 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {showErrorToast && (
        <div
          role="alert"
          className="absolute -top-4 right-0 left-0 rounded border border-red-500/30 bg-red-900/80 px-4 py-3 text-center text-sm text-red-200"
        >
          {errorMessage}
        </div>
      )}

      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");

  return <ContactFormFields key={packageId ?? "default"} packageId={packageId} />;
}
