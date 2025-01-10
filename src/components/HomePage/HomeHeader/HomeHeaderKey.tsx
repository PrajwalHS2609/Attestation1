import Image from "next/image";
import "@/components/Style/style.css";

import Experience from "@/media/images/Banner Image Icon/Experience.png";
import documents from "@/media/images/Banner Image Icon/Documents.png";
import Approved from "@/media/images/Banner Image Icon/Approved.png";
import Trusted from "@/media/images/Banner Image Icon/Trusted.png";
export default function HomeHeaderKey() {
  const keyPoints = [
    { id: 1, icon: Experience, content: "15 YEARS OF EXPERIENCE" },
    { id: 2, icon: documents, content: "MORE THAN 5LAKH+ DOCUMENTS PROCESSED" },
    { id: 3, icon: Approved, content: "GOVT APPROVED AND ISO CERTIFIED" },
    { id: 4, icon: Trusted, content: "TRUSTED BY MORE THAN 30000+ CUSTOMERS" },
  ];
  return (
    <div className="header-coverContent">
      {keyPoints.map((x) => (
        <div className="header-keyContainer" key={x.id}>
          <div className="header-keyIconContainer">
            <Image src={x.icon} alt={x.content} />
          </div>
          <h6>{x.content}</h6>
        </div>
      ))}
    </div>
  );
}
