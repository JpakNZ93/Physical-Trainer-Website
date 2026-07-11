"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { packages } from "@/lib/constants";

interface ContactFormLightProps {
  readonly className?: string;
}

function buildPackageMessage(packageId: string | null) {
  if (!packageId) return "";

  const selectedPackage = packages.find((pkg) => pkg.id === packageId);
  if (!selectedPackage) return "";

  return `I'm interested in ${selectedPackage.title} — ${selectedPackage.detail}.`;
}

export function ContactFormLight({ className = "" }: ContactFormLightProps) {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");
  const defaultMessage = useMemo(() => buildPackageMessage(packageId), [packageId]);
  const selectedPackage = packages.find((pkg) => pkg.id === packageId);

  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState(defaultMessage);

  const inputClass =
    "w-full border-2 border-outline-variant bg-surface-container-lowest p-4 font-label text-label-sm text-on-surface transition-none placeholder:text-outline-variant focus:border-primary";

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
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
    form.reset();
    setMessage(defaultMessage);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  }

  return (
    <div className={`relative ${className}`}>
      {selectedPackage && (
        <div className="mb-6 border-2 border-secondary bg-secondary/10 px-4 py-3">
          <p className="font-label text-label-sm uppercase text-secondary">Selected Package</p>
          <p className="mt-1 font-body text-body-md text-on-surface">
            {selectedPackage.title} — {selectedPackage.detail}
          </p>
        </div>
      )}

      <form action="#" className="space-y-6" method="POST" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block font-label text-label-sm uppercase text-outline">Name</label>
            <input className={inputClass} name="name" placeholder="YOUR FULL NAME" type="text" />
            {errors.name && <p className="text-sm text-error">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="block font-label text-label-sm uppercase text-outline">Email</label>
            <input className={inputClass} name="email" placeholder="EMAIL ADDRESS" type="email" />
            {errors.email && <p className="text-sm text-error">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block font-label text-label-sm uppercase text-outline">Phone</label>
            <input className={inputClass} name="phone" placeholder="04XX XXX XXX" type="tel" />
            {errors.phone && <p className="text-sm text-error">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <label className="block font-label text-label-sm uppercase text-outline">
              Preferred Training
            </label>
            <select
              className={`${inputClass} cursor-pointer appearance-none`}
              defaultValue="PERSONAL TRAINING"
              name="training"
            >
              <option>PERSONAL TRAINING</option>
              <option>BOXING SESSIONS</option>
              <option>GROUP TRAINING</option>
              <option>ONLINE COACHING</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-label text-label-sm uppercase text-outline">
            Your Message / Goals
          </label>
          <textarea
            className={`${inputClass} resize-none`}
            name="message"
            placeholder="TELL US ABOUT YOUR FITNESS JOURNEY"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          {errors.message && <p className="text-sm text-error">{errors.message}</p>}
        </div>

        <button
          className="touch-manipulation group flex w-full items-center justify-center gap-4 bg-primary py-5 font-headline text-headline-md uppercase text-on-primary transition-none hover:bg-secondary hover:text-on-secondary sm:py-6"
          type="submit"
        >
          Book Consultation
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </button>
      </form>

      {showToast && (
        <div className="absolute -top-4 right-0 left-0 border border-secondary bg-secondary/10 px-4 py-3 text-center text-sm text-secondary">
          Message sent! We&apos;ll be in touch soon.
        </div>
      )}
    </div>
  );
}
