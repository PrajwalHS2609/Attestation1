import AustraliaDegreeApostilleContent from "@/components/DegreeApostille/AustraliaDegreeApostille/AustraliaDegreeApostilleContent";
import AustraliaDegreeApostilleHead from "@/components/DegreeApostille/AustraliaDegreeApostille/AustraliaDegreeApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import AustraliaFlag from "@/media/images/Countries_Flag/australia.png";
export const metadata = {
  title:
    "Degree Certificate Apostille for Australia| Certificate Apostille Near Me",
  description:
    "Degree Certificate Apostille for Australia for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-apostille-for-australia",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function AustraliaApostilleDegree() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={AustraliaFlag.src}
        alt="Australia Flag Banner"
      />
      <AustraliaDegreeApostilleHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <AustraliaDegreeApostilleContent />
    </div>
  );
}
