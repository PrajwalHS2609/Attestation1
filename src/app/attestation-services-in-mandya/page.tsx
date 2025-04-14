import MandyaAttestationContent from "@/components/AttestationCities/MandyaAttestation/MandyaAttestationContent";
import MandyaAttestationHead from "@/components/AttestationCities/MandyaAttestation/MandyaAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Mandya | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Mandya, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-mandya",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MandyaAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <MandyaAttestationHead  />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MandyaAttestationContent />
    </div>
  );
}
