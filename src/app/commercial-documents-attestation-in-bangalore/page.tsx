import CommercialAttestationHead from "@/components/CommercialDocsAttestation/CommercialDocsAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import commercialBanner from "@/media/images/commercialDocsBanner.png";
export const metadata = {
  title:
    "Commercial Documents Attestation in Bangalore for Business Certificates",
  description:
    "Commercial documents attestation in Bangalore is a crucial process that involves verifying the authenticity of various business-related documents for international use.",
  canonical:
    "https://foreignembassyattestation.com/commercial-documents-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function CommercialDocumentsAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={commercialBanner.src}
        alt="commercial Banner"
      />
      <CommercialAttestationHead />
    </div>
  );
}
