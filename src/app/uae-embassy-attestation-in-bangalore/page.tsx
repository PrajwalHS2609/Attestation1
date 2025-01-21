import UaeAttestationContent from "@/components/AttestationCountries/UaeAttestation/UaeAttestationContent";
import UaeAttestationHead from "@/components/AttestationCountries/UaeAttestation/UaeAttestationHead";
import UaeAttestationHeader from "@/components/AttestationCountries/UaeAttestation/UaeAttestationHeader";

export default function VietnamAttestation() {
  return (
    <div className="main-container">
      <UaeAttestationHeader />
      <UaeAttestationHead />
      <UaeAttestationContent />
    </div>
  );
}
