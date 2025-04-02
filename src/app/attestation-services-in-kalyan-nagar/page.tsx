import KalyanAttestationContent from "@/components/AttestationCities/KalyanAttestation/KalyanAttestationContent";
import KalyanAttestationHead from "@/components/AttestationCities/KalyanAttestation/KalyanAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";
export const metadata = {
    title:
      "Attestation services in Kalyan Nagar, Bangalore for All types of Documents",
    description:
      "Attestation Services in Kalyan Nagar, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
    canonical:
      "https://foreignembassyattestation.com/attestation-services-in-kalyan-nagar",
    keywords: [
      "Attestation, Apostille, Bangalore, Best Price",
      "Birth, Marriage, Degree",
    ],
  };
export default function KalyanAttestation(){
    return(
        <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <KalyanAttestationHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy />
      <KalyanAttestationContent />
    </div>
    )
}