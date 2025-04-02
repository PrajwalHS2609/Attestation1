import WhitefieldAttestationContent from "@/components/AttestationCities/WhitefieldAttestation/WhitefieldAttestationContent";
import WhitefieldAttestationHead from "@/components/AttestationCities/WhitefieldAttestation/WhitefieldAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation services in Whitefield, Bangalore for All types of Documents",
  description:
    "Attestation Services in Whitefield, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-whitefield",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function WhitefieldAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <WhitefieldAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <WhitefieldAttestationContent />
    </div>
  );
}
