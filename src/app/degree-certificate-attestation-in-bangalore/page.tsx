import DegreeAttestationHead from "@/components/DegreeAttestationCertificate/DegreeAttestationHead";
import DegreeAttestationHeader from "@/components/DegreeAttestationCertificate/DegreeAttestationHeader";
import Head from "next/head";

export default function DegreeCertificateAttestation() {
  return (
    <>
      <Head>
        <title>
          Degree Certificate Attestation in Bangalore | Certificate Attestation
          Near Me
        </title>
        <meta
          name="description"
          content="Degree certificate attestation in Bangalore is a crucial process for individuals aiming to use their academic qualifications abroad for higher studies, employment, or migration."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/degree-certificate-attestation-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <DegreeAttestationHeader />
        <DegreeAttestationHead />
      </div>
      ;
    </>
  );
}
