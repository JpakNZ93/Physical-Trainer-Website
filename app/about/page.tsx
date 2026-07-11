import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 180PT's mission to help people turn their lives around through health, fitness, and discipline in Western Sydney.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
