import MexicoApostilleContent from "@/components/ApostilleCountries/MexicoApostille/MexicoApostilleContent";
import MexicoApostilleHead from "@/components/ApostilleCountries/MexicoApostille/MexicoApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import MexicoFlag from "@/media/images/Countries_Flag/Mexico.png";

export const metadata = {
  title:
    "Mexico Apostille Services in Bangalore | Best Mexico Apostille Near Me",
  description:
    "Mexico Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/mexico-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MexicoApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={MexicoFlag.src} alt="Mexico Flag" />
      <MexicoApostilleHead />
      <MexicoApostilleContent />
    </div>
  );
}
