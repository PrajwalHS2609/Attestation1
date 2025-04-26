import LithuaniaDegreeApostilleContent from "@/components/DegreeApostille/LithuaniaDegreeApostille/LithuaniaDegreeApostilleContent";
import LithuaniaDegreeApostilleHead from "@/components/DegreeApostille/LithuaniaDegreeApostille/LithuaniaDegreeApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import LithuaniaFlag from "@/media/images/Countries_Flag/lithuania.png";
export const metadata = {
  title:
    "Degree Certificate Apostille for Lithuania| Certificate Apostille Near Me",
  description:
    "Degree Certificate Apostille for Lithuania for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-apostille-for-lithuania",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function LithuaniaApostilleDegree() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={LithuaniaFlag.src}
        alt="Lithuania Flag Banner"
      />
      <LithuaniaDegreeApostilleHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <LithuaniaDegreeApostilleContent />
    </div>
  );
}
