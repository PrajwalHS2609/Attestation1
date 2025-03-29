import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import StateHrdMaharashtraContent from "@/components/StateHrd/StateHrdMaharashtra/StateHrdMaharashtraContent";
import StateHrdMaharashtraHead from "@/components/StateHrd/StateHrdMaharashtra/StateHrdMaharashtraHead";
import maharasthraHrdBanner from "@/media/images/Hrd/MaharastraHrd.png";

export const metadata = {
  title: "Maharashtra State HRD Attestation in Bangalore | HRD Attestation Near Me",
  description: ": Maharashtra State HRD Attestation in Bangalore is a crucial process for individuals who need to authenticate their educational documents for international purposes. ",
  canonical: "https://foreignembassyattestation.com/maharashtra-state-hrd-attestation-in-bangalore ",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function MaharashtraHrd() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={maharasthraHrdBanner.src}
        alt="Maharashtra Hrd Banner"
      />
      <StateHrdMaharashtraHead />
      <HomeService />
      <HomeCountries />
      <StateHrdMaharashtraContent />
    </div>
  );
}
