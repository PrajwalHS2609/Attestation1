import ApostilleCertificate from "@/components/ApostillePage/ApostilleCertificate";
import ApostilleFlag from "@/components/ApostillePage/ApostilleFlags/ApostilleFlags";
import ApostilleHead from "@/components/ApostillePage/ApostilleHead";
import ApostilleHeader from "@/components/ApostillePage/ApostilleHeader";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export default function Attestation() {
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
