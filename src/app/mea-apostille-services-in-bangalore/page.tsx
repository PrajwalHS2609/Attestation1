import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MeaCommercialDoc from "@/components/MeaPage/MeaCommercialDoc/MeaCommercialDoc";
import MeaContent from "@/components/MeaPage/MeaContent";
import MeaHeader from "@/components/MeaPage/MeaHeader";
import MeaProcedure from "@/components/MeaPage/MeaProcedure";

export default function MeaPage() {
  return (
    <div className="main-container">
      <MeaHeader />
      <MeaProcedure />
      <MeaCommercialDoc />
      <MeaContent />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
