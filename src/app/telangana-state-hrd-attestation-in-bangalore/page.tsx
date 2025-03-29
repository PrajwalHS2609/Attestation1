import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import StateHrdTelanganaContent from "@/components/StateHrd/StateHrdTelangana/StateHrdTelanganaContent";
import StateHrdTelanganaHead from "@/components/StateHrd/StateHrdTelangana/StateHrdTelanganaHead";
import telanganaHrdBanner from "@/media/images/Hrd/TelenganaHrd.png";

export const metadata = {
  title:
    "Telangana State HRD Attestation in Bangalore | HRD Attestation Near Me",
  description:
    "Telangana State HRD Attestation in Bangalore is a crucial process for individuals who need to authenticate their educational documents for international purposes. ",
  canonical:
    "https://foreignembassyattestation.com/telangana-state-hrd-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export default function TelanganaStateHrd() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={telanganaHrdBanner.src}
        alt="Telengana Hrd Banner"
      />
      <StateHrdTelanganaHead />
      <HomeService />
      <HomeCountries />
      <StateHrdTelanganaContent />
    </div>
  );
}
