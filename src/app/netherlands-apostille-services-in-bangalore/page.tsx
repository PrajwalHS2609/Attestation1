import NetherlandApostilleContent from "@/components/ApostilleCountries/NetherlandsApostille/NetherlandsApostilleContent";
import NetherlandApostilleHead from "@/components/ApostilleCountries/NetherlandsApostille/NetherlandsApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import NetherlandFlag from "@/media/images/Countries_Flag/Netherlands.png";

export const metadata = {
  title: "Netherlands Apostille Services in Bangalore | Best Mexico Apostille Near Me",
  description:
    "Netherlands Apostille Services in Bangalore cater to a wide range of needs, ensuring that your personal, educational, and commercial documents are verified and meet the required international standards. ",
  canonical:
    "https://foreignembassyattestation.com/netherlands-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostille() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={NetherlandFlag.src} alt="Netherland Flag" />
      <NetherlandApostilleHead />
      <NetherlandApostilleContent />
    </div>
  );
}
