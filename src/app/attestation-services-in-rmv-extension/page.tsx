import RMVAttestationContent from "@/components/AttestationCities/RMVAttestation/RMVAttestationContent";
import RMVAttestationHead from "@/components/AttestationCities/RMVAttestation/RMVAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in RMV Extension | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in RMV Extension, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-rmv-extension",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function RMVAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <RMVAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <RMVAttestationContent />
    </div>
  );
}
