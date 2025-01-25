import NigeriaAttestationContent from "@/components/AttestationCountries/NigeriaAttestation/NigeriaAttestationContent";
import NigeriaAttestationHead from "@/components/AttestationCountries/NigeriaAttestation/NigeriaAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import NigeriaFlag from "@/media/images/Countries_Flag/nigeria.png";

export const metadata = {
  title:
    "Nigeria Embassy Attestation in Bangalore | Nigeria Attestation Near Me",
  description:
    "Nigeria Embassy Attestation in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/nigeria-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function QatarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={NigeriaFlag.src} alt="Nigeria Flag" />
      <NigeriaAttestationHead />
      <NigeriaAttestationContent />
    </div>
  );
}
