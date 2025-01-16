import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import WesContent from "@/components/Wespage/WesContent";
import WesDoc from "@/components/Wespage/WesDoc";
import WesHead from "@/components/Wespage/WesHead";
import WesHeader from "@/components/Wespage/WesHeader";
import WesProcess from "@/components/Wespage/WesProcess";
export const metadata = {
  title: "WES Verification Attestation in Bangalore at Lowest Price",
  description:
    "WES Verification Attestation in Bangalore at Lowest Price. People primarily use this verification to obtain permanent resident status in the US and Canada. ",
  canonical:
    "https://foreignembassyattestation.com/wes-verification-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
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
