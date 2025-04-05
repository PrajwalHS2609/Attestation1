import KothnurAttestationContent from "@/components/AttestationCities/KothnurAttestation/KothnurAttestationContent";
import KothnurAttestationHead from "@/components/AttestationCities/KothnurAttestation/KothnurAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Kothnur | Diagnostics Services Near Me",
  description:
    "Attestation Services in Kothnur, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kothnur",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KothnurAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KothnurAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KothnurAttestationContent />
    </div>
  );
}
