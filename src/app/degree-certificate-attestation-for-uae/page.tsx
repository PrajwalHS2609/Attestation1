import UaeDegreeAttestationContent from "@/components/DegreeAttestation/UaeDegreeAttestation/UaeDegreeAttestationContent";
import UaeDegreeAttestationHead from "@/components/DegreeAttestation/UaeDegreeAttestation/UaeDegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UaeFlag from "@/media/images/Countries_Flag/UAE.png";

export const metadata = {
  title: "Degree Certificate Attestation for UAE| Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation for UAE for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-for-uae",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function UaeAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={UaeFlag.src}
        alt="Bahrain Flag Banner"
      />
      <UaeDegreeAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <UaeDegreeAttestationContent />
    </div>
  );
}
