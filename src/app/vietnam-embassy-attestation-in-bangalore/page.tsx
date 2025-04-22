import VietnamAttestationContent from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationContent";
import VietnamAttestationHead from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import VietnamFlag from "@/media/images/Countries_Flag/vietnam.png";
export const metadata = {
  title:
    "Vietnam Embassy Attestation in Bangalore | Vietnam Attestation Services Near Me",
  description:
    "Vietnam Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    "https://foreignembassyattestation.com/vietnam-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VietnamAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={VietnamFlag.src} alt="Vietnam Flag" />
      <VietnamAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <VietnamAttestationContent />
    </div>
  );
}
