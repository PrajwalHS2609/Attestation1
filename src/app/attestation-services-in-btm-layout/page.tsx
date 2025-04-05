import BTMLayoutAttestationContent from "@/components/AttestationCities/BTMLayoutAttestation/BTMLayoutAttestationContent";
import BTMLayoutAttestationHead from "@/components/AttestationCities/BTMLayoutAttestation/BTMLayoutAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in BTM Layout | Apostille Services Near Me",
  description:
    "Attestation Services in BTM Layout, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-btm-layout",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BTMLayoutAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BTMLayoutAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BTMLayoutAttestationContent />
    </div>
  );
}
