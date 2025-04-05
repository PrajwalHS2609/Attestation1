import VarthurAttestationContent from "@/components/AttestationCities/VarthurAttestation/VarthurAttestationContent";
import VarthurAttestationHead from "@/components/AttestationCities/VarthurAttestation/VarthurAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Varthur| Embassy Attestation Services Near Me",
  description:
    "Attestation Services in Varthur, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-varthur",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VarthurAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <VarthurAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <VarthurAttestationContent />
    </div>
  );
}
