import ManipalAttestationContent from "@/components/AttestationCities/ManipalAttestation/ManipalAttestationContent";
import ManipalAttestationHead from "@/components/AttestationCities/ManipalAttestation/ManipalAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Manipal | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Manipal, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-manipal",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ManipalAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <ManipalAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ManipalAttestationContent />
    </div>
  );
}
