import UkApostilleContent from "@/components/ApostilleCountries/UkApostille/UkApostilleContent";
import UkApostilleHead from "@/components/ApostilleCountries/UkApostille/UkApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UkFlag from "@/media/images/Countries_Flag/UK.png";

export const metadata = {
  title: "UK Apostille Services in Bangalore | Best UK Apostille Near Me",
  description:
    "UK Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/uk-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UkApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={UkFlag.src} alt="Uk Flag" />
      <UkApostilleHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <UkApostilleContent />
    </div>
  );
}
