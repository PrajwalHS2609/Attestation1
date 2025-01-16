import BirthAttestationHead from "@/components/BirthCertificateAttestation/BirthAttestationHead";
import BirthAttestationHeader from "@/components/BirthCertificateAttestation/BirthAttestationHeader";
import Head from "next/head";

export default function BirthCertificateAttestation() {
  return (
    <>
      <Head>
        <title>
          Birth Certificate Attestation in Bangalore | Certificate Attestation
          Near Me{" "}
        </title>
        <meta
          name="description"
          content="Birth certificate attestation is included in non-educational certificate attestation. The main aim of birth certificate attestation is to guarantee the genuineness of the certificate."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/birth-certificate-attestation-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <BirthAttestationHeader />
        <BirthAttestationHead />
      </div>
    </>
  );
}
