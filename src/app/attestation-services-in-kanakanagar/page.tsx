import KanakanagarAttestationContent from "@/components/AttestationCities/KanakanagarAttestation/KanakanagarAttestationContent";
import KanakanagarAttestationHead from "@/components/AttestationCities/KanakanagarAttestation/KanakanagarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
    title:
      "Attestation services in Kanakanagar, Bangalore for All types of Documents",
    description:
      "Attestation Services in Kanakanagar, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
    canonical:
      "https://foreignembassyattestation.com/attestation-services-in-kanakanagar",
    keywords: [
      "Attestation, Apostille, Bangalore, Best Price",
      "Birth, Marriage, Degree",
    ],
  };

export default function KanakanagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KanakanagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KanakanagarAttestationContent />
    </div>
  );
}
