
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import TranslationHead from "@/components/TranslationPage/TranslationHead";
import TranslationService from "@/components/TranslationPage/TranslationService/TranslationService";
import translateBanner from "@/media/images/translationBanner.jpg";

export default function Translation() {
  
  return (
    <div className="main-container">
      <HeaderComponent imageSrc={translateBanner.src} alt="translate Banner" />
      <TranslationHead />
      <TranslationService/>
    </div>
  );
}
