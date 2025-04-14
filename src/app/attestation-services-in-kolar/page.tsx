import KolarAttestationContent from "@/components/AttestationCities/KolarAttestation/KolarAttestationContent";
import KolarAttestationHead from "@/components/AttestationCities/KolarAttestation/KolarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Kolar | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Kolar, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kolar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KolarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KolarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KolarAttestationContent />
    </div>
  );
}
