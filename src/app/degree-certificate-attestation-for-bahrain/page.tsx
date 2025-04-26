import BahrainDegreeAttestationContent from "@/components/DegreeAttestation/BahrainDegreeAttestation/BahrainDegreeAttestationContent";
import BahrainDegreeAttestationHead from "@/components/DegreeAttestation/BahrainDegreeAttestation/BahrainDegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import BahrainFlag from "@/media/images/Countries_Flag/Baharain.png";

export const metadata = {
  title: "Degree Certificate Attestation for Bahrain| Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation for Bahrain for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-for-bahrain",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BahrainAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={BahrainFlag.src}
        alt="Bahrain Flag Banner"
      />
      <BahrainDegreeAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BahrainDegreeAttestationContent />
    </div>
  );
}
