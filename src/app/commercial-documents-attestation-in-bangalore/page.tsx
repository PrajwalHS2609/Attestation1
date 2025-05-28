import CommercialDocsAttestationContent from "@/components/CommercialDocsAttestation/CommercialDocsAttestationContent";
import CommercialAttestationHead from "@/components/CommercialDocsAttestation/CommercialDocsAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import commercialBanner from "@/media/images/commercialDocsBanner.png";

export const metadata = {
  title:
    "Commercial Documents Attestation in Bangalore | Documents Attestation Near Me",
  description:
    "Commercial Documents Attestation in Bangalore. This Attestation is necessary to ensure that the documents are legally recognized in foreign countries, facilitating smooth business operations and legal compliance abroad.",
  canonical:
    "https://foreignembassyattestation.com/commercial-documents-Attestation-in-bangalore",
  keywords: [
    "Attestation, Attestation, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function CommercialDocumentsAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="Commercial Banner"
      />
      <CommercialAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <CommercialDocsAttestationContent/>
    </div>
  );
}
