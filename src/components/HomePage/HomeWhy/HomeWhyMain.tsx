import "./HomeWhy.css";
import Image from "next/image";
import whyImgBanner from "@/media/images/whyChooseImg.png";
import GovernmentApproved from "@/media/images/Attributes/Government Approved.png";
import Efficiency from "@/media/images/Attributes/Efficiency.png";
import Expertise from "@/media/images/Attributes/Expertise.png";
import CustomerSupport from "@/media/images/Attributes/24x7 Customer Support.png";
import intReach from "@/media/images/Attributes/International Reach.png";
import Transparency from "@/media/images/Attributes/Transparency.png";
import Secure from "@/media/images/Attributes/Secure Handling.png";
import Trust from "@/media/images/Attributes/Trusted by Clients.png";
import Price from "@/media/images/Attributes/Competitive Pricing.png";
import Online from "@/media/images/Attributes/Online Tracking.png";
import Legal from "@/media/images/Attributes/Legal Compliance.png";
import Time from "@/media/images/Attributes/Timely Delivery.png";

export default function HomeWhyMain() {
  const benefits = [
    {
      id: 1,
      img: GovernmentApproved,
      txt: "Government Approved",
    },
    {
      id: 2,
      img: Efficiency,
      txt: "Efficiency",
    },
    {
      id: 3,
      img: Expertise,
      txt: "Expertise",
    },
    {
      id: 4,
      img: CustomerSupport,
      txt: "24x7 Customer Support",
    },
    {
      id: 5,
      img: intReach,
      txt: "International Reach",
    },
    {
      id: 6,
      img: Transparency,
      txt: "Transparency",
    },
    {
      id: 7,
      img: Secure,
      txt: "Secure Handling",
    },
    {
      id: 8,
      img: Trust,
      txt: "Trusted by Clients",
    },
    {
      id: 9,
      img: Price,
      txt: "Competitive Pricing",
    },
    {
      id: 10,
      img: Online,
      txt: "Online Tracking",
    },
    {
      id: 11,
      img: Legal,
      txt: "Legal Compliance",
    },
    {
      id: 12,
      img: Time,
      txt: "Free Home Pickup and  Timely Delivery",
    },
  ];
  return (
    <div className="homeWhyMain-container">
      <div className="homeWhyMain-imgContainer">
        <Image src={whyImgBanner} alt="whyImgBanner" loading="lazy" />
      </div>
      <div className="homeWhyMain-content">
        {benefits.map((x) => (
          <div className="homeWhyMain-cardContainer" key={x.id}>
            <div className="homeWhyMain-cardWrapper">
              <div className="homeWhyMain-cardIcon">
                <Image src={x.img} alt={x.txt} />
              </div>
              <div className="homeWhyMain-Txt">
                <p>{x.txt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
