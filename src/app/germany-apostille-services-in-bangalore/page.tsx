import GermanyApostilleContent from "@/components/ApostilleCountries/GermanyApostille/GermanyApostilleContent";
import GermanyApostilleHead from "@/components/ApostilleCountries/GermanyApostille/GermanyApostilleHead";
import GermanyFlag from "@/media/images/Countries_Flag/Germany.png";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

export const metadata = {
  title: "Germany Apostille Services in Bangalore | Germany Apostille Near Me",
  description:
    "Germany Apostille Services in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/germany-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={GermanyFlag.src} alt="GermanyFlag" />
      <GermanyApostilleHead />
      <GermanyApostilleContent />
    </div>
  );
}
