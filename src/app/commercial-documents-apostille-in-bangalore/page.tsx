import CommercialDocsApostilleContent from "@/components/CommercialDocsApostille/CommercialDocsApostilleContent";
import CommercialApostilleHead from "@/components/CommercialDocsApostille/CommercialDocsApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import commercialBanner from "@/media/images/commercialDocsBanner.png";

export const metadata = {
  title:
    "Commercial Documents Apostille in Bangalore | Documents Apostille Near Me",
  description:
    "Commercial Documents Apostille in Bangalore. This apostille is necessary to ensure that the documents are legally recognized in foreign countries, facilitating smooth business operations and legal compliance abroad.",
  canonical:
    "https://foreignembassyattestation.com/commercial-documents-apostille-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function CommercialDocumentsApostille() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="Commercial Banner"
      />
      <CommercialApostilleHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />

      <CommercialDocsApostilleContent />
    </div>
  );
}
