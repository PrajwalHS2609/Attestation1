import AnekalAttestationContent from "@/components/AttestationCities/AnekalAttestation/AnekalAttestationContent";
import AnekalAttestationHead from "@/components/AttestationCities/AnekalAttestation/AnekalAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Anekal | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Anekal, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-aneka",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function AnekalAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <AnekalAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <AnekalAttestationContent />
    </div>
  );
}
