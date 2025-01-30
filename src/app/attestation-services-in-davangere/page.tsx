import DavangereAttestationContent from "@/components/AttestationCities/DavangereAttestation/DavangereAttestationContent";
import DavangereAttestationHead from "@/components/AttestationCities/DavangereAttestation/DavangereAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title: "Attestation services in Davangere | Embassy Attestation in Davangere",
  description:
    "Attestation services in Davangere, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-davangere ",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DavangereAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <DavangereAttestationHead />
      <DavangereAttestationContent />
    </div>
  );
}
