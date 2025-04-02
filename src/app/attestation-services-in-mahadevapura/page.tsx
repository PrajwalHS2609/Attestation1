import MahadevapuraAttestationContent from "@/components/AttestationCities/MahadevapuraAttestation/MahadevapuraAttestationContent";
import MahadevapuraAttestationHead from "@/components/AttestationCities/MahadevapuraAttestation/MahadevapuraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    "Attestation services in Mahadevapura, Bangalore for All types of Documents",
  description:
    "Attestation Services in Mahadevapura, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-mahadevapura",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MahadevapuraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <MahadevapuraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MahadevapuraAttestationContent />
    </div>
  );
}
