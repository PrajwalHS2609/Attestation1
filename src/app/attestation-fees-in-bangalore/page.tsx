import AttestationFeesInBangaloreContent from "@/components/AttestationContent/AttestationFeesInBangalore/AttestationFeesInBangaloreContent";
import AttestationFeesInBangaloreHead from "@/components/AttestationContent/AttestationFeesInBangalore/AttestationFeesInBangaloreHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
  title: "Attestation Fees in Bangalore | Certificate Attestation Near Me",
  description:
    "Embassy Attestation Fees in Bangalore for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/attestation-fees-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function AttestationFee() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <AttestationFeesInBangaloreHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <HomeBlog />  
      <AttestationFeesInBangaloreContent />
    </div>
  );
}
