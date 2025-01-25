
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import MarriageApostilleHead from "@/components/MarriageCertificateApostille/MarriageApostilleHead";
import marriageAttestationBanner from "@/media/images/marriageCerti.png"

export const metadata = {
  title:
    "Marriage Certificate Apostille in Bangalore | Certificate Apostille Near Me",
  description:
    "Marriage Certificate Apostille in Bangalore. It is essential for proving the marital status of individuals, thereby enabling them to avail various benefits in foreign countries.",
  canonical:
    "https://foreignembassyattestation.com/marriage-certificate-apostille-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MarriageCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={marriageAttestationBanner.src} alt="Marriage Attestation Banner" />
      <MarriageApostilleHead />
    </div>
  );
}
