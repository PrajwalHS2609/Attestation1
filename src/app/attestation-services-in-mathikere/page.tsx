import MathikereAttestationHead from "@/components/AttestationCities/MathikereAttestation/MathikereAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Mathikere | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Mathikere, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-mathikere",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MathikereAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <MathikereAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <MathikereAttestationHead />
    </div>
  );
}
