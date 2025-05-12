import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import StateHrdAndhraContent from "@/components/StateHrd/StateHrdAndhra/StateHrdAndhraContent";
import StateHrdAndhraHead from "@/components/StateHrd/StateHrdAndhra/StateHrdAndhraHead";
import andhraHrdBanner from "@/media/images/Hrd/AndhraHrd.png";

export const metadata = {
  title:
    "Andhra Pradesh State HRD Attestation in Bangalore | HRD Attestation Near Me",
  description:
    "Andhra Pradesh State HRD Attestation in Bangalore is a crucial process for individuals who need to authenticate their educational documents for international purposes. ",
  canonical:
    "https://foreignembassyattestation.com/andhra-pradesh-state-hrd-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function AndhraHrd() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={andhraHrdBanner.src} alt="Andhra Hrd Banner" />
      <StateHrdAndhraHead />
      <HomeService />
      <HomeCountries />
      <HomeBlog />
      <HomeNews />
      <StateHrdAndhraContent />
    </div>
  );
}
