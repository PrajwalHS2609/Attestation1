import DegreeAttestationHead from "@/components/DegreeAttestationCertificate/DegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import degreeBanner from "@/media/images/degreeCertificate.png";

export const metadata = {
  title:
    "Degree Certificate Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation in Bangalore. It involves authenticating a degree certificate, ensuring it is recognized and accepted in foreign countries that are part of the Hague Attestation Convention.",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DegreeCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={degreeBanner.src} alt="degree Banner" />
      <DegreeAttestationHead />
    </div>
  );
}
