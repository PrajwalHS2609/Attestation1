import CommercialAttestationHead from "@/components/CommercialDocsAttestation/CommercialDocsAttestationHead";
import CommercialAttestationHeader from "@/components/CommercialDocsAttestation/CommercialDocsAttestationHeader";
import Head from "next/head";

export default function CommercialDocumentsAttestation() {
  return (
    <>
      <Head>
        <title>
          Commercial Documents Attestation in Bangalore for Business
          Certificates{" "}
        </title>
        <meta
          name="description"
          content="Commercial documents attestation in Bangalore is a crucial process that involves verifying the authenticity of various business-related documents for international use."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/commercial-documents-attestation-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <CommercialAttestationHeader />
        <CommercialAttestationHead />
      </div>
      ;
    </>
  );
}
