import MalaysiaAttestationHead from "./../../components/AttestationCountries/MalaysiaAttestation/MalaysiaAttestationHead";
import MalaysiaAttestationContent from "@/components/AttestationCountries/MalaysiaAttestation/MalaysiaAttestationContent";
import MalaysiaFlag from "@/media/images/Countries_Flag/Malaysia.png";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

export const metadata = {
  title:
    "Malaysia Embassy Attestation in Bangalore | Malaysia Attestation Near Me",
  description:
    "Malaysia Embassy Attestation in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/malaysia-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function QatarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={MalaysiaFlag.src} alt="Malaysia Flag"/>
      <MalaysiaAttestationHead />
      <MalaysiaAttestationContent />
    </div>
  );
}
