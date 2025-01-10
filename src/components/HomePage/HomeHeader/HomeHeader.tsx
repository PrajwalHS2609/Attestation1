"use client";
import { Typewriter } from "react-simple-typewriter";
import "./HomeHeader.css";
import Experience from "@/media/images/Banner Image Icon/Experience.png";
import documents from "@/media/images/Banner Image Icon/Documents.png";
import Approved from "@/media/images/Banner Image Icon/Approved.png";
import Trusted from "@/media/images/Banner Image Icon/Trusted.png";
import Image from "next/image";

export default function HomeHeader() {
  const keyPoints = [
    { id: 1, icon: Experience, content: "15 YEARS OF EXPERIENCE" },
    { id: 2, icon: documents, content: "MORE THAN 5LAKH+ DOCUMENTS PROCESSED" },
    { id: 3, icon: Approved, content: "GOVT APPROVED AND ISO CERTIFIED" },
    { id: 4, icon: Trusted, content: "TRUSTED BY MORE THAN 30000+ CUSTOMERS" },
  ];
  return (
    <div className="homeHeader-container">
      <video autoPlay muted loop>
        <source src="videos/Attestationvid.mp4" type="video/mp4" />
        Your browser does not support video tag
      </video>{" "}
      <div className="homeHeader-cover">
        <div className="homeHeader-coverContent">
          <h2>
            Welcome To <br />
            Attestation Service <br />
            <span>
              {" "}
              <Typewriter
                words={["Bengaluru", "Chennai", "Mumbai", "Hyderabad"]}
                loop
              />
            </span>
          </h2>
        </div>
        <div className="homeHeader-coverContent">
          {keyPoints.map((x) => (
            <div className="homeHeader-keyContainer" key={x.id}>
              <div className="homeHeader-keyIconContainer">
                <Image src={x.icon} alt={x.content} />
              </div>
              <h6>{x.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
