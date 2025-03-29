import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import KuwaitPccContent from "@/components/PccPage/KuwaitPcc/KuwaitPccContent";
import KuwaitPccHead from "@/components/PccPage/KuwaitPcc/KuwaitPccHead";
import kuwaitPccBanner from "@/media/images/Countries_Flag/Kuwait.png"
export default function KuwaitPcc() {
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={kuwaitPccBanner.src} alt="Kuwait Pcc Banner" />
      <KuwaitPccHead />
            <HomeService />
            <HomeCountries />
            <HomeWhy/>
      <KuwaitPccContent />
    </div>
  );
}
