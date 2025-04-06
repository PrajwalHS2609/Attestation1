import LaggereAttestationContent from "@/components/AttestationCities/LaggereAttestation/LaggereAttestationContent";
import LaggereAttestationHead from "@/components/AttestationCities/LaggereAttestation/LaggereAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Laggere | Embassy Attestation Near Me",
  description:
    "Attestation Services in Laggere, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-laggere",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function LaggereAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <LaggereAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <LaggereAttestationContent />
    </div>
  );
}
