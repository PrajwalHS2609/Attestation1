import "./ContactUs.css";
import ContactUsBanner from "@/media/images/ContactUsBanner.png"
import Image from "next/image";
export default function ContactUsHeader() {
  return (
    <div className="contactUs-headerContainer">
      <Image
        src={ContactUsBanner}
        alt="contactUsHeader"
      />
      <div className="contactUs-headerContents">
        <h2>Contact Us</h2>
        <p>
          Our dedicated team is here to assist you. Feel free to reach out
          through the provided contact details or use the convenient form on
          this page. Your document attestation and apostille needs are our
          priority, and we look forward to connecting with you to provide
          efficient and reliable services.
        </p>
      </div>
    </div>
  );
}
