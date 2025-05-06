import Image from "next/image";
import React from "react";
import chooseRightBanner from "@/media/images/Blog/How to Choose the Right Agency for Embassy Attestation Services in Bangalore.png";
const ChooseRightAgencyImg = () => {
  return (
    <div className="blogImg-content">
      <Image src={chooseRightBanner} alt="choose Right Banner" />
    </div>
  );
};

export default ChooseRightAgencyImg;
