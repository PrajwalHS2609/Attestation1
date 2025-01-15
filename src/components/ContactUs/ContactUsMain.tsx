import ContactUsAddress from "./ContactUsAddress";
import ContactUsFrom from "./ContactUsForm";

export default function ContactUsMain() {
  return (
    <div className="contactUs-MainContainer">
      <div className="contactUs-MainContent">
        <ContactUsAddress/>
      </div>
      <div className="contactUs-MainContent">
        <ContactUsFrom />
      </div>
    </div>
  );
}
