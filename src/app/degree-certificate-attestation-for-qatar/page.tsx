import QatarDegreeAttestationContent from "@/components/DegreeAttestation/QatarDegreeAttestation/QatarDegreeAttestationContent";
import QatarDegreeAttestationHead from "@/components/DegreeAttestation/QatarDegreeAttestation/QatarDegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import QatarFlag from "@/media/images/Countries_Flag/Qatar.png";

export const metadata = {
  title:
    "Degree Certificate Attestation for Qatar| Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation for Qatar for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-for-qatar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function QatarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={QatarFlag.src} alt="Qatar Flag Banner" />
      <QatarDegreeAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <QatarDegreeAttestationContent />
    </div>
  );
}
