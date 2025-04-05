import AgaraAttestationContent from "@/components/AttestationCities/AgaraAttestation/AgaraAttestationContent";
import AgaraAttestationHead from "@/components/AttestationCities/AgaraAttestation/AgaraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Agara | Diagnostics Services Near Me",
  description:
    "Attestation Services in Agara, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-agara",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function AgaraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <AgaraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <AgaraAttestationContent />
    </div>
  );
}
