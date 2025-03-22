
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { CtaSection } from "@/components/home/CtaSection";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - CollabCraze Tech</title>
        <meta name="description" content="Explore CollabCraze Tech's services including web development, app development, IT consulting, cloud solutions, and more." />
      </Helmet>
      <ServicesHero />
      <ServiceDetail />
      <CtaSection />
    </>
  );
};

export default ServicesPage;
