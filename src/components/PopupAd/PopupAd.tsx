"use client";
import React, { useEffect, useState } from "react";
import "./PopupAd.css";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import popupImg from "@/media/images/pop-ad.png";
import { usePathname } from "next/navigation";
const PopupAd = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname(); // 👈 detect route

  useEffect(() => {
    setShowPopup(false); // Reset first

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 8 seconds

    return () => clearTimeout(timer); // Clear timeout on route change
  }, [pathname]); // 👈 run effect on each page change

  const handleExit = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;
  return (
    <div className="popup-container">
      <div className="popupExit">
        <FaXmark className="exit" onClick={handleExit} />
      </div>

      <div className="popup-content">
        <div className="popup-imgContainer">
          <Image src={popupImg} alt="" />
          <span>
            {" "}
            <button className="glass-btn">
              <a href="https://api.whatsapp.com/send?phone=916360226773">
                +91 6360226773
              </a>
            </button>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
