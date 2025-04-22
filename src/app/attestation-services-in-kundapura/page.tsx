import KundapuraAttestationContent from "@/components/AttestationCities/KundapuraAttestation/KundapuraAttestationContent";
import KundapuraAttestationHead from "@/components/AttestationCities/KundapuraAttestation/KundapuraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Kundapura | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Kundapura, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kundapura",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KundapuraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KundapuraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KundapuraAttestationContent />
    </div>
  );
}
