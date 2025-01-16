import CountriesCarousel from "@/components/HomePage/CountriesCarousel/CountriesCarousel";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeGovernment from "@/components/HomePage/HomeGovernment/HomeGovernment";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeSeo from "@/components/HomePage/HomeSeo/HomeSeo";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import Map from "@/components/HomePage/Map/Map";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Attestation & Apostille Services in Bangalore at Best Price{" "}
        </title>
        <meta
          name="description"
          content="Attestation & Apostille Services in Bangalore at Best Price for Birth, Marriage, degree & Commercial Documents attestation. Call Today!"
        />
        <link rel="canonical" href="https://foreignembassyattestation.com/" />
      </Head>
      <div className="main-container">
        <HomeHeader />
        <HomeService />
        <HomeGovernment />
        <HomeCountries />
        <HomeAboutUs />
        <HomeSeo />
        <HomeWhy />
        <CountriesCarousel />
        <Map />
      </div>
    </>
  );
}
