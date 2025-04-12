import UllalAttestationContent from "@/components/AttestationCities/UllalAttestation/UllalAttestationContent";
import UllalAttestationHead from "@/components/AttestationCities/UllalAttestation/UllalAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Ullal | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Ullal, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-ullal",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UllalAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <UllalAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <UllalAttestationContent />
    </div>
  );
}
