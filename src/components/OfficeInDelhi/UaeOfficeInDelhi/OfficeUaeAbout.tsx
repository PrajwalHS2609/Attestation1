import React from "react";
import "@/components/Style/style.css";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

const OfficeUaeAbout = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <h2>About <span>UEA</span> Embassy</h2>
      </div>
      <div className="aboutUs-wrapper">
        <div className="aboutUs-content">
          <MdLocationPin className="aboutUs-icon" />
          <h4>ADDRESS</h4>
          <b>
            12, Chandragupta Marg, Chanakyapuri, New Delhi - 110 021 (INDIA)
          </b>
        </div>
        <div className="aboutUs-content">
          <MdLocalPhone className="aboutUs-icon" />
          <h4>PHONE</h4>
          <b>
            <a href="tel:00911126111111">00911126111111</a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoIosMail className="aboutUs-icon" />
          <h4>EMAIL</h4>
          <b>
            <a href="mailto:NewDelhiEMB@mofaic.gov.ae">
              NewDelhiEMB@mofaic.gov.ae
            </a>
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

export default OfficeUaeAbout;
