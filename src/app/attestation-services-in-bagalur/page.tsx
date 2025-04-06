import BagalurAttestationContent from "@/components/AttestationCities/BagalurAttestation/BagalurAttestationContent";
import BagalurAttestationHead from "@/components/AttestationCities/BagalurAttestation/BagalurAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Bagalur | Embassy Attestation Near Me",
  description:
    "Attestation Services in Bagalur, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bagalur",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BagalurAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BagalurAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BagalurAttestationContent />
    </div>
  );
}
