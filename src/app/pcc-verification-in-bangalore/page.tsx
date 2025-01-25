
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import PccContent from "@/components/PccPage/PccContent";
import PccHead from "@/components/PccPage/PccHead";
import PccImp from "@/components/PccPage/PccImp/PccImp";
import pccBanner from "@/media/images/pccBanner.png";

export const metadata = {
  title:
    "PCC Verification in Bangalore – Police Document Verification in Bangalore",
  description:
    "PCC Verification in Bangalore is a crucial process for individuals planning to travel, work, or reside abroad. Call Today!",
  canonical:
    "https://foreignembassyattestation.com/pcc-verification-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Pcc() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={pccBanner.src} alt="pcc Banner" />
      <PccHead />
      <PccImp />
      <PccContent />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
