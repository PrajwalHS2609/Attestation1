import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import StateHrdKeralaContent from "@/components/StateHrd/StateHrdKerala/StateHrdKeralaContent";
import StateHrdKeralaHead from "@/components/StateHrd/StateHrdKerala/StateHrdKeralaHead";
import keralaHrdBanner from "@/media/images/Hrd/KeralaHrd.png";
export const metadata = {
  title: "Kerala State HRD Attestation in Bangalore | HRD Attestation Near Me",
  description:
    "Kerala State HRD Attestation in Bangalore is a crucial process for individuals who need to authenticate their educational documents for international purposes. ",
  canonical:
    "https://foreignembassyattestation.com/kerala-state-hrd-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KeralaHrd() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={keralaHrdBanner.src} alt="Kerala Hrd Banner" />
      <StateHrdKeralaHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <StateHrdKeralaContent />
    </div>
  );
}
