import FranceApostilleContent from "@/components/ApostilleCountries/FranceApostille/FranceApostilleContent";
import FranceApostilleHead from "@/components/ApostilleCountries/FranceApostille/FranceApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import FranceFlag from "@/media/images/Countries_Flag/France.png";

export const metadata = {
  title:
    "France Apostille Services in Bangalore | Best France Apostille Near Me",
  description:
    "France Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards",
  canonical:
    "https://foreignembassyattestation.com/france-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={FranceFlag.src} alt="France Flag" />
      <FranceApostilleHead />
      <FranceApostilleContent />
    </div>
  );
}
