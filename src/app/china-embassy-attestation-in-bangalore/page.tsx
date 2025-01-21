import ChinaAttestationContent from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationContent";
import ChinaAttestationHead from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationHead";
import ChinaAttestationHeader from "@/components/AttestationCountries/ChinaAttestation/ChinaAttestationHeader";

export default function ChinaAttestation() {
  return (
    <div className="main-container">
      <ChinaAttestationHeader />
      <ChinaAttestationHead />
      <ChinaAttestationContent />
    </div>
  );
}
