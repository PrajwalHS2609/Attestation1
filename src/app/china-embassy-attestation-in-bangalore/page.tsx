import ChinaAttestationContent from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationContent";
import ChinaAttestationHead from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationHead";
import ChinaAttestationHeader from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationHeader";
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
      <ChinaAttestationHeader />
      <ChinaAttestationHead />
      <ChinaAttestationContent />
    </div>
  );
}
