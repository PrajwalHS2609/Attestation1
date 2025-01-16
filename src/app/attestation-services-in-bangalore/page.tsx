import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import AttestationFlag from "@/components/AttestationPage/AttestationFlags/AttestationFlags";
import AttestationCertificate from "@/components/AttestationPage/AttetationCertificate";
import AttestationHead from "@/components/AttestationPage/AttestationHead";
import AttestationHeader from "@/components/AttestationPage/AttestationHeader";
import AttestationContent from "@/components/AttestationPage/AttestationContent";
export const metadata = {
  title: "Attestation Services in Bangalore – Embassy Attestation in Bangalore",
  description:
    "Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Apostille() {
  return (
    <div className="main-container">
      <AttestationHeader />
      <AttestationHead />
      <AttestationCertificate />
      <AttestationFlag />
      <AttestationContent />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
