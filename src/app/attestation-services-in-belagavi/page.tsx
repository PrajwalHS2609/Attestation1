import BelagaviAttestationContent from "@/components/AttestationCities/BelagaviAttestation/BelagaviAttestationContent";
import BelagaviAttestationHead from "@/components/AttestationCities/BelagaviAttestation/BelagaviAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title: "Attestation services in Belagavi | Embassy Attestation in Belagavi",
  description:
    "Attestation services in Belagavi, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards.",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-belagavi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BelagaviAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
<BelagaviAttestationHead/>
<BelagaviAttestationContent/>
    </div>
  );
}
