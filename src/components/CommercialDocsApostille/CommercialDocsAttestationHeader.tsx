"use client";
import { Typewriter } from "react-simple-typewriter";
import "@/components/Style/style.css";
import HomeHeaderKey from "@/components/HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export default function CommercialApostilleHeader() {
  return (
    <>
      <div className="header-container">
        <Image src={commercialBanner} alt="attestationBanner" loading="lazy" />
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
