import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MeaCommercialDoc from "@/components/MeaPage/MeaCommercialDoc/MeaCommercialDoc";
import MeaContent from "@/components/MeaPage/MeaContent";
import MeaHeader from "@/components/MeaPage/MeaHeader";
import MeaProcedure from "@/components/MeaPage/MeaProcedure";
export const metadata = {
  title: "MEA Apostille Services in Bangalore for all types of documents",
  description:
    "MEA Apostille Services in Bangalore at Lowest price for all types of personal documents, Home Department /General Administration Department are the designated authorities. ",
  canonical:
    "https://foreignembassyattestation.com/mea-apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function MeaPage() {
  return (
    <div className="main-container">
      <MeaHeader />
      <MeaProcedure />
      <MeaCommercialDoc />
      <MeaContent />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
