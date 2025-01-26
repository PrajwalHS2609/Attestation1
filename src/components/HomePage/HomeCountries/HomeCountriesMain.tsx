import australiaFlag from "@/media/images/Countries_Flag/australia.png";
import austriaFlag from "@/media/images/Countries_Flag/austria.png";
import bahrainFlag from "@/media/images/Countries_Flag/Baharain.png";
import egyptFlag from "@/media/images/Countries_Flag/Egypt.png";
import franceFlag from "@/media/images/Countries_Flag/France.png";
import germanyFlag from "@/media/images/Countries_Flag/Germany.png";
import italyFlag from "@/media/images/Countries_Flag/Italy.png";
import kuwaitFlag from "@/media/images/Countries_Flag/Kuwait.png";
import malaysiaFlag from "@/media/images/Countries_Flag/Malaysia.png";
import mexicoFlag from "@/media/images/Countries_Flag/Mexico.png";
import netherlandFlag from "@/media/images/Countries_Flag/Netherlands.png";
import nigeriaFlag from "@/media/images/Countries_Flag/nigeria.png";
import omanFlag from "@/media/images/Countries_Flag/Oman.png";
import philippinesFlag from "@/media/images/Countries_Flag/philippines.png";
import qatarFlag from "@/media/images/Countries_Flag/Qatar.png";
import saudiFlag from "@/media/images/Countries_Flag/Saudi Arabia.png";
import taiwanFlag from "@/media/images/Countries_Flag/taiwan.png";
import uaeFlag from "@/media/images/Countries_Flag/UAE.png";
import ukFlag from "@/media/images/Countries_Flag/UK.png";
import usaFlag from "@/media/images/Countries_Flag/USA.png";
import vietnamFlag from "@/media/images/Countries_Flag/vietnam.png";
import chinaFlag from "@/media/images/Countries_Flag/chinaFlag.png";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function HomeCountriesMain() {
  const countries = [
    {
      id: 1,
      flagImg: australiaFlag,
      name: "Australia",
      link: "australia-apostille-services-in-bangalore",
    },
    { id: 2, flagImg: austriaFlag, name: "Austria", link: "" },
    {
      id: 3,
      flagImg: bahrainFlag,
      name: "Baharain",
      link: "bahrain-embassy-attestation-in-bangalore",
    },
    {
      id: 4,
      flagImg: egyptFlag,
      name: "Egypt",
      link: "egypt-embassy-attestation-in-bangalore",
    },
    { id: 5, flagImg: franceFlag, name: "France", link: "" },
    {
      id: 6,
      flagImg: germanyFlag,
      name: "Germany",
      link: "germany-apostille-services-in-bangalore",
    },
    {
      id: 7,
      flagImg: italyFlag,
      name: "Italy",
      link: "italy-apostille-services-in-bangalore",
    },
    {
      id: 8,
      flagImg: kuwaitFlag,
      name: "Kuwait",
      link: "kuwait-embassy-attestation-in-bangalore",
    },
    {
      id: 9,
      flagImg: malaysiaFlag,
      name: "Malaysia",
      link: "malaysia-embassy-attestation-in-bangalore",
    },
    { id: 10, flagImg: mexicoFlag, name: "Mexico", link: "" },
    { id: 11, flagImg: netherlandFlag, name: "Netherlands", link: "" },
    {
      id: 12,
      flagImg: nigeriaFlag,
      name: "nigeria",
      link: "nigeria-embassy-attestation-in-bangalore",
    },
    {
      id: 13,
      flagImg: omanFlag,
      name: "Oman",
      link: "oman-apostille-services-in-bangalore",
    },
    {
      id: 14,
      flagImg: philippinesFlag,
      name: "Philippines",
      link: "philippines-embassy-attestation-in-bangalore",
    },
    {
      id: 15,
      flagImg: qatarFlag,
      name: "Qatar",
      link: "qatar-embassy-attestation-in-bangalore",
    },
    {
      id: 16,
      flagImg: saudiFlag,
      name: "Saudi Arabia",
      link: "saudi-arabia-embassy-attestation-in-bangalore",
    },
    {
      id: 17,
      flagImg: taiwanFlag,
      name: "Taiwan",
      link: "taiwan-embassy-attestation-in-bangalore",
    },
    {
      id: 18,
      flagImg: uaeFlag,
      name: "UAE",
      link: "uae-embassy-attestation-in-bangalore",
    },
    { id: 19, flagImg: ukFlag, name: "UK", link: "" },
    { id: 20, flagImg: usaFlag, name: "USA", link: "" },
    {
      id: 21,
      flagImg: vietnamFlag,
      name: "Vietnam",
      link: "vietnam-embassy-attestation-in-bangalore",
    },
    {
      id: 22,
      flagImg: chinaFlag,
      name: "China",
      link: "china-embassy-attestation-in-bangalore",
    },
  ];
  return (
    <div className="homeCountriesMain-container">
      <Marquee>
        {countries.map((x) => (
          <div className="homeCountriesMain-marqueeCard" key={x.id}>
            <Link href={x.link}>
              <Image src={x.flagImg} alt={x.name} loading="lazy" />

              <div className="homeCountriesMain-marqueeCover">
                <h3>{x.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
