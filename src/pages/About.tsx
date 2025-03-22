
import { MissionSection } from "@/components/about/MissionSection";
import { JourneySection } from "@/components/about/JourneySection";
import { TeamSection } from "@/components/about/TeamSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CollabCraze Tech</title>
        <meta name="description" content="Learn about CollabCraze Tech's mission, journey, and the team behind our innovative technology solutions." />
      </Helmet>
      <MissionSection />
      <JourneySection />
      <TeamSection />
      <CtaSection />
    </>
  );
};

export default AboutPage;
