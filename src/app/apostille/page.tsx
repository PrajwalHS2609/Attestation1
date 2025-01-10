import ApostilleHeader from "@/components/ApostillePage/ApostillePageHeader";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function Apostille() {
  return (
    <div className="main-container">
      <ApostilleHeader />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
