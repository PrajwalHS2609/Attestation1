import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import QatarPccContent from "@/components/PccPage/QatarPcc/QatarPccContent";
import QatarPccHead from "@/components/PccPage/QatarPcc/QatarPccHead";
import qatarPccBanner from "@/media/images/Countries_Flag/Qatar.png"
export default function QatarPcc(){
    return(
        <div className="main-container">
        <HeaderComponent imageSrc={qatarPccBanner.src} alt="Qatar Pcc Banner" />
        <QatarPccHead />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
        <QatarPccContent />
      </div>
    )
}