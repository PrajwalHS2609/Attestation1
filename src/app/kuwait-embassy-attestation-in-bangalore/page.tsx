import KuwaitAttestationContent from "@/components/AttestationCountries/KuwaitAttestation/KuwaitAttestationContent";
import KuwaitAttestationHead from "@/components/AttestationCountries/KuwaitAttestation/KuwaitAttestationHead";
import KuwaitAttestationHeader from "@/components/AttestationCountries/KuwaitAttestation/KuwaitAttestationHeader";

export default function KuwaitAttestation() {
  return (
    <div className="main-container">
      <KuwaitAttestationHeader />
      <KuwaitAttestationHead />
      <KuwaitAttestationContent />
    </div>
  );
}
