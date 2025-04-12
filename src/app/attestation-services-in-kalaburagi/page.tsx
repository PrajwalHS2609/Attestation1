import KalaburagiAttestationContent from "@/components/AttestationCities/KalaburagiAttestation/KalaburagiAttestationContent";
import KalaburagiAttestationHead from "@/components/AttestationCities/KalaburagiAttestation/KalaburagiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Kalaburagi | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Kalaburagi, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kalaburagi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KalaburagiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KalaburagiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KalaburagiAttestationContent />
    </div>
  );
}
