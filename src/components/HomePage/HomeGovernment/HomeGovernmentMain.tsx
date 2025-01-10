import Link from "next/link";
import "./HomeGovernment.css";
import IndianEmbassy from "@/media/images/Embassy/IndianMea.png";
import UaeEmbassy from "@/media/images/Embassy/UAE Embassy.png";
import QatarEmbassy from "@/media/images/Embassy/Qatar Embassy.png";
import KuwaitEmbassy from "@/media/images/Embassy/Kuwait.png";
import BahrainEmbassy from "@/media/images/Embassy/Bahrain.png";
import SaudiEmbassy from "@/media/images/Embassy/Saudi.png";
import Image from "next/image";

export default function HomeGovernmentMain() {
  const govtApproved = [
    { id: 1, embassy: IndianEmbassy, name: "Indian MEA", link: "/" },
    { id: 2, embassy: UaeEmbassy, name: "UAE Embassy", link: "/" },
    { id: 3, embassy: QatarEmbassy, name: "Qatar Embassy", link: "/" },
    { id: 4, embassy: KuwaitEmbassy, name: "Kuwait Embassy", link: "/" },
    { id: 5, embassy: BahrainEmbassy, name: "Bahrain Embassy", link: "/" },
    { id: 6, embassy: SaudiEmbassy, name: "Saudi Embassy", link: "/" },
  ];
  return (
    <div className="homeGovernmentMain-container">
      {govtApproved.map((x) => (
        <div className="homeGovernmentMain-cardContainer" key={x.id}>
          <Image src={x.embassy} alt={x.name} loading="lazy" />
          <div className="homeGovernmentMain-cardCover"></div>
          <div className="homeGovernmentMain-cardName">
            <h3>
              <Link href={x.link}>{x.name}</Link>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
