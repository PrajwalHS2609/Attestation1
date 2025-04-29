import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MinistryofEducationContent from "@/components/MinistryofEducation/MinistryofEducationContent";
import MinistryofEducationHead from "@/components/MinistryofEducation/MinistryofEducationHead";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Ministry of Education Department Attestation in Bangalore",
  description:
    "Ministry of Education Department Attestation in Bangalore is an essential process for students and professionals who are planning to study or work abroad.",
  canonical:
    "https://foreignembassyattestation.com/ministry-of-education-department-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MinistryOfEducationDepartment () {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <MinistryofEducationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MinistryofEducationContent />{" "}
    </div>
  );
}
