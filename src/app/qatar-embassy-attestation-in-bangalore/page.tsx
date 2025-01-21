import QatarAttestationContent from "@/components/AttestationCountries/QatarAttestation/QatarAttestationContent";
import QatarAttestationHead from "@/components/AttestationCountries/QatarAttestation/QatarAttestationHead";
import QatarAttestationHeader from "@/components/AttestationCountries/QatarAttestation/QatarAttestationHeader";
export const metadata = {
  title:
    "Qatar Embassy Attestation in Bangalore | Qatar Attestation Services Near Me",
  description:
    "Qatar Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    "https://foreignembassyattestation.com/qatar-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function QatarAttestation() {
  return (
    <div className="main-container">
      <QatarAttestationHeader />
      <QatarAttestationHead />
      <QatarAttestationContent />
    </div>
  );
}
