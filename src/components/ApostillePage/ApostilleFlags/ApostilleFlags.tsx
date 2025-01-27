import Image from "next/image";
import "./ApostilleFlags.css";
import Link from "next/link";
import omanFlag from "@/media/images/flags/OmanFlag.jpg";
import italyFlag from "@/media/images/flags/ItalyFlag.jpg";
import germanyFlag from "@/media/images/flags/GermanyFlag.jpg";
import australiaFlag from "@/media/images/flags/AustraliaFlag.jpg";
import austriaFlag from "@/media/images/flags/AustriaFlag.jpg";
import franceFlag from "@/media/images/flags/FranceFlag.jpg";
import lithuaniaFlag from "@/media/images/flags/LithuaniaFlag.jpg";
import mexicoFlag from "@/media/images/flags/MexicoFlag.jpg";
import netherlandFlag from "@/media/images/flags/NetherlandFlag.jpg";
import ukFlag from "@/media/images/flags/UkFlag.jpg";
import usaFlag from "@/media/images/flags/UsaFlag.jpg";

export default function ApostilleFlag() {
  const flags = [
    {
      id: 1,
      name: "Oman ",
      img: omanFlag,
      link: "/oman-apostille-services-in-bangalore",
    },
    {
      id: 2,
      name: "Italy ",
      img: italyFlag,
      link: "/italy-apostille-services-in-bangalore",
    },
    {
      id: 3,
      name: "Germany ",
      img: germanyFlag,
      link: "/germany-apostille-services-in-bangalore",
    },
    {
      id: 4,
      name: "Australia",
      img: australiaFlag,
      link: "/australia-apostille-services-in-bangalore",
    },
    {
      id: 5,
      name: "Austria",
      img: austriaFlag,
      link: "/austria-apostille-services-in-bangalore",
    },
    {
      id: 6,
      name: "France",
      img: franceFlag,
      link: "/france-apostille-services-in-bangalore",
    },
    {
      id: 7,
      name: "Lithuania",
      img: lithuaniaFlag,
      link: "/lithuania-apostille-services-in-bangalore",
    },
    {
      id: 8,
      name: "Mexico ",
      img: mexicoFlag,
      link: "/mexico-apostille-services-in-bangalore",
    },
    {
      id: 9,
      name: "Netherlands",
      img: netherlandFlag,
      link: "/netherlands-apostille-services-in-bangalore",
    },
    {
      id: 10,
      name: "UK",
      img: ukFlag,
      link: "/uk-apostille-services-in-bangalore",
    },
    {
      id: 11,
      name: "USA",
      img: usaFlag,
      link: "/usa-apostille-services-in-bangalore",
    },
  ];
  return (
    <div className="apostilleFlag-container">
      {flags.map((x) => (
        <div className="apostilleFlag-cardContainer" key={x.id}>
          <Image src={x.img} alt={x.name} />
          <div className="apostilleFlag-cardCover">
            <h5>{x.name}</h5>
            <p>Embassy apostille</p>
            <Link href={x.link}>
              <button>Know More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
