import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import WesContent from "@/components/Wespage/WesContent";
import WesDoc from "@/components/Wespage/WesDoc";
import WesHead from "@/components/Wespage/WesHead";
import WesHeader from "@/components/Wespage/WesHeader";
import WesProcess from "@/components/Wespage/WesProcess";

export default function WesPage() {
  return (
    <div className="main-container">
      <WesHeader />
      <WesHead />
      <WesDoc />
      <WesProcess />
      <WesContent />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
