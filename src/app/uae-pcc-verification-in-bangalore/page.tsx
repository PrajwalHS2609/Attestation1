import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UaePccContent from "@/components/PccPage/UaePcc/UaePccContent";
import UaePccHead from "@/components/PccPage/UaePcc/UaePccHead";
import uaePccBanner from "@/media/images/Countries_Flag/UAE.png";
export const metadata = {
  title: "UAE PCC Verification in Bangalore | Best PCC Verification Near Me",
  description:
    "UAE PCC Verification in Bangalore is an essential process for individuals who require a Police Clearance Certificate (PCC) for various purposes such as employment, immigration, or residency.",
  canonical:
    "https://foreignembassyattestation.com/uae-pcc-verification-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UaePcc() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={uaePccBanner.src} alt="Uae Pcc Banner" />
      <UaePccHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <UaePccContent />
    </div>
  );
}
