
import VisaStampingContent from "@/components/VisaStampingPage/VisaStampingContent";
import VisaStampingHead from "@/components/VisaStampingPage/VisaStampingHead";
import VisaStampingHeader from "@/components/VisaStampingPage/VisaStampingHeader";
export const metadata = {
  title: "Visa Stamping Services in Bangalore | Visa Stamping Near Me",
  description:
    "Visa Stamping Services in Bangalore. It is a crucial step that grants official permission from the destination country, allowing entry for a specific purpose.",
  canonical:
    "https://foreignembassyattestation.com/visa-stamping-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function VisaStamping() {
  return (
    <div className="main-container">
      <VisaStampingHeader />
      <VisaStampingHead />
      <VisaStampingContent />
    </div>
  );
}
