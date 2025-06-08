import DegreeApostilleCertificateContent from "@/components/DegreeApostilleCertificate/DegreeApostilleCertificateContent";
import DegreeApostilleHead from "@/components/DegreeApostilleCertificate/DegreeApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import degreeBanner from "@/media/images/degreeCertificate.png";

export const metadata = {
  title:
    "Degree Certificate Apostille in Bangalore | Certificate Apostille Near Me",
  description:
    "Degree Certificate Apostille in Bangalore. It involves authenticating a degree certificate, ensuring it is recognized and accepted in foreign countries that are part of the Hague Apostille Convention.",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-apostille-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DegreeCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={degreeBanner.src} alt="degree Banner" />
      <DegreeApostilleHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <DegreeApostilleCertificateContent />
    </div>
  );
}
