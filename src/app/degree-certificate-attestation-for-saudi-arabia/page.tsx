import SaudiDegreeAttestationContent from "@/components/DegreeAttestation/SaudiDegreeAttestation/SaudiDegreeAttestationContent";
import SaudiDegreeAttestationHead from "@/components/DegreeAttestation/SaudiDegreeAttestation/SaudiDegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import SaudiFlag from "@/media/images/Countries_Flag/Saudi Arabia.png";

export const metadata = {
  title: "Degree Certificate Attestation for Saudi Arabia| Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation for Saudi Arabia for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-for-saudi-arabia",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function SaudiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={SaudiFlag.src}
        alt="Bahrain Flag Banner"
      />
      <SaudiDegreeAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <SaudiDegreeAttestationContent />
    </div>
  );
}
