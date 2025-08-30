import ApostilleCertificate from "@/components/ApostillePage/ApostilleCertificate";
import ApostilleContent from "@/components/ApostillePage/ApostilleContent";
import ApostilleFlag from "@/components/ApostillePage/ApostilleFlags/ApostilleFlags";
import ApostilleHead from "@/components/ApostillePage/ApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import apostilleBanner from "@/media/images/apostilleBanner.png";

export const metadata = {
  title: "Apostille Services in Bangalore – Embassy Apostille in Bangalore",
  description:
    "Apostille Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents apostille. Call Today!",
  canonical:
    "https://foreignembassyattestation.com/apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Attestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={apostilleBanner.src} alt="apostille Banner" />
      <ApostilleHead />
      <ApostilleCertificate />
      <ApostilleFlag />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <ApostilleContent />
    </div>
  );
}
