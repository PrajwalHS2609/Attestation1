"use client";
import { Typewriter } from "react-simple-typewriter";
import "@/components/Style/style.css";
import HomeHeaderKey from "@/components/HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import VietnamFlag from "@/media/images/Countries_Flag/vietnam.png";
export default function VietnamAttestationHeader() {
  return (
    <div className="header-container">
      <Image src={VietnamFlag} alt="VietnamFlag" />
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
