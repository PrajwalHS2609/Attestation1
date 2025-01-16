import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeSeoContent2 from "@/components/HomePage/HomeSeo/HomeSeoContent2";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import StateHomeDepartmentBlore from "@/components/StateHrd/HomeDepartmentBlore";
import HrdBlore from "@/components/StateHrd/HrdBlore";
import StateHrdCommercial from "@/components/StateHrd/StateHrdCommercial";
import StateHrdHead from "@/components/StateHrd/StateHrdHead";
import StateHrdHeader from "@/components/StateHrd/StateHrdHeader";
import "@/components/HomePage/HomeSeo/HomeSeo.css";
import StateHrdContent from "@/components/StateHrd/StateHrdContent";
import Head from "next/head";
export default function StateHrd() {
  return (
    <>
      <Head>
        <title>State HRD & Home Department Attestation in Bangalore </title>
        <meta
          name="description"
          content="State HRD & Home Department Attestation in Bangalore at Lowest Price. All the documents meant for Attestation / Apostille must be attested by the home department."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/state-hrd-attestation-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <StateHrdHeader />
        <StateHrdHead />
        <StateHrdCommercial />
        <HrdBlore />
        <StateHomeDepartmentBlore />
        <StateHrdContent />
        <HomeSeoContent2 />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
      </div>
    </>
  );
}
