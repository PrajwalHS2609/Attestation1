"use client";
import { Typewriter } from "react-simple-typewriter";
import "@/components/Style/style.css";
import HomeHeaderKey from "@/components/HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import flagBanner from "@/media/images/flags/Flags.jpg";
export default function ApostilleHeader() {
  return (
    <div className="header-container">
      <Image src={flagBanner} alt="flag Banner" />
      <div className="header-cover">
        <div className="header-coverContent">
          <h2>
            Our Certificate <br />
            Apostille Service in
            <br />
            <span>
              {" "}
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
