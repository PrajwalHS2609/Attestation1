import DevarajeevanahalliAttestationContent from "@/components/AttestationCities/DevarajeevanahalliAttestation/DevarajeevanahalliAttestationContent";
import DevarajeevanahalliAttestationHead from "@/components/AttestationCities/DevarajeevanahalliAttestation/DevarajeevanahalliAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation & Apostille Services in Devarajeevanahalli | Embassy Attestation Services Near Me",
  description:
    "Attestation Services in Devarajeevanahalli, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-devarajeevanahalli",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function DevarajeevanahalliAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <DevarajeevanahalliAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <DevarajeevanahalliAttestationContent />
    </div>
  );
}
