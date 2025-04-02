import MangaloreAttestationContent from "@/components/AttestationCities/MangaloreAttestation/MangaloreAttestationContent";
import MangaloreAttestationHead from "@/components/AttestationCities/MangaloreAttestation/MangaloreAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    "Attestation services in Mangalore | Embassy Attestation in Mangalore",
  description:
    "Attestation services in Mangalore, we cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards.",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-mangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MangaloreAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <MangaloreAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <MangaloreAttestationContent />
    </div>
  );
}
