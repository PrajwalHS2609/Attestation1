import DegreeAttestationCertificateContent from "@/components/DegreeAttestationCertificate/DegreeAttestationCertificateContent";
import DegreeAttestationHead from "@/components/DegreeAttestationCertificate/DegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import degreeBanner from "@/media/images/degreeCertificate.png";

export const metadata = {
  title:
    "Degree Certificate Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation in Bangalore. It involves authenticating a degree certificate, ensuring it is recognized and accepted in foreign countries that are part of the Hague Attestation Convention.",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DegreeCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={degreeBanner.src} alt="degree Banner" />
      <DegreeAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <DegreeAttestationCertificateContent />
    </div>
  );
}
