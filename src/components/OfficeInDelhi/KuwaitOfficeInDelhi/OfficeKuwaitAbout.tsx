import React from "react";
import "@/components/Style/style.css";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
const OfficeKuwaitAbout = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <h2>
          About <span>Kuwait</span> Embassy
        </h2>
      </div>
      <div className="aboutUs-wrapper">
        <div className="aboutUs-content">
          <MdLocationPin className="aboutUs-icon" />
          <h4>ADDRESS</h4>
          <b>
            Kuwaiti Embassy in New Delhi, India, 5 A, Shantipath, Chanakyapuri,
            New Delhi 110021
          </b>
        </div>
        <div className="aboutUs-content">
          <MdLocalPhone className="aboutUs-icon" />
          <h4>PHONE</h4>
          <b>
            <a href="tel:1124100791">(+91) 11-2410 0791</a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoIosMail className="aboutUs-icon" />
          <h4>EMAIL</h4>
          <b>
            <a href="mailto:new_delhi@mofa.gov.kw">new_delhi@mofa.gov.kw</a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoMdTime className="aboutUs-icon" />
          <h4>WORKING HOURS</h4>
          <b>
            <span>From:</span> Monday at 9:30 a.m.
          </b>
          <b>
            <span>To:</span> Friday at 3:30 p.m.
          </b>
        </div>
      </div>
    </div>
  );
};

export default OfficeKuwaitAbout;
