import KadugodiAttestationContent from "@/components/AttestationCities/KadugodiAttestation/KadugodiAttestationContent";
import KadugodiAttestationHead from "@/components/AttestationCities/KadugodiAttestation/KadugodiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Kadugodi | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Kadugodi, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kadugodi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KadugodiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KadugodiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KadugodiAttestationContent />
    </div>
  );
}
