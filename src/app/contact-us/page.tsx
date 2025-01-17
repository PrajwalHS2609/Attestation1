
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import ContactUsMain from "@/components/ContactUs/ContactUsMain";
export const metadata = {
  title:
    "Contact Us for all types Embassy Attestation & Apostille Services in Bangalore",
  description:
    "Contact Us for all types Embassy Attestation & Apostille Services in Bangalore. 24x7 Customer Support, Email Us, WhatsApp & Call Us directly.",
  canonical: "https://foreignembassyattestation.com/contact-us",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ContactUs() {
  return (
    <div className="main-container">
      <ContactUsHeader />
      <ContactUsMain />
    </div>
  );
}
