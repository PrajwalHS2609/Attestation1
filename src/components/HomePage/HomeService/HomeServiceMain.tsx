"use client";
import "./HomeService.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";
import Apostille from "@/media/images/Service Images/Apostille.png";
import Attestation from "@/media/images/Service Images/Attestation.png";
import MOFA from "@/media/images/Service Images/MOFA.png";
import Pcc from "@/media/images/Service Images/Pcc.png";
import MEA from "@/media/images/Service Images/MEA.png";
import Wes from "@/media/images/Service Images/Wes.png";
import Translation from "@/media/images/Service Images/Translation.png";
import HRD from "@/media/images/Service Images/State HRD.png";
import Image from "next/image";

export default function HomeServiceMain() {
  const serviceData = [
    {
      id: 1,
      img: Attestation,
      serviceName: "Attestation",
      serviceDescription:
        "Attestation is the process of verifying the authenticity of documents by authorized officials,required for legal recognition in foreign countries.",
      link: "/attestation-services-in-bangalore",
    },
    {
      id: 2,
      img: Apostille,
      serviceName: "Apostille",
      serviceDescription:
        "Apostille is a form of document authentication issued by a designated authority for use in countries that are members of the Hague Convention.",
      link: "/apostille-services-in-bangalore",
    },
    {
      id: 3,
      img: MOFA,
      serviceName: "MOFA",
      serviceDescription:
        "MOFA (Ministry of Foreign Affairs) is responsible for the attestation and legalization of documents for international use, ensuring their authenticity and validity in foreign countries.",
      link: "/mofa-attestation-in-bangalore",
    },
    {
      id: 4,
      img: Pcc,
      serviceName: " PCC",
      serviceDescription:
        " PCC (Police Clearance Certificate) is an official document issued by police or government authorities certifying that an individual has no criminal record or pending cases.",
      link: "/pcc-verification-in-bangalore",
    },
    {
      id: 5,
      img: MEA,
      serviceName: "MEA",
      serviceDescription:
        "MEA (Ministry of External Affairs) is responsible for the attestation and legalization of documents for international use, ensuring their authenticity for foreign authorities.",
      link: "/mea-apostille-services-in-bangalore",
    },
    {
      id: 6,
      img: Wes,
      serviceName: "WES",
      serviceDescription:
        "WES (World Education Services) is an organization that evaluates and converts academic credentials from any country into their U.S. or Canadian equivalents for recognition.",
      link: "/wes-verification-attestation-in-bangalore",
    },
    {
      id: 7,
      img: Translation,
      serviceName: " Translation",
      serviceDescription:
        "Translation is the process of converting text from one language into another, ensuring the meaning and context remain accurate and clear in the target language.",
      link: "/",
    },
    {
      id: 8,
      img: HRD,
      serviceName: "State HRD ",
      serviceDescription:
        "State HRD (Human Resource Development) refers to the government department responsible for the attestation of educational documents for use abroad, verifying their authenticity.",
      link: "/state-hrd-attestation-in-bangalore",
    },
  ];
  return (
    <div className="homeServiceMain-container">
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          // Swiper-specific configuration
          onSwiper={(swiper) => {
            swiper.loopedSlides = 12; // Dynamically set loopedSlides on the Swiper instance
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide per view on small screens (e.g., mobile)
            },
            768: {
              slidesPerView: 2, // 2 slides per view on medium screens (e.g., tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides per view on large screens (e.g., desktop)
            },
          }}
        >
          {serviceData.map((x) => (
            <SwiperSlide key={x.id}>
              <div className="homeServiceMain-cardContainer" key={x.id}>
                <Link href={x.link}>
                  <div className="homeServiceMain-cardCover">
                    <div className="homeServiceMain-cardPara">
                      <p>{x.serviceDescription}</p>
                    </div>
                  </div>
                  <div className="homeServiceMain-cardImg">
                    <Image src={x.img} alt={x.serviceName} loading="lazy" />
                  </div>
                  <div className="homeServiceMain-cardHead">
                    <h4>{x.serviceName}</h4>
                    <h3>{x.serviceName}</h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
