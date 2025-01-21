import QatarAttestationContent from "@/components/AttestationCountries/QatarAttestation/QatarAttestationContent";
import QatarAttestationHead from "@/components/AttestationCountries/QatarAttestation/QatarAttestationHead";
import QatarAttestationHeader from "@/components/AttestationCountries/QatarAttestation/QatarAttestationHeader";

export default function QatarAttestation() {
  return (
    <div className="main-container">
      <QatarAttestationHeader />
      <QatarAttestationHead />
      <QatarAttestationContent />
    </div>
  );
}
