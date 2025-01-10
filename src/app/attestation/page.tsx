import AttestationHeader from "@/components/AttestationPage/AttestationHeader/AttestationHeader";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export default function Attestation() {
  return (
    <div className="main-container">
      <AttestationHeader />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
