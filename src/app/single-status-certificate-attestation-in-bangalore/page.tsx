import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import SingleStatusCertificateContent from "@/components/SingleStatusCertificate/SingleStatusCertificateContent";
import SingleStatusCertificateHead from "@/components/SingleStatusCertificate/SingleStatusCertificateHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Single Status Certificate Attestation in Bangalore | Certificate Attestation Near Me ",
  description:
    "Single Status Certificate Attestation in Bangalore. This certificate is often required for various reasons, such as for visa applications, marriage registration, immigration, or other legal processes.",
  canonical:
    "https://foreignembassyattestation.com/single-status-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function SingleStatusCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <SingleStatusCertificateHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <SingleStatusCertificateContent />{" "}
    </div>
  );
}
