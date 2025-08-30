import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeSeoContent2 from "@/components/HomePage/HomeSeo/HomeSeoContent2";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import StateHomeDepartmentBlore from "@/components/StateHrd/HomeDepartmentBlore";
import StateHrdCommercial from "@/components/StateHrd/StateHrdCommercial";
import StateHrdHead from "@/components/StateHrd/StateHrdHead";
import "@/components/HomePage/HomeSeo/HomeSeo.css";
import StateHrdContent from "@/components/StateHrd/StateHrdContent";
import stateHrd from "@/media/images/stateHrdBanner.png";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";

export const metadata = {
  title: "State HRD & Home Department Attestation in Bangalore",
  description:
    "State HRD & Home Department Attestation in Bangalore at Lowest Price. All the documents meant for Attestation / Apostille must be attested by the home department.",
  canonical:
    "https://foreignembassyattestation.com/state-hrd-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function StateHrd() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={stateHrd.src} alt="state Hrd" />
      <StateHrdHead />
      <StateHrdCommercial />
      {/* <HrdBlore /> */}
      <StateHomeDepartmentBlore />
      <HomeSeoContent2 />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <StateHrdContent />
    </div>
  );
}
