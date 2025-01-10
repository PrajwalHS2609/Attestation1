"use client";
import { Typewriter } from "react-simple-typewriter";
import "./HomeHeader.css";
import HomeHeaderKey from "./HomeHeaderKey";

export default function HomeHeader() {
  return (
    <div className="header-container">
      <video autoPlay muted loop>
        <source src="videos/Attestationvid.mp4" type="video/mp4" />
        Your browser does not support video tag
      </video>{" "}
      <div className="header-cover">
        <div className="header-coverContent">
          <h2>
            Welcome To <br />
            Attestation Service <br />
            <span>
              <Typewriter
                words={["Bengaluru", "Chennai", "Mumbai", "Hyderabad"]}
                loop
              />
            </span>
          </h2>
        </div>
        <HomeHeaderKey />
      </div>
    </div>
  );
}
