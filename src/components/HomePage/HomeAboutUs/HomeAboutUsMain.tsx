import Image from "next/image";
import aboutUsImg from "@/media/images/aboutUs.png";
import price from "@/media/images/About Us - Features/Competitive Price.png";
import iso from "@/media/images/About Us - Features/ISO Certified.png";
import customer from "@/media/images/About Us - Features/25000+ Customers.png";

export default function HomeAboutUsMain() {
  const aboutUs = [
    { id: 1, img: price, text: "Competitive Price" },
    { id: 2, img: iso, text: "ISO Certified" },
    { id: 3, img: customer, text: "10000+ Customers" },
  ];
  return (
    <div className="homeAboutUsMain-container">
      <div className="homeAboutUsMain-content">
        <p>
          At Service Attestation1, we pride ourselves on being a leading expert
          in certificate attestation and apostille services. With 15+ years of
          experience and a team of dedicated professionals, we've earned a
          reputation for delivering fast, efficient, and reliable solutions.
        </p>
        <p>
          Our credentials speak for themselves: we're a REGISTERED and ISO
          9001:2015 certified company, recognized by the Government and various
          embassies. We specialize in attesting, authenticating, and legalizing
          all types of certificates, including educational and non-educational
          documents like marriage certificates, birth certificates, and
          affidavits.
        </p>
        <p>
          What sets us apart? We guarantee 100% genuine attestation on all
          certificates, and our competitive rates are unbeatable in the market.
          Trust us to handle your attestation needs with professionalism,
          precision, and a personalized touch. Let us take care of the
          paperwork, so you can focus on what matters most!
        </p>
        <div className="homeAboutUsMain-itemWrapper">
          {aboutUs.map((x) => (
            <div className="homeAboutUsMain-item" key={x.id}>
              <Image src={x.img} alt={x.text} />
              <h6>{x.text}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="homeAboutUsMain-content">
        <Image src={aboutUsImg} alt="aboutUsImg" />
      </div>
    </div>
  );
}
