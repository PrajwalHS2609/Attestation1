import React from "react";
import "@/components/Style/style.css";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
const OfficeQatarAbout = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <h2>
          About <span>Qatar</span> Embassy
        </h2>
      </div>
      <div className="aboutUs-wrapper">
        <div className="aboutUs-content">
          <MdLocationPin className="aboutUs-icon" />
          <h4>ADDRESS</h4>
          <b>
            EP-31A, Chandargupt Marg, Chanakyapuri, South West Delhi 110021{" "}
          </b>
        </div>
        <div className="aboutUs-content">
          <MdLocalPhone className="aboutUs-icon" />
          <h4>PHONE</h4>
          <b>
            <a href="tel:1126118787">+91 11 2611 8787</a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoIosMail className="aboutUs-icon" />
          <h4>EMAIL</h4>
          <b>
            <a href="mailto:newdelhi@mofa.gov.qa">newdelhi@mofa.gov.qa </a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoMdTime className="aboutUs-icon" />
          <h4>WORKING HOURS</h4>
          <b>
            <span>From:</span> Monday at 9 a.m.
          </b>
          <b>
            <span>To:</span> Friday at 3 p.m.
          </b>
        </div>
      </div>
    </div>
  );
};

export default OfficeQatarAbout;
