import HSRLayoutAttestationContent from "@/components/AttestationCities/HSRLayoutAttestation/HSRLayoutAttestationContent";
import HSRLayoutAttestationHead from "@/components/AttestationCities/HSRLayoutAttestation/HSRLayoutAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in HSR Layout | Diagnostics Services Near Me",
  description:
    "Attestation Services in HSR Layout, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-hsr-layout",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function HSRLayoutAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <HSRLayoutAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HSRLayoutAttestationContent />
    </div>
  );
}
