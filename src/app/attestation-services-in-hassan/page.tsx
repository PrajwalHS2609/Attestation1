import HassanAttestationContent from "@/components/AttestationCities/HassanAttestation/HassanAttestationContent";
import HassanAttestationHead from "@/components/AttestationCities/HassanAttestation/HassanAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Hassan | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Hassan, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-hassan",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function HassanAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <HassanAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HassanAttestationContent />
    </div>
  );
}
