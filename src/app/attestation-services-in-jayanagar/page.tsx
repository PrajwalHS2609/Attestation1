import JayanagarAttestationContent from "@/components/AttestationCities/JayanagarAttestation/JayanagarAttestationContent";
import JayanagarAttestationHead from "@/components/AttestationCities/JayanagarAttestation/JayanagarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Jayanagar | Apostille Services Near Me",
  description:
    "Attestation Services in Jayanagar, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-jayanagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function JayanagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <JayanagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <JayanagarAttestationContent />
    </div>
  );
}
