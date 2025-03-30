import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import KuwaitOfficeInDelhiContent from "@/components/OfficeInDelhi/KuwaitOfficeInDelhi/KuwaitOfficeInDelhiContent";
import KuwaitOfficeInDelhiHead from "@/components/OfficeInDelhi/KuwaitOfficeInDelhi/KuwaitOfficeInDelhiHead";
import OfficeKuwaitAbout from "@/components/OfficeInDelhi/KuwaitOfficeInDelhi/OfficeKuwaitAbout";
import kuwaitOfficeBanner from "@/media/images/Countries_Flag/Kuwait.png";
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
export default function KuwaitOfficeDelhi() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={kuwaitOfficeBanner.src}
        alt="Kuwait Office Banner"
      />
      <KuwaitOfficeInDelhiHead />
      <OfficeKuwaitAbout />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KuwaitOfficeInDelhiContent />
    </div>
  );
}
