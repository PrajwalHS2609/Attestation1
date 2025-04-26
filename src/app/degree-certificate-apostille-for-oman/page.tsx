
import OmanDegreeApostilleContent from "@/components/DegreeApostille/OmanDegreeApostille/OmanDegreeApostilleContent";
import OmanDegreeApostilleHead from "@/components/DegreeApostille/OmanDegreeApostille/OmanDegreeApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import OmanFlag from "@/media/images/Countries_Flag/Oman.png";
export const metadata = {
  title: "Degree Certificate Apostille for Oman| Certificate Apostille Near Me",
  description:
    "Degree Certificate Apostille for Oman for employment, higher education, or professional licensing. Speak to Experts!",
  canonical:
    "https://foreignembassyattestation.com/degree-certificate-apostille-for-oman",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function OmanApostilleDegree() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={OmanFlag.src}
        alt="Oman Flag Banner"
      />
      <OmanDegreeApostilleHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <OmanDegreeApostilleContent />
    </div>
  );
}
