import VijayanagarAttestationContent from "@/components/AttestationCities/VijayanagarAttestation/VijayanagarAttestationContent";
import VijayanagarAttestationHead from "@/components/AttestationCities/VijayanagarAttestation/VijayanagarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Vijayanagar | Diagnostics Services Near Me",
  description:
    "Attestation Services in Vijayanagar, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-vijayanagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VijayanagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <VijayanagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <VijayanagarAttestationContent />
    </div>
  );
}
