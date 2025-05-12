import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MeaCommercialDoc from "@/components/MeaPage/MeaCommercialDoc/MeaCommercialDoc";
import MeaContent from "@/components/MeaPage/MeaContent";
import MeaProcedure from "@/components/MeaPage/MeaProcedure";
import meaBanner from "@/media/images/meaBanner.png";

export const metadata = {
  title: "MEA Apostille Services in Bangalore for all types of documents",
  description:
    "MEA Apostille Services in Bangalore at Lowest price for all types of personal documents, Home Department /General Administration Department are the designated authorities. ",
  canonical:
    "https://foreignembassyattestation.com/mea-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MeaPage() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={meaBanner.src} alt="mea Banner" />
      <MeaProcedure />
      <MeaCommercialDoc />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <MeaContent />
    </div>
  );
}
