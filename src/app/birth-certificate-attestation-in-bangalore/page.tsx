import BirthCertificateContent from "@/components/BirthCertificate/BirthCertificateContent";
import BirthCertificateHead from "@/components/BirthCertificate/BirthCertificateHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import birthAttestationBanner from "@/media/images/birthCerti.png";

export const metadata = {
  title:
    "Birth Certificate Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Birth Certificate Attestation in Bangalore is an essential process for individuals who plan to travel abroad for education, employment, residence, or other purposes.",
  canonical:
    "https://foreignembassyattestation.com/birth-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BirthCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={birthAttestationBanner.src}
        alt="Birth Attestation Banner"
      />
      <BirthCertificateHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BirthCertificateContent />{" "}
    </div>
  );
}
