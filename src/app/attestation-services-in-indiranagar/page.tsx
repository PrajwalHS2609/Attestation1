import IndiranagarAttestationContent from "@/components/AttestationCities/IndiranagarAttestation/IndiranagarAttestationContent";
import IndiranagarAttestationHead from "@/components/AttestationCities/IndiranagarAttestation/IndiranagarAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title: "Attestation Services in Indiranagar | Attestation Price Near Me",
  description:
    "Attestation & Apostille Services in Indiranagar, Bangalore for HRD, MEA, MOFA Birth, Marriage, Degree & Commercial Documents. Call for Assistance!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-indiranagar",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function IndiranagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <IndiranagarAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <IndiranagarAttestationContent />
    </div>
  );
}
