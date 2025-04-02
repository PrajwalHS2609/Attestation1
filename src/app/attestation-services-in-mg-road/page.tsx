import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MgRoadAttestationContent from "@/components/MgRoadAttestation/MgRoadAttestationContent";
import MgRoadAttestationHead from "@/components/MgRoadAttestation/MgRoadAttestationHead";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title:
    " Attestation services in MG Road, Bangalore for All types of Documents",
  description:
    "Attestation Services in MG Road, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
  canonical:
    " https://foreignembassyattestation.com/attestation-services-in-mg-road",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MgRoadAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <MgRoadAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <MgRoadAttestationContent />
    </div>
  );
}
