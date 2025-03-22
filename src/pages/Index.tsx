
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CollabCraze Tech - Bridging Business & Tech for a Smarter Future</title>
        <meta name="description" content="CollabCraze Tech provides sustainable tech solutions, including website and app development, to help businesses grow and thrive in the digital age." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
