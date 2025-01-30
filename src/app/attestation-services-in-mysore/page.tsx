
import MysoreAttestationContent from "@/components/AttestationCities/MysoreAttestation/MysoreAttestationContent";
import MysoreAttestationHead from "@/components/AttestationCities/MysoreAttestation/MysoreAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    "Attestation services in Mysore | Documents Attestation in Mysore",
  description:
    "Attestation services in Mangalore, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards.",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-mysore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MysoreAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
<MysoreAttestationHead/>
<MysoreAttestationContent/>

    </div>
  );
}
