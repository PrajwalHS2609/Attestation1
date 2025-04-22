import LithuaniaApostilleContent from "@/components/ApostilleCountries/LithuaniaApostille/LithuaniaApostilleContent";
import LithuaniaApostilleHead from "@/components/ApostilleCountries/LithuaniaApostille/LithuaniaApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import lithuaniaFlag from "@/media/images/Countries_Flag/lithuania.png";

export const metadata = {
  title: "Lithuania Apostille Services in Bangalore | Best France Apostille Near Me",
  description:
    "Lithuania Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/lithuania-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={lithuaniaFlag.src} alt="lithuania Flag" />
      <LithuaniaApostilleHead/>
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <LithuaniaApostilleContent/>
    </div>
  );
}
