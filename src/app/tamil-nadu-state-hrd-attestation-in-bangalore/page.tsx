import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import StateHrdTamilContent from "@/components/StateHrd/StateHrdTamil/StateHrdTamilContent";
import StateHrdTamilHead from "@/components/StateHrd/StateHrdTamil/StateHrdTamilHead";
import tamilHrdBanner from "@/media/images/Hrd/TamilNaduHrd.png";

export const metadata = {
  title:
    "Tamil Nadu State HRD Attestation in Bangalore | HRD Attestation Near Me",
  description:
    "Tamil Nadu State HRD Attestation in Bangalore is a crucial process for individuals who need to authenticate their educational documents for international purposes. ",
  canonical:
    "https://foreignembassyattestation.com/tamil-nadu-state-hrd-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function TamilHrd() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={tamilHrdBanner.src} alt="Tamil Hrd Banner" />
      <StateHrdTamilHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <StateHrdTamilContent />
    </div>
  );
}
