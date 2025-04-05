import UlsoorAttestationContent from "@/components/AttestationCities/UlsoorAttestation/UlsoorAttestationContent";
import UlsoorAttestationHead from "@/components/AttestationCities/UlsoorAttestation/UlsoorAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Ulsoor | Diagnostics Services Near Me",
  description:
    "Attestation Services in Ulsoor, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-ulsoor",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UlsoorAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <UlsoorAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <UlsoorAttestationContent />
    </div>
  );
}
