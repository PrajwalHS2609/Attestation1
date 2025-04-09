import KonankunteAttestationContent from "@/components/AttestationCities/KonankunteAttestation/KonankunteAttestationContent";
import KonankunteAttestationHead from "@/components/AttestationCities/KonankunteAttestation/KonankunteAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Konankunte| Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Konankunte, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-konankunte",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KonankunteAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KonankunteAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KonankunteAttestationContent />
    </div>
  );
}
