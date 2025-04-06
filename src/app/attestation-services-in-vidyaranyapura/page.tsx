import VidyaranyapuraAttestationContent from "@/components/AttestationCities/VidyaranyapuraAttestation/VidyaranyapuraAttestationContent";
import VidyaranyapuraAttestationHead from "@/components/AttestationCities/VidyaranyapuraAttestation/VidyaranyapuraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Vidyaranyapura | Embassy Attestation Near Me",
  description:
    "Attestation Services in Vidyaranyapura, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-vidyaranyapura",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VidyaranyapuraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <VidyaranyapuraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <VidyaranyapuraAttestationContent />
    </div>
  );
}
