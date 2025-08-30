import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import StateHrdKarnatakaContent from "@/components/StateHrd/StateHrdKarnataka/StateHrdKarnatakaContent";
import StateHrdKarnatakaHead from "@/components/StateHrd/StateHrdKarnataka/StateHrdKarnatakaHead";
import karnatakaHrdBanner from "@/media/images/Hrd/KarnatakaHrd.png";

export const metadata = {
  title:
    "Karnataka State HRD Attestation in Bangalore | HRD Attestation Near Me",
  description:
    "Karnataka State HRD Attestation in Bangalore is a crucial process for individuals who need to authenticate their educational documents for international purposes. ",
  canonical:
    "https://foreignembassyattestation.com/karnataka-state-hrd-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function KaranatakaStateHrd() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={karnatakaHrdBanner.src}
        alt="Karnataka Hrd Banner"
      />
      <StateHrdKarnatakaHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <StateHrdKarnatakaContent />
    </div>
  );
}
