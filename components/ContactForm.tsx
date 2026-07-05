"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    form.reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  }

  const inputClass =
    "w-full border border-white/20 bg-brand-grey px-4 py-3 text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none";

  return (
    <div className="relative">
      <h3 className="mb-6 text-2xl font-bold uppercase tracking-wider text-brand-yellow">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-white/70">
            Name
          </label>
          <input type="text" id="name" name="name" className={inputClass} />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-white/70">
            Email
          </label>
          <input type="email" id="email" name="email" className={inputClass} />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-white/70">
            Phone
          </label>
          <input type="tel" id="phone" name="phone" className={inputClass} />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-white/70">
            Message
          </label>
          <textarea id="message" name="message" rows={5} className={inputClass} />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-brand-yellow px-6 py-4 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-yellow-300"
        >
          Send Message
        </button>
      </form>

      {showToast && (
        <div className="absolute -top-4 right-0 left-0 rounded border border-green-500/30 bg-green-900/80 px-4 py-3 text-center text-sm text-green-300">
          Message sent! We&apos;ll be in touch soon.
        </div>
      )}
    </div>
  );
}
