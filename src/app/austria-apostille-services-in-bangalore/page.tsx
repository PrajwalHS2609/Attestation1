import AustriaApostilleContent from "@/components/ApostilleCountries/AustriaApostille/AustriaApostilleContent";
import AustriaApostilleHead from "@/components/ApostilleCountries/AustriaApostille/AustriaApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import AustriaFlag from "@/media/images/Countries_Flag/austria.png";

export const metadata = {
  title:
    "Austria Apostille Services in Bangalore | Best Austria Apostille Near Me",
  description:
    "Austria Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/austria-apostille-services-in-bangalore ",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={AustriaFlag.src} alt="Austria Flag" />
      <AustriaApostilleHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <AustriaApostilleContent />
    </div>
  );
}
