import VijayapuraAttestationContent from "@/components/AttestationCities/VijayapuraAttestation/VijayapuraAttestationContent";
import VijayapuraAttestationHead from "@/components/AttestationCities/VijayapuraAttestation/VijayapuraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Vijayapura | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Vijayapura, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-vijayapura",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VijayapuraAttestation() {
  return (
    <div className="main-container">,
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <VijayapuraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <VijayapuraAttestationContent />
    </div>
  );
}
