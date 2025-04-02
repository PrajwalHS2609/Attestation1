
import HubballiAttestationHead from "@/components/AttestationCities/HubballiAttestation/HubballiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";
import HubballiAttestationContent from './../../components/AttestationCities/HubballiAttestation/HubballiAttestationContent';
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export const metadata = {
  title:
    "Attestation Services in Hubballi | Embassy Attestation in Hubballi",
  description:
    "Attestation services in Hubballi, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-hubballi",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function HubballiAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <HubballiAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <HubballiAttestationContent />
    </div>
  );
}
