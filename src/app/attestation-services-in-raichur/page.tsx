import RaichurAttestationContent from "@/components/AttestationCities/RaichurAttestation/RaichurAttestationContent";
import RaichurAttestationHead from "@/components/AttestationCities/RaichurAttestation/RaichurAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Raichur | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Raichur, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-raichur",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function RaichurAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <RaichurAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <RaichurAttestationContent />
    </div>
  );
}
