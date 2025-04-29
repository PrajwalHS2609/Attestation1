import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MinistryofJusticeContent from "@/components/MinistryofJustice/MinistryofJusticeContent";
import MinistryofJusticeHead from "@/components/MinistryofJustice/MinistryofJusticeHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Ministry of Justice Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Ministry of Health Department Attestation in Bangalore is an essential process for individuals who need to authenticate their documents for use in foreign countries",
  canonical:
    "https://foreignembassyattestation.com/ministry-of-justice-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MinistryOfJusticeAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <MinistryofJusticeHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MinistryofJusticeContent />{" "}
    </div>
  );
}
