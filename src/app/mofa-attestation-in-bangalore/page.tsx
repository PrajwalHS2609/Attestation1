import MofaContent from "@/components/MofaPage/MofaContent";
import MofaCountries from "@/components/MofaPage/MofaCountries/MofaCountries";
import MofaHeader from "@/components/MofaPage/MofaHeader";
import MofaProcedure from "@/components/MofaPage/MofaProcedure";
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
      <MofaHeader />
      <MofaProcedure />
      <MofaCountries />
      <MofaContent />
    </div>
  );
}
