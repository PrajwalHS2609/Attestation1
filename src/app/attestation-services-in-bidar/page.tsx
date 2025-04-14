import BidarAttestationContent from "@/components/AttestationCities/BidarAttestation/BidarAttestationContent";
import BidarAttestationHead from "@/components/AttestationCities/BidarAttestation/BidarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Bidar | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Bidar, Karnataka for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bidar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function WhitefieldAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BidarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BidarAttestationContent />
    </div>
  );
}
