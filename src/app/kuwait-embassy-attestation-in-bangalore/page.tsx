import KuwaitAttestationContent from "@/components/AttestationCountries/KuwaitAttestation/KuwaitAttestationContent";
import KuwaitAttestationHead from "@/components/AttestationCountries/KuwaitAttestation/KuwaitAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import KuwaitFlag from "@/media/images/Countries_Flag/Kuwait.png";

export const metadata = {
  title:
    "Kuwait Embassy Attestation in Bangalore | Kuwait Attestation Services Near Me",
  description:
    "Kuwait Embassy Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today! ",
  canonical:
    "https://foreignembassyattestation.com/kuwait-embassy-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function KuwaitAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={KuwaitFlag.src} alt="KuwaitFlag" />
      <KuwaitAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <KuwaitAttestationContent />
    </div>
  );
}
