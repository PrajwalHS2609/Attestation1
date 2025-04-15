import AustraliaApostilleContent from "@/components/ApostilleCountries/AustraliaApostille/AustraliaApostilleContent";
import AustraliaApostilleHead from "@/components/ApostilleCountries/AustraliaApostille/AustraliaApostilleHead";
import AustraliaFlag from "@/media/images/Countries_Flag/australia.png";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export const metadata = {
  title:
    "Australia Apostille Services in Bangalore | Australia Apostille Near Me",
  description:
    "Australia Apostille Services in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested.  ",
  canonical:
    "https://foreignembassyattestation.com/australia-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function AustraliaApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={AustraliaFlag.src} alt="Australia Flag" />
      <AustraliaApostilleHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <AustraliaApostilleContent />
    </div>
  );
}
