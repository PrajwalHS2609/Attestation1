import Image from "next/image";
import MeaCommercialDocContent from "./MeaCommercialDocContent";
import meaCommercialImg from "@/media/images/Mea.jpg";
import "./MeaCommercialDoc.css";
export default function MeaCommercialDoc() {
  return (
    <div className="meaCommercial-container">
      <div className="meaCommercial-content">
        <MeaCommercialDocContent />
      </div>
      <div className="meaCommercial-content">
        <Image src={meaCommercialImg} alt="meaCommercialImg" />
      </div>
    </div>
  );
}
