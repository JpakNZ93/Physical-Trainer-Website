import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private personal training, boxing, small group training, and online coaching at 180PT Western Sydney.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
