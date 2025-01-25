import SaudiAttestationContent from "@/components/AttestationCountries/SaudiAttestation/SaudiAttestationContent";
import SaudiAttestationHead from "@/components/AttestationCountries/SaudiAttestation/SaudiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import SaudiFlag from "@/media/images/Countries_Flag/Saudi Arabia.png";

export const metadata = {
  title:
    "Saudi Arabia Embassy Attestation in Bangalore | Kuwait Attestation Services Near Me",
  description:
    "Saudi Arabia Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    "https://foreignembassyattestation.com/saudi-arabia-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function SaudiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={SaudiFlag.src} alt="Saudi Flag" />
      <SaudiAttestationHead />
      <SaudiAttestationContent />
    </div>
  );
}
