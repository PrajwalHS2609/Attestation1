import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

import "./ContactUs.css";
export default function ContactUsAddress() {
  return (
    <div className="contactUs-addressContainer">
      <div className="contactUs-addressContent">
        <div className="contactUs-addressItem1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.966104073773!2d77.60987967454662!3d12.97401981482631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1686b3eabc95%3A0x10f3e5fed9a62662!2s123%2C%20Mahatma%20Gandhi%20Rd%2C%20FM%20Cariappa%20Colony%2C%20Sivanchetti%20Gardens%2C%20Bengaluru%2C%20Karnataka%20560025!5e0!3m2!1sen!2sin!4v1736420643606!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contactUs-addressItem2">
          <h3>Bangalore :</h3>
          <ul>
            <li>
              {" "}
              <a href="https://www.google.com/maps">
                <span>
                  <FaLocationDot className="footerAddressIco" />
                </span>
                123, Mahatma Gandhi Rd, FM Cariappa Colony, Sivanchetti Gardens,
                Bengaluru, Karnataka 560025{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:9876543210">
                <span>
                  <FaPhoneAlt className="footerAddressIco1" />
                </span>
                +91 9876543210
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:1234567890">
                <span>
                  <FaMobileAlt className="footerAddressIco1" />
                </span>
                +91 1234567890
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:info@xyz.com">
                <span>
                  <IoIosMail className="footerAddressIco1" />
                </span>
                info@xyz.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
