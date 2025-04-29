import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import TransferCertificateContent from "@/components/TransferCertificate/TransferCertificateContent";
import TransferCertificateHead from "@/components/TransferCertificate/TransferCertificateHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Transfer Certificate (TC) Attestation in Bangalore | Certificate Attestation Near Me ",
  description:
    "Transfer Certificate (TC) Attestation in Bangalore is a critical requirement for students and professionals who are planning to move abroad for education or employment. ",
  canonical:
    "https://foreignembassyattestation.com/transfer-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function TransferCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <TransferCertificateHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <TransferCertificateContent />{" "}
    </div>
  );
}
