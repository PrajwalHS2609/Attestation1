import BanashankariAttestationContent from "@/components/AttestationCities/BanashankariAttestation/BanashankariAttestationContent";
import BanashankariAttestationHead from "@/components/AttestationCities/BanashankariAttestation/BanashankariAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Banashankari| Attestation Services Near Me",
  description:
    "Attestation Services in Banashankari, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-banashankari ",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BanashankariAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BanashankariAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BanashankariAttestationContent />
    </div>
  );
}
