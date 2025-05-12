import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import VisaStampingContent from "@/components/VisaStampingPage/VisaStampingContent";
import VisaStampingHead from "@/components/VisaStampingPage/VisaStampingHead";
import visaStampingBanner from "@/media/images/visaStampingBanner.png";
export const metadata = {
  title: "Visa Stamping Services in Bangalore | Visa Stamping Near Me",
  description:
    "Visa Stamping Services in Bangalore. It is a crucial step that grants official permission from the destination country, allowing entry for a specific purpose.",
  canonical:
    "https://foreignembassyattestation.com/visa-stamping-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VisaStamping() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={visaStampingBanner.src}
        alt="visa Stamping Banner"
      />
      <VisaStampingHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />
      <HomeNews />
      <VisaStampingContent />
    </div>
  );
}
