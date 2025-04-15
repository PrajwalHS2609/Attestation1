import ChikkamagaluruAttestationContent from "@/components/AttestationCities/ChikkamangaluruAttestation/ChikkamagaluruAttestationContent";
import ChikkamagaluruAttestationHead from "@/components/AttestationCities/ChikkamangaluruAttestation/ChikkamagaluruAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Chikkamagaluru | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Chikkamagaluru, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-chikkamagaluru",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ChikkamagaluruAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <ChikkamagaluruAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ChikkamagaluruAttestationContent />
    </div>
  );
}
