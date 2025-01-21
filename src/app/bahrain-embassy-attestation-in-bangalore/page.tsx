import BahrainAttestationContent from "@/components/AttestationCountries/BahrainAttestation/BahrainAttestationContent";
import BahrainAttestationHead from "@/components/AttestationCountries/BahrainAttestation/BahrainAttestationHead";
import BahrainAttestationHeader from "@/components/AttestationCountries/BahrainAttestation/BahrainAttestationHeader";

export default function BahrainAttestation() {
  return (
    <div className="main-container">
      <BahrainAttestationHeader />
      <BahrainAttestationHead />
      <BahrainAttestationContent />
    </div>
  );
}
