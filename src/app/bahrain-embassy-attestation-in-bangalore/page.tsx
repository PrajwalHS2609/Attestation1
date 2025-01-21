import BahrainAttestationContent from "@/components/AttestationCountries/BahrainAttestation/BahrainAttestationContent";
import BahrainAttestationHead from "@/components/AttestationCountries/BahrainAttestation/BahrainAttestationHead";
import BahrainAttestationHeader from "@/components/AttestationCountries/BahrainAttestation/BahrainAttestationHeader";
export const metadata = {
  title:
    "Bahrain Embassy Attestation in Bangalore | Bahrain Attestation Services Near Me",
  description:
    "Bahrain Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    " https://foreignembassyattestation.com/bahrain-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BahrainAttestation() {
  return (
    <div className="main-container">
      <BahrainAttestationHeader />
      <BahrainAttestationHead />
      <BahrainAttestationContent />
    </div>
  );
}
