import DooravaniAttestationContent from "@/components/AttestationCities/DooravaniAttestation/DooravaniAttestationContent";
import DooravaniAttestationHead from "@/components/AttestationCities/DooravaniAttestation/DooravaniAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Dooravani Nagar | Embassy Attestation Near Me",
  description:
    "Attestation Services in Dooravani Nagar, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-dooravani-nagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DooravaniAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <DooravaniAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <DooravaniAttestationContent />
    </div>
  );
}
