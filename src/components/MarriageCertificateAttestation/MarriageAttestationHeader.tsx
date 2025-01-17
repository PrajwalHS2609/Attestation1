"use client"
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import HomeHeaderKey from "../HomePage/HomeHeader/HomeHeaderKey";
import marriageAttestationBanner from "@/media/images/marriageCerti.png"
export default function MarriageAttestationHeader(){
return(
    <div className="header-container">
    <Image src={marriageAttestationBanner} alt="marriage Attestation Banner" />
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
  </div>)
}