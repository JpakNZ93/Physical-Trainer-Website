import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with 180PT in Western Sydney. Book your free consultation today.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
