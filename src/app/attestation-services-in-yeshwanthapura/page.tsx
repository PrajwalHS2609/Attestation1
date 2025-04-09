import YeshwanthapuraAttestationContent from "@/components/AttestationCities/YeshwanthapuraAttestation/YeshwanthapuraAttestationContent";
import YeshwanthapuraAttestationHead from "@/components/AttestationCities/YeshwanthapuraAttestation/YeshwanthapuraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Yeshwanthapura | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Yeshwanthapura, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-yeshwanthapura",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function YeshwanthapuraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <YeshwanthapuraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <YeshwanthapuraAttestationContent />
    </div>
  );
}
