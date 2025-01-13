import MofaCountries from "@/components/MofaPage/MofaCountries/MofaCountries";
import MofaHeader from "@/components/MofaPage/MofaHeader";
import MofaProcedure from "@/components/MofaPage/MofaProcedure";

export default function Mofa() {
  return (
    <div className="main-container">
      <MofaHeader />
      <MofaProcedure />
      <MofaCountries />
    </div>
  );
}
