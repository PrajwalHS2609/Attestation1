import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import MeaCommercialDoc from "@/components/MeaPage/MeaCommercialDoc/MeaCommercialDoc";
import MeaContent from "@/components/MeaPage/MeaContent";
import MeaHeader from "@/components/MeaPage/MeaHeader";
import MeaProcedure from "@/components/MeaPage/MeaProcedure";
import Head from "next/head";

export default function MeaPage() {
  return (
    <>
      <Head>
        <title>
          MEA Apostille Services in Bangalore for all types of documents{" "}
        </title>
        <meta
          name="description"
          content="MEA Apostille Services in Bangalore at Lowest price for all types of personal documents, Home Department /General Administration Department are the designated authorities. "
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/mea-apostille-services-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <MeaHeader />
        <MeaProcedure />
        <MeaCommercialDoc />
        <MeaContent />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
      </div>
    </>
  );
}
