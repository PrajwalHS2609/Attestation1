import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MinistryofHealthContent from "@/components/MinistryofHealth/MinistryofHealthContent";
import MinistryofHealthHead from "@/components/MinistryofHealth/MinistryofHealthHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Ministry of Health Department Attestation in Bangalore | Certificate Attestation Near Me ",
  description:
    "Ministry of Health Department Attestation in Bangalore is a crucial step for individuals who need to use their medical-related documents internationally.",
  canonical:
    "https://foreignembassyattestation.com/ministry-of-health-department-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MinistryOfHealthAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <MinistryofHealthHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MinistryofHealthContent />{" "}
    </div>
  );
}
