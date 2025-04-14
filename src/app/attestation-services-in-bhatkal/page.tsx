import BhatkalAttestationContent from "@/components/AttestationCities/BhatkalAttestation/BhatkalAttestationContent";
import BhatkalAttestationHead from "@/components/AttestationCities/BhatkalAttestation/BhatkalAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Bhatkal | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Bhatkal, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bhatkal",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BhatkalAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BhatkalAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BhatkalAttestationContent />
    </div>
  );
}
