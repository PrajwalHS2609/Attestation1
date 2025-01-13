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
          At Service Attestation1, we take pride in being a trusted leader in
          certificate attestation and apostille services. With over 15 years of
          expertise and a dedicated team of professionals, we have built a
          strong reputation for delivering fast, efficient, and reliable
          solutions.
        </p>
        <p>
          As a REGISTERED and ISO 9001:2015 certified company, we are officially
          recognized by the Government and multiple embassies. Our
          specialization includes attesting, authenticating, and legalizing
          various documents, covering both educational and non-educational
          certificates, such as marriage certificates, birth certificates,
          affidavits, and more.
        </p>
        <p>
          What makes us stand out? We provide 100% genuine attestation on all
          documents, ensuring authenticity and accuracy. Plus, our competitive
          pricing makes us the best choice in the industry.
        </p>
        <p>
          Trust Service Attestation1 for a seamless and hassle-free attestation
          experience. Let us handle the paperwork, so you can focus on what
          truly matters!
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
