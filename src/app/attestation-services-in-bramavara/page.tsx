import BramavaraAttestationContent from "@/components/AttestationCities/BramavaraAttestation/BramavaraAttestationContent";
import BramavaraAttestationHead from "@/components/AttestationCities/BramavaraAttestation/BramavaraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Bramavara | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Bramavara, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bramavara",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BramavaraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BramavaraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BramavaraAttestationContent />
    </div>
  );
}
