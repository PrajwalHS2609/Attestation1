import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import SalaryCertificateContent from "@/components/SalaryCertificate/SalaryCertificateContent";
import SalaryCertificateHead from "@/components/SalaryCertificate/SalaryCertificateHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Salary Certificate Attestation in Bangalore | Certificate Attestation Fees Near Me",
  description:
    "Salary Certificate Attestation in Bangalore. Many individuals planning to work abroad, apply for a visa, or pursue residency in another country must submit a salary certificate duly attested by authorized government bodies.",
  canonical:
    "https://foreignembassyattestation.com/salary-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function CommercialDocumentsAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <SalaryCertificateHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <SalaryCertificateContent />{" "}
    </div>
  );
}
