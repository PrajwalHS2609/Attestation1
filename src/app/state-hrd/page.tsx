import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import StateHomeDepartmentBlore from "@/components/StateHrd/HomeDepartmentBlore";
import StateHrdCommercial from "@/components/StateHrd/StateHrdCommercial";
import StateHrdHead from "@/components/StateHrd/StateHrdHead";
import StateHrdHeader from "@/components/StateHrd/StateHrdHeader";

export default function StateHrd() {
  return (
    <div className="main-container">
      <StateHrdHeader />
      <StateHrdHead />
      <StateHrdCommercial />
      <StateHomeDepartmentBlore/>
      <HomeService />
      <HomeCountries />
      <HomeWhy />
    </div>
  );
}
