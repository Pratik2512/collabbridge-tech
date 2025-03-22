
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - CollabCraze Tech</title>
        <meta name="description" content="Get in touch with CollabCraze Tech. Contact us for a free consultation or to learn more about our technology solutions." />
      </Helmet>
      <ContactForm />
      <MapSection />
    </>
  );
};

export default ContactPage;
