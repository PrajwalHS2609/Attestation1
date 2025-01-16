import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import PccContent from "@/components/PccPage/PccContent";
import PccHead from "@/components/PccPage/PccHead";
import PccHeader from "@/components/PccPage/PccHeader";
import PccImp from "@/components/PccPage/PccImp/PccImp";
import Head from "next/head";

export default function Pcc() {
  return (
    <>
      <Head>
        <title>
          PCC Verification in Bangalore – Police Document Verification in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="PCC Verification in Bangalore is a crucial process for individuals planning to travel, work, or reside abroad. Call Today!"
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/pcc-verification-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <PccHeader />
        <PccHead />
        <PccImp />
        <PccContent />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
      </div>
    </>
  );
}
