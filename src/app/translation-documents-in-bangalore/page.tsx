
import TranslationHead from "@/components/TranslationPage/TranslationHead";
import TranslationHeader from "@/components/TranslationPage/TranslationHeader";
import TranslationService from "@/components/TranslationPage/TranslationService/TranslationService";

export default function Translation() {
  
  return (
    <div className="main-container">
      <TranslationHeader />
      <TranslationHead />
      <TranslationService/>
    </div>
  );
}
