import FranceDegreeApostilleContent from "@/components/DegreeApostille/FranceDegreeApostille/FranceDegreeApostilleContent";
import FranceDegreeApostilleHead from "@/components/DegreeApostille/FranceDegreeApostille/FranceDegreeApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import FranceFlag from "@/media/images/Countries_Flag/France.png";
export const metadata = {
  title:
    "Degree Certificate Apostille for France| Certificate Apostille Near Me",
  description:
    "Degree Certificate Apostille for France for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-apostille-for-france",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function FranceApostilleDegree() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={FranceFlag.src} alt="France Flag Banner" />
      <FranceDegreeApostilleHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <FranceDegreeApostilleContent />
    </div>
  );
}
