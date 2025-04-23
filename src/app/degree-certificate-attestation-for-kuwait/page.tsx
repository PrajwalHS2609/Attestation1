import KuwaitDegreeAttestationContent from "@/components/DegreeAttestation/KuwaitDegreeAttestation/KuwaitDegreeAttestationContent";
import KuwaitDegreeAttestationHead from "@/components/DegreeAttestation/KuwaitDegreeAttestation/KuwaitDegreeAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import KuwaitFlag from "@/media/images/Countries_Flag/Kuwait.png";

export const metadata = {
  title:
    "Degree Certificate Attestation for Kuwait| Certificate Attestation Near Me",
  description:
    "Degree Certificate Attestation for Kuwait for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-attestation-for-kuwait",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BahrainAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={KuwaitFlag.src} alt="Kuwait Flag Banner" />
      <KuwaitDegreeAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <KuwaitDegreeAttestationContent />
    </div>
  );
}
