import UdupiAttestationContent from "@/components/AttestationCities/UdupiAttestation/UdupiAttestationContent";
import UdupiAttestationHead from "@/components/AttestationCities/UdupiAttestation/UdupiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Udupi | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Udupi, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-rmv-extension",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UdupiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <UdupiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <UdupiAttestationContent />
    </div>
  );
}
