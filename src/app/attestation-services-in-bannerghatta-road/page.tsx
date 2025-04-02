import BannerghattaAttestationContent from "@/components/AttestationCities/BannerghattaAttestation/BannerghattaAttestationContent";
import BannerghattaAttestationHead from "@/components/AttestationCities/BannerghattaAttestation/BannerghattaAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation services in Bannerghatta Road, Bangalore for All types of Documents",
  description:
    "Attestation Services in Bannerghatta Road, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bannerghatta-road",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BannerghattaAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BannerghattaAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <BannerghattaAttestationContent />
    </div>
  );
}
