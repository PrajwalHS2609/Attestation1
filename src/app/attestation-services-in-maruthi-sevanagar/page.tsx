import MaruthiAttestationContent from "@/components/AttestationCities/MaruthiAttestation/MaruthiAttestationContent";
import MaruthiAttestationHead from "@/components/AttestationCities/MaruthiAttestation/MaruthiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Maruthi Sevanagar | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Maruthi Sevanagar, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-maruthi-sevanagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MaruthiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <MaruthiAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MaruthiAttestationContent />
    </div>
  );
}
