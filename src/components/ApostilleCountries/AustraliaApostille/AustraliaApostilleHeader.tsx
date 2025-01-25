"use client";
import { Typewriter } from "react-simple-typewriter";
import "@/components/Style/style.css";
import HomeHeaderKey from "@/components/HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import AustraliaFlag from "@/media/images/Countries_Flag/australia.png";

export default function AustraliaApostilleHeader() {
  return (
    <>
      <div className="header-container">
        <Image src={AustraliaFlag} alt="Australia Flag" />
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
          </span>{" "}
        </div>
      </div>
      <span className="headerKey-respContainer">
        <HomeHeaderKey />
      </span>
    </>
  );
}
