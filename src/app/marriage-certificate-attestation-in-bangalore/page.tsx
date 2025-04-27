import marriageAttestationBanner from "@/media/images/marriageCerti.png";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import MarriageCertificationHead from "@/components/MarriageCertification/MarriageCertificationHead";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MarriageCertificationContent from "@/components/MarriageCertification/MarriageCertificationContent";
export const metadata = {
  title:
    "Marriage Certificate Attestation in Bangalore | Certificate Attestation Fees Near Me",
  description:
    "Marriage Certificate Attestation in Bangalore is an essential service for individuals who need to use their marriage certificate outside India for purposes like visa applications, immigration, or family sponsorship.",
  canonical:
    "https://foreignembassyattestation.com/marriage-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MarriageCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={marriageAttestationBanner.src}
        alt="marriage Attestation Banner"
      />
      <MarriageCertificationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MarriageCertificationContent />
    </div>
  );
}
