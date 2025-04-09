import VasanthpuraAttestationContent from "@/components/AttestationCities/VasanthpuraAttestation/VasanthpuraAttestationContent";
import VasanthpuraAttestationHead from "@/components/AttestationCities/VasanthpuraAttestation/VasanthpuraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Vasanthpura| Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Vasanthpura, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-vasanthpura",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VasanthpuraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <VasanthpuraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <VasanthpuraAttestationContent />
    </div>
  );
}
