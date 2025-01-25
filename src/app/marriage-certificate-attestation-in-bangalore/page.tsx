import marriageAttestationBanner from "@/media/images/marriageCerti.png";
import MarriageAttestationHead from "@/components/MarriageCertificateAttestation/MarriageAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
export const metadata = {
  title:
    "Marriage Certificate Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Marriage Certificate Attestation in Bangalore. It is essential for proving the marital status of individuals, thereby enabling them to avail various benefits in foreign countries.",
  canonical:
    "https://foreignembassyattestation.com/marriage-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MarriageCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={marriageAttestationBanner.src}
        alt="marriage Attestation Banner"
      />
      <MarriageAttestationHead />
    </div>
  );
}
