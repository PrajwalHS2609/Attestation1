import TaiwanAttestationContent from "@/components/AttestationCountries/TaiwanAttestation/TaiwanAttestationContent";
import TaiwanAttestationHead from "@/components/AttestationCountries/TaiwanAttestation/TaiwanAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import TaiwanFlag from "@/media/images/Countries_Flag/taiwan.png";

export const metadata = {
  title:
    "Taiwan Embassy Attestation in Bangalore | Taiwan Attestation Near Me",
  description:
    "Taiwan Embassy Attestation in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/taiwan-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function QatarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={TaiwanFlag.src} alt="Taiwan Flag" />
      <TaiwanAttestationHead />
      <TaiwanAttestationContent />
    </div>
  );
}
