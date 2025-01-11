import Image from "next/image";
import "./MofaCountries.css";
import uaeMofa from "@/media/images/MofaImgs/MofaUae.jpg";
import qatarMofa from "@/media/images/MofaImgs/MofaQatar.jpg";
import saudiMofa from "@/media/images/MofaImgs/MofaSaudi.jpg";
import bahrainMofa from "@/media/images/MofaImgs/MofaBahrain.jpg";
import kuwaitMofa from "@/media/images/MofaImgs/MofaKuwait.jpg";

export default function MofaCountries() {
  const mofaCountries = [
    {
      id: 1,
      img: uaeMofa,
      head: "MOFA UAE",
      para: "We also do Ministry of Foreign Affairs of UAE (MOFA of UAE)* After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes 8 working days for MOFA attestation from UAE.",
    },
    {
      id: 2,
      img: qatarMofa,
      head: "MOFA QATAR",
      para: "We also do Ministry of Foreign Affairs of Qatar (MOFA of Qatar)* After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes 8 working days for MOFA attestation from Qatar.",
    },
    {
      id: 3,
      img: saudiMofa,
      head: "MOFA SAUDI",
      para: "We also do Ministry of Foreign Affairs of Saudi Arabia (MOFA of Saudi) After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes minimum 40 working days & upto 6 month for MOFA attestation from Saudi Arabia.",
    },
    {
      id: 4,
      img: bahrainMofa,
      head: "MOFA BAHRAIN",
      para: "We also do Ministry of Foreign Affairs of Bahrain (MOFA of Bahrain) After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes addtional time/days for MOFA attestation from Bahrain.",
    },
    {
      id: 5,
      img: kuwaitMofa,
      head: "MOFA KUWAIT",
      para: "We also do Ministry of Foreign Affairs of Kuwait (MOFA of Kuwait)* After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment.",
    },
  ];
  return (
    <div className="mofaCountries-container">
      {mofaCountries.map((x) => (
        <div className="mofaCountries-content" key={x.id}>
          <div className="mofaCountries-item">
            <Image src={x.img} alt={x.head} />
          </div>
          <div className="mofaCountries-item">
            <h4>{x.head}</h4>
            <p>{x.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
