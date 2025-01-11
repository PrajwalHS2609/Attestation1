import ApostilleFlag from "@/components/ApostillePage/ApostilleFlags/ApostilleFlags";
import ApostilleHeader from "@/components/ApostillePage/ApostilleHeader";
import ApostilleCertificate from "@/components/ApostillePage/ApostilleCertificate";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import ApostilleHead from "@/components/ApostillePage/ApostilleHead";

export default function Apostille() {
  return (
    <div className="main-container">
      <ApostilleHeader />
      <ApostilleHead />
      <ApostilleCertificate />
      <ApostilleFlag />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
