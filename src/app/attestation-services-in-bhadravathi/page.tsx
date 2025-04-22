import BhadravathiAttestationContent from "@/components/AttestationCities/BhadravathiAttestation/BhadravathiAttestationContent";
import BhadravathiAttestationHead from "@/components/AttestationCities/BhadravathiAttestation/BhadravathiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Bhadravathi | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Bhadravathi, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bhadravathi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BhadravathiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BhadravathiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BhadravathiAttestationContent />
    </div>
  );
}
