import MofaContent from "@/components/MofaPage/MofaContent";
import MofaCountries from "@/components/MofaPage/MofaCountries/MofaCountries";
import MofaHeader from "@/components/MofaPage/MofaHeader";
import MofaProcedure from "@/components/MofaPage/MofaProcedure";
import Head from "next/head";

export default function Mofa() {
  return (
    <>
      <Head>
        <title>MOFA Attestation in Bangalore at Lowest Price </title>
        <meta
          name="description"
          content="MOFA Attestation in Bangalore at Lowest Price. In case of personal documents, Home Department /General Administration Department are the designated authorities."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/mofa-attestation-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <MofaHeader />
        <MofaProcedure />
        <MofaCountries />
        <MofaContent />
      </div>
    </>
  );
}
