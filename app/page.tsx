import { Hero } from "@/components/Hero";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { MotivationSection } from "@/components/MotivationSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseSection />
      <MotivationSection />
      <NewsletterSection />
    </>
  );
}
