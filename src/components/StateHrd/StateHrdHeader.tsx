"use client";
import { Typewriter } from "react-simple-typewriter";
import "@/components/Style/style.css";
import HomeHeaderKey from "@/components/HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import stateHrd from "@/media/images/stateHrd.jpg";
export default function StateHrdHeader() {
  return (
    <div className="header-container">
      <Image src={stateHrd} alt="state Hrd" />
      <div className="header-cover">
        <div className="header-coverContent">
          <h2>
            State HRD and <br />
            Home Department in
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
