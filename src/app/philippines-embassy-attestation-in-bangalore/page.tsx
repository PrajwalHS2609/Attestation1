import PhilippinesAttestationContent from "@/components/AttestationCountries/PhilippinesAttestation/PhilippinesAttestationContent";
import PhilippinesAttestationHead from "@/components/AttestationCountries/PhilippinesAttestation/PhilippinesAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import PhilippinesFlag from "@/media/images/Countries_Flag/philippines.png";

export const metadata = {
  title:
    "Philippines Embassy Attestation in Bangalore | Malaysia Attestation Near Me",
  description:
    "Philippines Embassy Attestation in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/philippines-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function QatarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={PhilippinesFlag.src} alt="PhilippinesFlag" />
      <PhilippinesAttestationHead />
      <PhilippinesAttestationContent />
    </div>
  );
}
