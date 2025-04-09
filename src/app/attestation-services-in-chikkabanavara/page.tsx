import ChikkabanavaraAttestationContent from "@/components/AttestationCities/ChikkabanavaraAttestation/ChikkabanavaraAttestationContent";
import ChikkabanavaraAttestationHead from "@/components/AttestationCities/ChikkabanavaraAttestation/ChikkabanavaraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Chikkabanavara | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Chikkabanavara, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-chikkabanavara",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function ChikkabanavaraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <ChikkabanavaraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ChikkabanavaraAttestationContent />
    </div>
  );
}
