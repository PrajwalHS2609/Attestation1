import React from "react";
import "@/components/Style/style.css";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
const OfficeSaudiAbout = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <h2>
          About <span>Saudi</span> Embassy
        </h2>
      </div>
      <div className="aboutUs-wrapper">
        <div className="aboutUs-content">
          <MdLocationPin className="aboutUs-icon" />
          <h4>ADDRESS</h4>
          <b>
            ROYAL EMBASSY OF SAUDI ARABIA EP 30 CHANDERGUPTA MARG CHANAKYAPURI
            NEW DELHI-110021{" "}
          </b>
        </div>
        <div className="aboutUs-content">
          <MdLocalPhone className="aboutUs-icon" />
          <h4>PHONE</h4>
          <b>
            <a href="tel:00911124102000">00911124102000</a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoIosMail className="aboutUs-icon" />
          <h4>EMAIL</h4>
          <b>
            <a href="mailto:inemb@mofa.gov.sa">inemb@mofa.gov.sa </a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoMdTime className="aboutUs-icon" />
          <h4>WORKING HOURS</h4>
          <b>
            <span>From:</span> Monday at 9 a.m.
          </b>
          <b>
            <span>To:</span> Friday at 4 p.m.
          </b>
        </div>
      </div>
    </div>
  );
};

export default OfficeSaudiAbout;
