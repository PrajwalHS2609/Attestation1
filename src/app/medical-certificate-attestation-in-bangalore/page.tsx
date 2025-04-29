import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MedicalCertificateContent from "@/components/MedicalCertificate/MedicalCertificateContent";
import MedicalCertificateHead from "@/components/MedicalCertificate/MedicalCertificateHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Medical Certificate Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Medical Certificate Attestation in Bangalore. Whether you are applying for a visa, planning to work, study, or migrate to another country, you might be required to submit a verified medical certificate to the respective authorities.",
  canonical:
    "https://foreignembassyattestation.com/medical-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MedicalCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <MedicalCertificateHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MedicalCertificateContent />{" "}
    </div>
  );
}
