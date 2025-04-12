import JiganiAttestationContent from "@/components/AttestationCities/JiganiAttestation/JiganiAttestationContent";
import JiganiAttestationHead from "@/components/AttestationCities/JiganiAttestation/JiganiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Jigani | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Jigani, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-jigani",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function JiganiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <JiganiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <JiganiAttestationContent />
    </div>
  );
}
