import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "./TopBar.css";
import { FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topBar-container">
      <div className="topBar-content">
        <Link href="/#footerContact">
          {" "}
          <FaPhone className="topBar-icon" />
        </Link>
        <a href="tel:1234567890">+91 1234567890</a>
        <a href="tel:9876543210">+91 9876543210</a>
      </div>
      <div className="topBar-content">
        <div className="topBar-item">
          <Link href="/#footerContact">
            {" "}
            <FaEnvelopeOpenText className="topBar-icon" />
          </Link>
          <a href="mailto:info@xyz.com">info@xyz.com</a>
        </div>
        <div className="topBar-item">
          <Link href="/#footerContact">
            <FaLocationDot className="topBar-icon" />
          </Link>
          <a href="">India</a>
        </div>
      </div>
      <div className="topBar-content">
        <a href="">
          <FaWhatsapp className="topBar-whatsIcon" />
        </a>
      </div>
    </div>
  );
}
