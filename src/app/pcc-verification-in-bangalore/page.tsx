import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import PccHead from "@/components/PccPage/PccHead";
import PccHeader from "@/components/PccPage/PccHeader";
import PccImp from "@/components/PccPage/PccImp/PccImp";

export default function Pcc() {
  return (
    <div className="main-container">
      <PccHeader />
      <PccHead />
      <PccImp />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
