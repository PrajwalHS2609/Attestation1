import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import JpNagarAttestationContent from "@/components/AttestationCities/JpNagarAttestation/JpNagarAttestationContent";
import JpNagarAttestationHead from "@/components/AttestationCities/JpNagarAttestation/JpNagarAttestationHead";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    "Attestation services in JP Nagar, Bangalore for All types of Documents",
  description:
    "Attestation Services in JP Nagar, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-jp-nagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function JPNagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <JpNagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <JpNagarAttestationContent />
    </div>
  );
}
