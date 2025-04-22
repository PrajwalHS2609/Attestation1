import SirsiAttestationContent from "@/components/AttestationCities/SirsiAttestation/SirsiAttestationContent";
import SirsiAttestationHead from "@/components/AttestationCities/SirsiAttestation/SirsiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Sirsi | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Sirsi, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-sirsi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function SirsiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <SirsiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <SirsiAttestationContent />
    </div>
  );
}
