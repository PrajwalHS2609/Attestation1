"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OmanFlag from "@/media/images/flags/OmanFlag.jpg";
import ItalyFlag from "@/media/images/flags/ItalyFlag.jpg";
import GermanyFlag from "@/media/images/flags/GermanyFlag.jpg";
import AustraliaFlag from "@/media/images/flags/AustraliaFlag.jpg";
import AustriaFlag from "@/media/images/flags/AustriaFlag.jpg";
import FranceFlag from "@/media/images/flags/FranceFlag.jpg";
import LithuaniaFlag from "@/media/images/flags/LithuaniaFlag.jpg";
import MexicoFlag from "@/media/images/flags/MexicoFlag.jpg";
import NetherlandFlag from "@/media/images/flags/NetherlandFlag.jpg";
import UkFlag from "@/media/images/flags/UkFlag.jpg";
import UsaFlag from "@/media/images/flags/UsaFlag.jpg";
import Image from "next/image";
import "./CountriesCarousel.css";

export default function ApostilleCarousel() {
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
      <h3>Apostille Countries</h3>
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
              flag: OmanFlag,
              name: "OMAN",
            },
            {
              flag: ItalyFlag,
              name: "ITALY",
            },
            {
              flag: GermanyFlag,
              name: "GERMANY",
            },
            {
              flag: AustraliaFlag,
              name: "AUSTRALIA",
            },
            {
              flag: AustriaFlag,
              name: "AUSTRIA",
            },
            {
              flag: FranceFlag,
              name: "FRANCE",
            },
            {
              flag: LithuaniaFlag,
              name: "LITHUANIA",
            },
            {
              flag: MexicoFlag,
              name: "MEXICO",
            },
            {
              flag: NetherlandFlag,
              name: "NETHERLAND",
            },
            {
              flag: UkFlag,
              name: "UK",
            },
            {
              flag: UsaFlag,
              name: "USA",
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
