"use client";
import HomeHeaderKey from "../HomePage/HomeHeader/HomeHeaderKey";
import Image from "next/image";
import "@/components/Style/style.css";
interface HeaderProps {
  imageSrc: string;
  alt: string;
  title:string;
}
export default function SanityHeader({ imageSrc, alt,title }: HeaderProps) {
  return (
    <>
      <div className="header-container">
        <Image src={imageSrc} alt={alt} fill />
        <div className="header-cover">
          <div className="header-coverContent">
            <h1>
            {title}
            </h1>
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
