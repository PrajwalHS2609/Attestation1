import TranslationServiceMain from "./TranslationServiceMain";
import TranslationServiceHead from "./TranslationServiceHead";

export default function TranslationService() {
  return (
    <div className="component-container">
      <TranslationServiceHead />
      <TranslationServiceMain />
    </div>
  );
}
