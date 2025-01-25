import QatarAttestationContent from "@/components/AttestationCountries/QatarAttestation/QatarAttestationContent";
import QatarAttestationHead from "@/components/AttestationCountries/QatarAttestation/QatarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import QatarFlag from "@/media/images/Countries_Flag/Qatar.png";

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
      <HeaderComponent imageSrc={QatarFlag.src} alt="Qatar Flag"/>
      <QatarAttestationHead />
      <QatarAttestationContent />
    </div>
  );
}
