import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import BahrainOfficeInDelhiContent from "@/components/OfficeInDelhi/BahrainOfficeInDelhi/BahrainOfficeInDelhiContent";
import BahrainOfficeInDelhiHead from "@/components/OfficeInDelhi/BahrainOfficeInDelhi/BahrainOfficeInDelhiHead";
import OfficeBahrainAbout from "@/components/OfficeInDelhi/BahrainOfficeInDelhi/OfficeBahrainAbout";
import bahrainOfficeBanner from "@/media/images/Countries_Flag/Baharain.png";

export const metadata = {
  title:
    "Bahrain Embassy Office in New Delhi, India – Bahrain Embassy Office of India",
  description:
    "The Bahrain Embassy Office in New Delhi, it plays a crucial role in fostering bilateral relations between the two countries, facilitating visa and consular services, assisting Bahraini citizens in India",
  canonical:
    "https://foreignembassyattestation.com/bahrain-embassy-office-in-new-delhi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function BahrainOfficeDelhi() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={bahrainOfficeBanner.src}
        alt="Bahrain Office Banner"
      />
      <BahrainOfficeInDelhiHead />
      <OfficeBahrainAbout />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BahrainOfficeInDelhiContent />
    </div>
  );
}
