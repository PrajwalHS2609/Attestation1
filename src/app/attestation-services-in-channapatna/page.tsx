import ChannapatnaAttestationContent from "@/components/AttestationCities/ChannapatnaAttestation/ChannapatnaAttestationContent";
import ChannapatnaAttestationHead from "@/components/AttestationCities/ChannapatnaAttestation/ChannapatnaAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Channapatna | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Channapatna, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-channapatna",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ChannapatnaAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <ChannapatnaAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ChannapatnaAttestationContent />
    </div>
  );
}
