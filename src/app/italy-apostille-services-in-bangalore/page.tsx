import ItalyApostilleContent from "@/components/ApostilleCountries/ItalyApostille/ItalyApostilleContent";
import ItalyApostilleHead from "@/components/ApostilleCountries/ItalyApostille/ItalyApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import ItalyFlag from "@/media/images/Countries_Flag/Italy.png";

export const metadata = {
  title: "Italy Apostille Services in Bangalore | Italy Apostille Near Me",
  description:
    "Italy Apostille Services in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/italy-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ItalyApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={ItalyFlag.src} alt="Italy Flag" />
      <ItalyApostilleHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <ItalyApostilleContent />
    </div>
  );
}
