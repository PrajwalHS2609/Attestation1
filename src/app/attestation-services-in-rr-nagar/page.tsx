import RRNagarAttestationContent from "@/components/AttestationCities/RRNagarAttestation/RRNagarAttestationContent";
import RRNagarAttestationHead from "@/components/AttestationCities/RRNagarAttestation/RRNagarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in RR Nagar | Embassy Attestation Near Me",
  description:
    "Attestation Services in RR Nagar, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-rr-nagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function RRNagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <RRNagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <RRNagarAttestationContent />
    </div>
  );
}
