import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeatureBand from "@/components/home/FeatureBand";
import EligibilitySection from "@/components/home/EligibilitySection";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Calculator from "@/components/home/Calculator";
import Industries from "@/components/home/Industries";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeatureBand />
      <EligibilitySection />
      <SolutionsGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Calculator />
      <Industries />
      <FAQSection />
      <CTABanner />
    </>
  );
}
