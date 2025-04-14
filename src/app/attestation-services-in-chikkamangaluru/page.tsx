import ChikkamangaluruAttestationContent from "@/components/AttestationCities/ChikkamangaluruAttestation/ChikkamangaluruAttestationContent";
import ChikkamangaluruAttestationHead from "@/components/AttestationCities/ChikkamangaluruAttestation/ChikkamangaluruAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Chikkamangaluru | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Chikkamangaluru, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-chikkamangaluru",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ChikkamangaluruAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <ChikkamangaluruAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ChikkamangaluruAttestationContent />
    </div>
  );
}
