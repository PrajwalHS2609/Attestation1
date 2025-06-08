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
          Foreign Embassy Attestation is proud to be India’s most trusted name
          in certificate attestation and apostille services in Bangalore. With
          over 15 years of experience, the company has helped thousands of
          Indian students, professionals, and families complete their document
          attestation quickly and securely for international use.
        </p>
        <p>
          As a Government-registered and ISO 9001:2015 certified organization,
          officially recognized by various embassies and consulates, Foreign
          Embassy Attestation handles a wide range of document types, including
          educational, personal, and commercial certificates such as degree
          certificates, birth and marriage certificates, affidavits, and more.
        </p>
        <p>
          With a strong commitment to providing 100% genuine attestation,
          transparent and affordable pricing, reliable doorstep pickup and
          delivery, and fast turnaround with regular updates, they ensure a
          seamless and trustworthy experience.
        </p>
        <p>
          From Delhi to Dubai and Mumbai to Muscat, the team at Foreign Embassy
          Attestation guarantees global acceptance of your authenticated
          documents. Trust them for a smooth, secure, and stress-free
          attestation process so you can focus on your journey ahead.
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
