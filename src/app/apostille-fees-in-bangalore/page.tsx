import ApostilleFeesInBangaloreContent from "@/components/ApostilleContent/ApostilleFeesInBangalore/ApostilleFeesInBangaloreContent";
import ApostilleFeesInBangaloreHead from "@/components/ApostilleContent/ApostilleFeesInBangalore/ApostilleFeesInBangaloreHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import apostilleBanner from "@/media/images/apostilleBanner.png";
export const metadata = {
  title: "Apostille Fees in Bangalore| Certificate Apostille Fees Near Me",
  description:
    "MEA Apostille fees in Bangalore for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/apostille-fees-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ApostilleFee() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={apostilleBanner.src}
        alt="apostille Banner"
      />
      <ApostilleFeesInBangaloreHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ApostilleFeesInBangaloreContent />
    </div>
  );
}
