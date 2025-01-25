"use client";
import { Typewriter } from "react-simple-typewriter";
import "@/components/Style/style.css";
import HomeHeaderKey from "@/components/HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import PhilippinesFlag from "@/media/images/Countries_Flag/philippines.png";

export default function PhilippinesAttestationHeader() {
  return (
    <div className="header-container">
      <Image src={PhilippinesFlag} alt="PhilippinesFlag" />
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
        <HomeHeaderKey />
      </div>
    </div>
  );
}
