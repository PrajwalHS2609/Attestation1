"use client";
import { Typewriter } from "react-simple-typewriter";
import "./HomeHeader.css";
import HomeHeaderKey from "./HomeHeaderKey";

export default function HomeHeader() {
  return (
    <>
      <div className="header-container">
        <video autoPlay muted loop>
          <source src="videos/Attestationvid.mp4" type="video/mp4" />
          Your browser does not support video tag
        </video>{" "}
        <div className="header-cover">
          <div className="header-coverContent">
            <h2>
              <Typewriter
                words={[
                  "Maximize Visibility  with Powerful SEO",
                  "Sleek, Mobile-Responsive Website Design",
                  "Convert Visitors into Loyal Customers",
                  "Smart Lead Generation for Business Growth",
                  "Amplify Your Brand with High Online Reach",
                  "Stay Ahead with Cutting-Edge Digital Features",
                ]}
                loop
              />
            </h2>
          </div>
          <span className="headerKey-container">
            <HomeHeaderKey />
          </span>
        </div>
      </div>
      <span className="headerKey-respContainer">
        <HomeHeaderKey />
      </span>
    </>
  );
}
