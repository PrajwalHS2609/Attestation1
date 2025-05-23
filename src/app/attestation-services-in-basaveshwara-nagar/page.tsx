import BasaveshwaraAttestationContent from "@/components/AttestationCities/BasaveshwaraAttestation/BasaveshwaraAttestationContent";
import BasaveshwaraAttestationHead from "@/components/AttestationCities/BasaveshwaraAttestation/BasaveshwaraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    ": Attestation Services in Basaveshwara Nagar | Embassy Attestation Near Me",
  description:
    "Attestation Services in Basaveshwara Nagar, Bangalore for PCC, HRD, MOFA, Birth, Degree, Marriage, Personal & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-basaveshwara-nagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BasaveshwaraAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <BasaveshwaraAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <BasaveshwaraAttestationContent />
    </div>
  );
}
