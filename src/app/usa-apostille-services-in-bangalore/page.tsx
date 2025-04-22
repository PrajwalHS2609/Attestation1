import UsaApostilleContent from "@/components/ApostilleCountries/UsaApostille/UsaApostilleContent";
import UsaApostilleHead from "@/components/ApostilleCountries/UsaApostille/UsaApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UsaFlag from "@/media/images/Countries_Flag/USA.png";
export const metadata = {
  title: "USA Apostille Services in Bangalore | Best USA Apostille Near Me",
  description:
    "USA Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/usa-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UsaApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={UsaFlag.src} alt="Usa Flag" />
      <UsaApostilleHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <UsaApostilleContent />
    </div>
  );
}
