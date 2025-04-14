import HosapeteAttestationContent from "@/components/AttestationCities/HosapeteAttestation/HosapeteAttestationContent";
import HosapeteAttestationHead from "@/components/AttestationCities/HosapeteAttestation/HosapeteAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Hosapete | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Hosapete, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-hosapete",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function WhitefieldAttestation() {
  return (
    <div className="main-container">
      
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <HosapeteAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HosapeteAttestationContent />
    </div>
  );
}
