import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import MofaContent from "@/components/MofaPage/MofaContent";
import MofaCountries from "@/components/MofaPage/MofaCountries/MofaCountries";
import MofaProcedure from "@/components/MofaPage/MofaProcedure";
import mofaBanner from "@/media/images/mofaBanner.png";

export const metadata = {
  title: "MOFA Attestation in Bangalore at Lowest Price",
  description:
    "MOFA Attestation in Bangalore at Lowest Price. In case of personal documents, Home Department /General Administration Department are the designated authorities.",
  canonical:
    "https://foreignembassyattestation.com/mofa-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Mofa() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={mofaBanner.src} alt="mofa Banner" />
      <MofaProcedure />
      <MofaCountries />
      <HomeBlog />
      <HomeNews />
      <MofaContent />
    </div>
  );
}
