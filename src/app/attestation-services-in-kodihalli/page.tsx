import KodihalliAttestationContent from "@/components/AttestationCities/KodihalliAttestation/KodihalliAttestationContent";
import KodihalliAttestationHead from "@/components/AttestationCities/KodihalliAttestation/KodihalliAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Kodihalli | Embassy Attestation Near Me",
  description:
    "Attestation Services in Kodihalli, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kodihalli",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KodihalliAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KodihalliAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KodihalliAttestationContent />
    </div>
  );
}
