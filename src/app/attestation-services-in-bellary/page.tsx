
import BellaryAttestationContent from "@/components/AttestationCities/BellaryAttestation/BellaryAttestationContent";
import BellaryAttestationHead from "@/components/AttestationCities/BellaryAttestation/BellaryAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    "Attestation services in Bellary | Embassy Attestation in Bellary",
  description:
    "Attestation services in Bellary, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bellary",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BellaryAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BellaryAttestationHead />
      <BellaryAttestationContent />
    </div>
  );
}
