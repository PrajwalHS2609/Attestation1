import BirthAttestationHead from "@/components/BirthCertificateAttestation/BirthAttestationHead";
import BirthAttestationHeader from "@/components/BirthCertificateAttestation/BirthAttestationHeader";

export const metadata = {
  title:
    "Birth Certificate Attestation in Bangalore | Certificate Attestation Near Me",
  description:
    "Birth certificate attestation is included in non-educational certificate attestation. The main aim of birth certificate attestation is to guarantee the genuineness of the certificate.",
  canonical:
    "https://foreignembassyattestation.com/birth-certificate-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BirthCertificateAttestation() {
  return (
    <div className="main-container">
      <BirthAttestationHeader />
      <BirthAttestationHead />
    </div>
  );
}
