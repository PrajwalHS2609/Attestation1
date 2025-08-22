import Image from "next/image";
import "./Footer.css";
import Logo from "@/media/images/Attestation Logo.png";
import { MdLocationPin } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function FooterContact() {
  return (
    <div className="footerContact-container" id="footerContact">
      <div className="footerContact-imgContent">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="footerContact-content">
        <div className="footerContact-item">
          <MdLocationPin className="footerContact-icon" />
        </div>
        <div className="footerContact-item">
          <a href="">
            123, Mahatma Gandhi Rd, FM Cariappa Colony, Sivanchetti Gardens,
            Bengaluru, Karnataka 560025
          </a>
        </div>
      </div>
      <div className="footerContact-content">
        <div className="footerContact-item">
          <MdPhoneInTalk className="footerContact-icon" />
        </div>
        <div className="footerContact-item">
          <a href="tel:6360226773">+91 6360226773</a>
          <a href="tel:6360226773">+91 6360226773</a>
        </div>
      </div>
      <div className="footerContact-content">
        <div className="footerContact-item">
          <FaEnvelopeOpenText className="footerContact-icon" />
        </div>
        <div className="footerContact-item">
          <a href="mailto:info@xyz.com">info@xyz.com</a>
        </div>
      </div>
      <div className="footerContact-social" >
        <FaInstagram className="footerSocial-icon"/>
        <FaFacebook className="footerSocial-icon"/>
        <FaXTwitter className="footerSocial-icon"/>
        <FaYoutube className="footerSocial-icon"/>
      </div>
    </div>
  );
}
