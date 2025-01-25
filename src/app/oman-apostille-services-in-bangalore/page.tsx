import OmanApostilleContent from "@/components/ApostilleCountries/OmanApostille/OmanApostilleContent";
import OmanApostilleHead from "@/components/ApostilleCountries/OmanApostille/OmanApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import OmanFlag from "@/media/images/Countries_Flag/Oman.png";

export const metadata = {
  title: "Oman Apostille Services in Bangalore | Oman Apostille Near Me",
  description:
    "Oman Apostille Services in Bangalore at Lowest Price, whether it's for business, education, travel, or immigration, having your documents attested. ",
  canonical:
    "https://foreignembassyattestation.com/oman-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={OmanFlag.src} alt="Oman Flag" />
      <OmanApostilleHead />
      <OmanApostilleContent />
    </div>
  );
}
