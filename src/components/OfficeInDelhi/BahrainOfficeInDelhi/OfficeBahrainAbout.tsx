import React from "react";
import "@/components/Style/style.css";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
const OfficeBahrainAbout = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <h2>
          About <span>Bahrain</span> Embassy
        </h2>
      </div>
      <div className="aboutUs-wrapper">
        <div className="aboutUs-content">
          <MdLocationPin className="aboutUs-icon" />
          <h4>ADDRESS</h4>
          <b>
            42, Poorvi Marg, Vasant Vihar, Basant Lok, Vasant Vihar South West
            Delhi 110057 Delhi India{" "}
          </b>
        </div>
        <div className="aboutUs-content">
          <MdLocalPhone className="aboutUs-icon" />
          <h4>PHONE</h4>
          <b>
            <a href="tel:1126154153">+91 11 2615 4153</a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoIosMail className="aboutUs-icon" />
          <h4>EMAIL</h4>
          <b>
            <a href="mailto:bahrainembassyindia@gmail.com">
              bahrainembassyindia@gmail.com
            </a>
          </b>
        </div>
        <div className="aboutUs-content">
          <IoMdTime className="aboutUs-icon" />
          <h4>WORKING HOURS</h4>
          <b>
            <span>From:</span> Monday at 10 a.m.- 2 p.m.
          </b>
          <b>
            <span>To:</span> Friday at 10 a.m.- 1 p.m.
          </b>
        </div>
      </div>
    </div>
  );
};

export default OfficeBahrainAbout;
