import DharwadAttestationContent from "@/components/AttestationCities/DharwadAttestation/DharwadAttestationContent";
import DharwadAttestationHead from "@/components/AttestationCities/DharwadAttestation/DharwadAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Dharwad | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Dharwad, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-dharwad",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DharwadAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <DharwadAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <DharwadAttestationContent />
    </div>
  );
}
