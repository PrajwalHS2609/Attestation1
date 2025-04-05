import HebbalAttestationContent from "@/components/AttestationCities/HebbalAttestation/HebbalAttestationContent";
import HebbalAttestationHead from "@/components/AttestationCities/HebbalAttestation/HebbalAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Hebbal | Diagnostics Services Near Me",
  description:
    "Attestation Services in Hebbal, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-hebbal",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function HebbalAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <HebbalAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HebbalAttestationContent />
    </div>
  );
}
