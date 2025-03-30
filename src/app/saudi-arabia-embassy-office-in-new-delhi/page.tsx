import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import SaudiOfficeInDelhiContent from "@/components/OfficeInDelhi/SaudiOfficeInDelhi/SaudiOfficeInDelhiContent";
import SaudiOfficeInDelhiHead from "@/components/OfficeInDelhi/SaudiOfficeInDelhi/SaudiOfficeInDelhiHead";
import saudiOfficeBanner from "@/media/images/Countries_Flag/Saudi Arabia.png";
import OfficeSaudiAbout from "@/components/OfficeInDelhi/SaudiOfficeInDelhi/OfficeSaudiAbout";
export const metadata = {
  title:
    "Saudi Arabia Embassy Office in New Delhi, India – Saudi Arabia Embassy Office of India",
  description:
    "The Saudi Arabia Embassy Office in New Delhi. This office facilitates various services, including visa processing, document attestation, consular assistance, and diplomatic communications.",
  canonical:
    "https://foreignembassyattestation.com/saudi-arabia-embassy-office-in-new-delhi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function SaudiOfficeDelhi() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={saudiOfficeBanner.src} alt="Uae Office Banner" />
      <SaudiOfficeInDelhiHead />
      <OfficeSaudiAbout />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <SaudiOfficeInDelhiContent />
    </div>
  );
}
