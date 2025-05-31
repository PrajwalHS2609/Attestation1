import CountriesCarousel from "@/components/HomePage/CountriesCarousel/CountriesCarousel";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeGovernment from "@/components/HomePage/HomeGovernment/HomeGovernment";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeSeo from "@/components/HomePage/HomeSeo/HomeSeo";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import Map from "@/components/HomePage/Map/Map";
export const metadata = {
  title: "Attestation & Apostille Services in Bangalore",
  description:
    "Attestation & Apostille Services in Bangalore at Best Price for Birth, Marriage, degree & Commercial Documents attestation. Call Today!",
  canonical: "https://foreignembassyattestation.com/",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};

export const revalidate = 0;

export default function Home() {
  return (
    <div className="main-container">
      <HomeHeader />
      <HomeService />
      <HomeGovernment />
      <HomeCountries />
      <HomeAboutUs />
      <HomeSeo />
      <HomeWhy />
      <CountriesCarousel />
      <HomeBlog />
      <HomeNews />
      <Map />
    </div>
  );
}
