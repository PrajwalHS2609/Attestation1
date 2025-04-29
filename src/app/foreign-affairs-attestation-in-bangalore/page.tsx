import ForeignAffairsContent from "@/components/ForeignAffairs/ForeignAffairsContent";
import ForeignAffairsHead from "@/components/ForeignAffairs/ForeignAffairsHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Foreign Affairs (FA) Attestation in Bangalore| Certificate Attestation Near Me ",
  description:
    "Foreign Affairs (FA) Attestation in Bangalore. Whether you are dealing with educational certificates, personal documents like birth or marriage certificates, or commercial papers for business expansion.",
  canonical:
    "https://foreignembassyattestation.com/foreign-affairs-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ForeignAffairsAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <ForeignAffairsHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ForeignAffairsContent />{" "}
    </div>
  );
}
