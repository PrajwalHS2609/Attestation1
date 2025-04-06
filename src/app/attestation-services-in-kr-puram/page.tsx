import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import KRPuramAttestationContent from "@/components/KRPuramAttestation/KRPuramAttestationContent";
import KRPuramAttestationHead from "@/components/KRPuramAttestation/KRPuramAttestationHead";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in KR Puram | Embassy Attestation Near Me",
  description:
    "Attestation Services in KR Puram, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-kr-puram",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KRPuramAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KRPuramAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KRPuramAttestationContent />
    </div>
  );
}
