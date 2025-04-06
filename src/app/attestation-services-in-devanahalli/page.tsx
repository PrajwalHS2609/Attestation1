import DevanahalliAttestationContent from "@/components/AttestationCities/DevanahalliAttestation/DevanahalliAttestationContent";
import DevanahalliAttestationHead from "@/components/AttestationCities/DevanahalliAttestation/DevanahalliAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation Services in Devanahalli | Embassy Attestation Near Me",
  description:
    "Attestation Services in Devanahalli, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-devanahalli",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DevanahalliAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <DevanahalliAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <DevanahalliAttestationContent />
    </div>
  );
}
