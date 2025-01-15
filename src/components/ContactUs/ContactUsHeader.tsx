import "./ContactUs.css";
import contactUsHeader from "./../Images/contactUsHeader.jpg";
import Image from "next/image";
export default function ContactUsHeader() {
  return (
    <div className="contactUs-headerContainer">
      <img
        src="https://img.freepik.com/free-photo/global-globalization-world-map-environmental-concservation-concept_53876-124164.jpg?t=st=1736928939~exp=1736932539~hmac=f7380aeee5134af2ee7cbccde50037fd3bafe9e66153ed5ea5c4bae9543f9fff&w=1380"
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
