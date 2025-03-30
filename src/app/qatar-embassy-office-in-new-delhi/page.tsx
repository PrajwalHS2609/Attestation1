import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import QatarOfficeInDelhiContent from "@/components/OfficeInDelhi/QatarOfficeInDelhi/QatarOfficeInDelhiContent";
import QatarOfficeInDelhiHead from "@/components/OfficeInDelhi/QatarOfficeInDelhi/QatarOfficeInDelhiHead";
import qatarOfficeBanner from "@/media/images/Countries_Flag/Qatar.png";
import OfficeQatarAbout from "@/components/OfficeInDelhi/QatarOfficeInDelhi/OfficeQatarAbout";

export const metadata = {
  title:
    "Kuwait Embassy Office in New Delhi, India – Kuwait Embassy Office of India",
  description:
    "The Kuwait Embassy Office in New Delhi plays a vital role in facilitating diplomatic relations, visa processing, document attestation, and various consular services for individuals and businesses citizens in India. ",
  canonical:
    "https://foreignembassyattestation.com/kuwait-embassy-office-in-new-delhi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function QatarDelhiOffice() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={qatarOfficeBanner.src}
        alt="Qatar Office Banner"
      />
      <QatarOfficeInDelhiHead />
      <OfficeQatarAbout />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <QatarOfficeInDelhiContent />
    </div>
  );
}
