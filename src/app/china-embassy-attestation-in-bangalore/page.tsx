import ChinaAttestationContent from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationContent";
import ChinaAttestationHead from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationHead";
import ChinaFlag from "@/media/images/Countries_Flag/chinaFlag.png";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
export const metadata = {
  title:
    "China Embassy Attestation in Bangalore | China Attestation Services Near Me",
  description:
    "China Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    "https://foreignembassyattestation.com/china-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ChinaAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={ChinaFlag.src} alt="China Flag" />
      <ChinaAttestationHead />
      <ChinaAttestationContent />
    </div>
  );
}
