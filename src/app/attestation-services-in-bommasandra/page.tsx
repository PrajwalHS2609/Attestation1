import BommasandraAttestationContent from "@/components/AttestationCities/BommasandraAttestation/BommasandraAttestationContent";
import BommasandraAttestationHead from "@/components/AttestationCities/BommasandraAttestation/BommasandraAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
  title:
    "Attestation services in Bommasandra, Bangalore for All types of Documents",
  description:
    "Attestation Services in Bommasandra, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bommasandra",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BommasandraAttestation(){
    return(
        <div className="main-container">
        <HeaderComponent
          imageSrc={attestationBanner.src}
          alt="attestation Banner"
        />
        <BommasandraAttestationHead />
              <HomeService />
              <HomeCountries />
              <HomeWhy />
        <BommasandraAttestationContent />
      </div>    )
}