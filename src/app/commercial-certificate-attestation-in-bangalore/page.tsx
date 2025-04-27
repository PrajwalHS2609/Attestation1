import CommercialCertificateContent from "@/components/CommercialCertificate/CommercialCertificateContent";
import CommercialCertificateHead from "@/components/CommercialCertificate/CommercialCertificateHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Commercial Certificate Attestation in Bangalore | Certificate Attestation Fees Near Me",
  description:
    "Commercial Certificate Attestation in Bangalore. Whether you are an entrepreneur, business executive, or corporate legal advisor, understanding the intricacies of this process is vital to smoothen your international dealings.",
  canonical:
    "https://foreignembassyattestation.com/commercial-certificate-attestation-in-bangalore",
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
      <CommercialCertificateHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <CommercialCertificateContent />{" "}
    </div>
  );
}
