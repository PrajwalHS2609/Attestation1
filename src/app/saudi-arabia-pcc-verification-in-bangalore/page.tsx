import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import SaudiPccContent from "@/components/PccPage/SaudiPcc/SaudiPccContent";
import SaudiPccHead from "@/components/PccPage/SaudiPcc/SaudiPccHead";
import saudiPccBanner from "@/media/images/Countries_Flag/Saudi Arabia.png";
export const metadata = {
  title:
    "Saudi Arabia PCC Verification in Bangalore | Best PCC Verification Near Me",
  description:
    "Saudi Arabia PCC Verification in Bangalore is an essential process for individuals who require a Police Clearance Certificate (PCC) for various purposes such as employment, immigration, or residency.",
  canonical:
    "https://foreignembassyattestation.com/saudi-arabia-pcc-verification-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function SaudiPcc() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={saudiPccBanner.src} alt="Saudi Pcc Banner" />
      <SaudiPccHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <SaudiPccContent />
    </div>
  );
}
