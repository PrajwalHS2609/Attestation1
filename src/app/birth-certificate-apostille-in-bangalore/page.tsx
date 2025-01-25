
import BirthApostilleHead from "@/components/BirthCertificateApostille/BirthApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import birthAttestationBanner from "@/media/images/birthCerti.png";
export const metadata = {
  title:
    "Birth Certificate Apostille in Bangalore | Certificate Apostille Near Me",
  description:
    "Birth Certificate Apostille in Bangalore. This process involves the authentication of a birth certificate, ensuring its acceptance in foreign countries that are members of the Hague Apostille Convention.",
  canonical:
    "https://foreignembassyattestation.com/birth-certificate-apostille-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function BirthCertificateAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={birthAttestationBanner.src} alt="Birth Attestation Banner" />
      <BirthApostilleHead />
    </div>
  );
}
