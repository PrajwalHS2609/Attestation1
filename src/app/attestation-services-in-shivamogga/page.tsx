import ShivamoggaAttestationContent from "@/components/AttestationCities/ShivamoggaAttestation/ShivamoggaAttestationContent";
import ShivamoggaAttestationHead from "@/components/AttestationCities/ShivamoggaAttestation/ShivamoggaAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    "Attestation Services in Shivamogga | Embassy Attestation in Shivamogga",
  description:
    "Attestation services in Shivamogga, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    ": https://foreignembassyattestation.com/attestation-services-in-shivamogga",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ShivamoggaAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <ShivamoggaAttestationHead />
      <ShivamoggaAttestationContent />
    </div>
  );
}
