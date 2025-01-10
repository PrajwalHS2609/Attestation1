import CountriesCarousel from "@/components/HomePage/CountriesCarousel/CountriesCarousel";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeGovernment from "@/components/HomePage/HomeGovernment/HomeGovernment";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeSeo from "@/components/HomePage/HomeSeo/HomeSeo";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import Map from "@/components/HomePage/Map/Map";
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
      <Map />
      <CountriesCarousel/>
    </div>
  );
}
