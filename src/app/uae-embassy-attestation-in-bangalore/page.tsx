import UaeAttestationContent from "@/components/AttestationCountries/UaeAttestation/UaeAttestationContent";
import UaeAttestationHead from "@/components/AttestationCountries/UaeAttestation/UaeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UaeFlag from "@/media/images/Countries_Flag/UAE.png";
export const metadata = {
  title:
    "UAE Embassy Attestation in Bangalore | UAE Attestation Services Near Me",
  description:
    "UAE Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    "https://foreignembassyattestation.com/uae-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VietnamAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={UaeFlag.src} alt="Uae Flag" />
      <UaeAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <UaeAttestationContent />
    </div>
  );
}
