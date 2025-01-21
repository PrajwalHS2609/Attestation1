import VietnamAttestationContent from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationContent";
import VietnamAttestationHead from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationHead";
import VietnamAttestationHeader from "@/components/AttestationCountries/VietnamAttestation/VietnamAttestationHeader";
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
      <VietnamAttestationHeader />
      <VietnamAttestationHead />
      <VietnamAttestationContent />
    </div>
  );
}
