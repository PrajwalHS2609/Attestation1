import "./Footer.css";
import FooterApostille from "./FooterApostille";
import FooterAttestation from "./FooterAttestation";
import FooterContact from "./FooterContact";
import FooterDocuments from "./FooterDocuments";
import FooterEducation from "./FooterEducation";
import FooterService from "./FooterService";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-item">
          <FooterService />
        </div>
        <div className="footer-item">
          <FooterDocuments />
        </div>
        <div className="footer-item">
          <FooterEducation />
        </div>
        <div className="footer-item">
          <FooterAttestation />
        </div>
        <div className="footer-item">
          <FooterApostille />
        </div>
      </div>
      <div className="footer-content">
        <FooterContact />
      </div>
    </div>
  );
}
