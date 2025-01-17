import { Metadata } from "next";
import ApostilleClient from "./apostilleclient";
export const metadata:Metadata= {
  title: "Apostille Services in Bangalore – Embassy Apostille in Bangalore",
  description:
    "Apostille Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents apostille. Call Today!",
  // canonical:
  //   "https://foreignembassyattestation.com/apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Attestation() {
  return (
    <div className="main-container">
      <ApostilleClient />
    </div>
  );
}
