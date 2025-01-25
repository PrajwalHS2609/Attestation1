import EgyptAttestationContent from "@/components/AttestationCountries/EgyptAttestation/EgyptAttestationContent";
import EgyptAttestationHead from "@/components/AttestationCountries/EgyptAttestation/EgyptAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import EgyptFlag from "@/media/images/Countries_Flag/Egypt.png";

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
      <HeaderComponent imageSrc={EgyptFlag.src} alt="Egypt Flag" />
      <EgyptAttestationHead />
      <EgyptAttestationContent />
    </div>
  );
}
