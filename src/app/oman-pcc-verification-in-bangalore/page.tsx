import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import OmanPccContent from "@/components/PccPage/OmanPcc/OmanPccContent";
import OmanPccHead from "@/components/PccPage/OmanPcc/OmanPccHead";
import omanPccBanner from "@/media/images/Countries_Flag/Oman.png";

export const metadata = {
  title: "Oman PCC Verification in Bangalore | Best PCC Verification Near Me",
  description:
    "Oman PCC Verification in Bangalore is an essential process for individuals who require a Police Clearance Certificate (PCC) for various purposes such as employment, immigration, or residency.",
  canonical:
    "https://foreignembassyattestation.com/oman-pcc-verification-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanPcc() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={omanPccBanner.src} alt="Oman Pcc Banner" />
      <OmanPccHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <OmanPccContent />
    </div>
  );
}
