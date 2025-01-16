import ApostilleCertificate from "@/components/ApostillePage/ApostilleCertificate";
import ApostilleContent from "@/components/ApostillePage/ApostilleContent";
import ApostilleFlag from "@/components/ApostillePage/ApostilleFlags/ApostilleFlags";
import ApostilleHead from "@/components/ApostillePage/ApostilleHead";
import ApostilleHeader from "@/components/ApostillePage/ApostilleHeader";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import Head from "next/head";
export default function Attestation() {
  return (
    <>
      <Head>
        <title>
          Apostille Services in Bangalore – Embassy Apostille in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Apostille Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents apostille. Call Today!"
        />
        <link
          rel="canonical"
          href=" https://foreignembassyattestation.com/apostille-services-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <ApostilleHeader />
        <ApostilleHead />
        <ApostilleCertificate />
        <ApostilleFlag />
        <ApostilleContent />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
      </div>
    </>
  );
}
