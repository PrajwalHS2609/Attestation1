import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import OfficeUaeAbout from "@/components/OfficeInDelhi/UaeOfficeInDelhi/OfficeUaeAbout";
import UaeOfficeInDelhiContent from "@/components/OfficeInDelhi/UaeOfficeInDelhi/UaeOfficeInDelhiContent";
import UaeOfficeInDelhiHead from "@/components/OfficeInDelhi/UaeOfficeInDelhi/UaeOfficeInDelhiHead";
import uaeOfficeBanner from "@/media/images/Countries_Flag/UAE.png";

export const metadata = {
  title: "UAE Embassy Office in New Delhi, India – UAE Embassy Office of India",
  description:
    "The UAE Embassy Office in New Delhi plays a crucial role in facilitating diplomatic relations, consular services, and document attestations for individuals and businesses dealing with the United Arab Emirates.",
  canonical: "",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function UaeOfficeDelhi() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={uaeOfficeBanner.src} alt="Uae Office Banner" />
      <UaeOfficeInDelhiHead />
      <OfficeUaeAbout />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <UaeOfficeInDelhiContent />
    </div>
  );
}
