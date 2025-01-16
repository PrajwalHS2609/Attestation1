"use client"
import MarriageAttestationHead from "@/components/MarriageCertificateAttestation/MarriageAttestationHead";
import MarriageAttestationHeader from "@/components/MarriageCertificateAttestation/MarriageAttestationHeader";
import Head from "next/head";

export default function MarriageCertificateAttestation() {
  return (
    <>
      <Head>
        <title>
          Marriage Certificate Attestation in Bangalore | Certificate
          Attestation Near Me
        </title>
        <meta
          name="description"
          content="Marriage Certificate Attestation in Bangalore. It is essential for proving the marital status of individuals, thereby enabling them to avail various benefits in foreign countries."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/marriage-certificate-attestation-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <MarriageAttestationHeader/>
        <MarriageAttestationHead/>
      </div>
    </>
  );
}
