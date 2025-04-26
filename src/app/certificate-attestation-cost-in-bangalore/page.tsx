import AttestationCostInBangaloreContent from "@/components/AttestationContent/CertificationAttestationCostInBangalore/AttestationCostInBangaloreContent";
import AttestationCostInBangaloreHead from "@/components/AttestationContent/CertificationAttestationCostInBangalore/AttestationCostInBangaloreHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Certification Attestation Cost in Bangalore| Certificate Attestation Fees Near Me",
  description:
    "Certification Attestation Cost in Bangalore for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/certificate-attestation-cost-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function CertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <AttestationCostInBangaloreHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <AttestationCostInBangaloreContent />
    </div>
  );
}
