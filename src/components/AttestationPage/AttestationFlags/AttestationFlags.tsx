import Image from "next/image";
import "./AttestationFlags.css";
import Link from "next/link";
import uaeFlag from "@/media/images/flags/UaeFlag.png";
import qatarFlag from "@/media/images/flags/QatarFlag.jpg";
import kuwaitFlag from "@/media/images/flags/KuwaitFlag.jpg";
import saudiFlag from "@/media/images/flags/SaudiFlag.jpg";
import bahrainFlag from "@/media/images/flags/BahrainFlag.jpg";
import chinaFlag from "@/media/images/flags/ChinaFlag.jpg";
import vietnamFlag from "@/media/images/flags/VietnamFlag.jpg";
import taiwanFlag from "@/media/images/flags/TaiwanFlag.jpg";
import egyptFlag from "@/media/images/flags/EgyptFlag.jpg";
import philippinesFlag from "@/media/images/flags/PhilippinesFlag.png";
import malaysiaFlag from "@/media/images/flags/MalaysiaFlag.png";
import nigeriaFlag from "@/media/images/flags/NigeriaFlag.jpg";

export default function AttestationFlag() {
  const flags = [
    { id: 1, name: "UAE", img: uaeFlag, link: "/" },
    {
      id: 2,
      name: "Qatar ",
      img: qatarFlag,
      link: "/",
    },
    {
      id: 3,
      name: "Kuwait ",
      img: kuwaitFlag,
      link: "/",
    },
    {
      id: 4,
      name: "Saudi ",
      img: saudiFlag,
      link: "/",
    },
    {
      id: 5,
      name: "Bahrain",
      img: bahrainFlag,
      link: "/",
    },
    {
      id: 6,
      name: "Nigeria",
      img: nigeriaFlag,
      link: "/",
    },
    {
      id: 7,
      name: "China",
      img: chinaFlag,
      link: "/",
    },
    {
      id: 8,
      name: "Vietnam",
      img: vietnamFlag,
      link: "/",
    },
    {
      id: 9,
      name: "Taiwan",
      img: taiwanFlag,
      link: "/",
    },
    {
      id: 10,
      name: "Egypt",
      img: egyptFlag,
      link: "/",
    },
    {
      id: 11,
      name: "Philippines",
      img: philippinesFlag,
      link: "/",
    },
    {
      id: 12,
      name: "Malaysia",
      img: malaysiaFlag,
      link: "/",
    },
  ];
  return (
    <div className="attestationFlag-container">
      {flags.map((x) => (
        <div className="attestationFlag-cardContainer" key={x.id}>
          <Image src={x.img} alt={x.name} loading="lazy" />
          <div className="attestationFlag-cardCover">
            <h5>{x.name}</h5>
            <p>Embassy Attestation</p>
            <Link href={x.link}>
              <button>Know More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
