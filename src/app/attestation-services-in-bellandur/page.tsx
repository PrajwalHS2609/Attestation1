import BellandurAttestationContent from "@/components/AttestationCities/BellandurAttestation/BellandurAttestationContent";
import BellandurAttestationHead from "@/components/AttestationCities/BellandurAttestation/BellandurAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Bellandur| Attestation Services Near Me",
  description:
    "Attestation Services in Bellandur, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bellandur",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BellandurAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BellandurAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BellandurAttestationContent />
    </div>
  );
}
