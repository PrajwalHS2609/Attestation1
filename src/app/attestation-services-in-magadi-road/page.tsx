import MagadiAttestationContent from "@/components/AttestationCities/MagadiAttestation/MagadiAttestationContent";
import MagadiAttestationHead from "@/components/AttestationCities/MagadiAttestation/MagadiAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
    title:
      "Attestation services in Magadi Road, Bangalore for All types of Documents",
    description:
      "Attestation Services in Magadi Road, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
    canonical:
      "https://foreignembassyattestation.com/attestation-services-in-magadi-road",
    keywords: [
      "Attestation, Apostille, Bangalore, Best Price",
      "Birth, Marriage, Degree",
    ],
  };
export default function MagadiRoad(){
    return(
        <div className="main-container">
        <HeaderComponent
          imageSrc={attestationBanner.src}
          alt="attestation Banner"
        />
        <MagadiAttestationHead />
              <HomeService />
              <HomeCountries />
              <HomeWhy />
        <MagadiAttestationContent />
      </div>    )
}