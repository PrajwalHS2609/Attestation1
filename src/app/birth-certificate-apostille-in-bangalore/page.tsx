import BirthApostilleHead from "@/components/BirthCertificateApostille/BirthApostilleHead";
import BirthApostilleHeader from "@/components/BirthCertificateApostille/BirthApostilleHeader";
import Head from "next/head";

export default function BirthCertificateAttestation() {
  return (
    <>
      <Head>
        <title>
          Birth Certificate Apostille in Bangalore | Certificate Apostille Near
          Me
        </title>
        <meta
          name="description"
          content="Birth Certificate Apostille in Bangalore. This process involves the authentication of a birth certificate, ensuring its acceptance in foreign countries that are members of the Hague Apostille Convention."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/birth-certificate-apostille-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <BirthApostilleHeader />
        <BirthApostilleHead />
      </div>
    </>
  );
}
