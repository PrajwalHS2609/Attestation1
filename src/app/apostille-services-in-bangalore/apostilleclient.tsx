"use client"
import ApostilleCertificate from "@/components/ApostillePage/ApostilleCertificate";
import ApostilleContent from "@/components/ApostillePage/ApostilleContent";
import ApostilleFlag from "@/components/ApostillePage/ApostilleFlags/ApostilleFlags";
import ApostilleHead from "@/components/ApostillePage/ApostilleHead";
import ApostilleHeader from "@/components/ApostillePage/ApostilleHeader";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export default function ApostilleClient() {
return(
    <>
    <ApostilleHeader />
    <ApostilleHead />
    <ApostilleCertificate />
    <ApostilleFlag />
    <ApostilleContent />
    <HomeService />
    <HomeCountries />
    <HomeWhy />
  </>
)
}
