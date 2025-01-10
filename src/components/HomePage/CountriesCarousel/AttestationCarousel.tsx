"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UaeFlag from "@/media/images/flags/UaeFlag.png";
import QatarFlag from "@/media/images/flags/QatarFlag.jpg";
import KuwaitFlag from "@/media/images/flags/KuwaitFlag.jpg";
import SaudiFlag from "@/media/images/flags/SaudiFlag.jpg";
import BahrainFlag from "@/media/images/flags/BahrainFlag.jpg";
import ChinaFlag from "@/media/images/flags/ChinaFlag.jpg";
import VietnamFlag from "@/media/images/flags/VietnamFlag.jpg";
import TaiwanFlag from "@/media/images/flags/TaiwanFlag.jpg";
import EgyptFlag from "@/media/images/flags/EgyptFlag.jpg";
import PhilippinesFlag from "@/media/images/flags/PhilippinesFlag.png";
import MalaysiaFlag from "@/media/images/flags/MalaysiaFlag.png";
import NigeriaFlag from "@/media/images/flags/NigeriaFlag.jpg";
import Image from "next/image";
import "./CountriesCarousel.css";

export default function AttestationCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="apostilleCountries">
      <h3>Attestation Countries</h3>
      <div className="apostilleCountriesContent">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} // Server-side rendering
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {[
            {
              flag: UaeFlag,
              name: "UAE",
            },
            {
              flag: QatarFlag,
              name: "QATAR",
            },
            {
              flag: KuwaitFlag,
              name: "KUWAIT",
            },
            {
              flag: SaudiFlag,
              name: "SAUDI",
            },
            {
              flag: BahrainFlag,
              name: "BAHRAIN",
            },
            {
              flag: ChinaFlag,
              name: "CHINA",
            },
            {
              flag: VietnamFlag,
              name: "VIETNAM",
            },
            {
              flag: TaiwanFlag,
              name: "TAIWAN",
            },
            {
              flag: EgyptFlag,
              name: "EGYPT",
            },
            {
              flag: PhilippinesFlag,
              name: "PHILIPPINES",
            },
            {
              flag: MalaysiaFlag,
              name: "MALAYSIA",
            },
            {
              flag: NigeriaFlag,
              name: "NIGERIA",
            },
          ].map((country, index) => (
            <div key={index}>
              <div className="apostilleCountriesWrapper">
                <div className="item">
                  <Image
                    src={country.flag}
                    alt={`${country.name.toLowerCase()}Flag`}
                    loading="lazy"
                  />
                </div>
                <h6>{country.name}</h6>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
