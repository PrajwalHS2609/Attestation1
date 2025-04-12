import HoskoteAttestationContent from "@/components/AttestationCities/HoskoteAttestation/HoskoteAttestationContent";
import HoskoteAttestationHead from "@/components/AttestationCities/HoskoteAttestation/HoskoteAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Hoskote | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Hoskote, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-hoskote",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function HoskoteAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <HoskoteAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HoskoteAttestationContent />
    </div>
  );
}
