import { Resend } from "resend";
import { contactRecipient, packages, siteConfig } from "@/lib/constants";

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
  packageId?: string | null;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getPackageLabel(packageId?: string | null) {
  if (!packageId) return null;

  const selectedPackage = packages.find((pkg) => pkg.id === packageId);
  if (!selectedPackage) return null;

  return `${selectedPackage.title} — ${selectedPackage.detail}`;
}

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} <onboarding@resend.dev>`;
  const to =
    process.env.CONTACT_TO_EMAIL ??
    `${contactRecipient.name} <${contactRecipient.email}>`;

  const packageLabel = getPackageLabel(submission.packageId);
  const subject = `New 180PT enquiry from ${submission.name}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    packageLabel ? `Training option: ${packageLabel}` : null,
    "",
    "Message:",
    submission.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(submission.phone)}</p>
    ${
      packageLabel
        ? `<p><strong>Training option:</strong> ${escapeHtml(packageLabel)}</p>`
        : ""
    }
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(submission.message).replaceAll("\n", "<br />")}</p>
  `;

  const resend = new Resend(apiKey);

  return resend.emails.send({
    from,
    to: [to],
    replyTo: [`${submission.name} <${submission.email}>`],
    subject,
    text,
    html,
  });
}
