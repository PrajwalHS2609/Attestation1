import VivekNagarAttestationContent from "@/components/AttestationCities/VivekNagarAttestation/VivekNagarAttestationContent";
import VivekNagarAttestationHead from "@/components/AttestationCities/VivekNagarAttestation/VivekNagarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Vivek Nagar | Embassy Attestation Near Me",
  description:
    "Attestation Services in Vivek Nagar, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-vivek-nagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VivekNagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <VivekNagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <VivekNagarAttestationContent />
    </div>
  );
}
