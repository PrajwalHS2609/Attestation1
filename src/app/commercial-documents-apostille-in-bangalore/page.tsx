
import CommercialApostilleHead from "@/components/CommercialDocsApostille/CommercialDocsApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
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
      <HeaderComponent imageSrc={commercialBanner.src} alt="Commercial Banner" />
      <CommercialApostilleHead />
    </div>
  );
}
