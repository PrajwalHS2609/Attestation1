import ApostilleCostInBangaloreContent from "@/components/ApostilleContent/CertificationApostilleCostInBangalore/ApostilleCostInBangaloreContent";
import ApostilleCostInBangaloreHead from "@/components/ApostilleContent/CertificationApostilleCostInBangalore/ApostilleCostInBangaloreHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import apostilleBanner from "@/media/images/apostilleBanner.png";
export const metadata = {
  title: "Certification Apostille Cost in Bangalore| Certificate Apostille Fees Near Me",
  description:
    "Certification Apostille Cost in Bangalore for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/certificate-apostille-cost-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function CertificateApostille() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={apostilleBanner.src}
        alt="apostille Banner"
      />
      <ApostilleCostInBangaloreHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <ApostilleCostInBangaloreContent />
    </div>
  );
}
