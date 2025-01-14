import Image from "next/image";
import "./MofaCountries.css";
import uaeMofa from "@/media/images/MofaImgs/MofaUae.jpg";
import qatarMofa from "@/media/images/MofaImgs/MofaQatar.jpg";
import saudiMofa from "@/media/images/MofaImgs/MofaSaudi.jpg";
import bahrainMofa from "@/media/images/MofaImgs/MofaBahrain.jpg";
import kuwaitMofa from "@/media/images/MofaImgs/MofaKuwait.jpg";

export default function MofaCountries() {
  const mofaCountries = [
    {
      id: 1,
      img: uaeMofa,
      head: "MOFA UAE",
      para: "For individuals traveling to the United Arab Emirates (UAE), the MOFA attestation process is mandatory after obtaining attestation from the issuing country. This step ensures that documents such as educational certificates, marriage certificates, birth certificates, and commercial documents are legally recognized in the UAE. Once the document has been authenticated in the home country, it must be submitted to the UAE MOFA for final verification. The processing time for MOFA attestation in the UAE typically takes around 8 working days, depending on the type of document and verification requirements. Additional charges may apply, depending on the complexity of the attestation process.",
    },
    {
      id: 2,
      img: qatarMofa,
      head: "MOFA QATAR",
      para: "For individuals planning to work or study in Qatar, MOFA attestation is required for all essential documents. Similar to the UAE, documents must first be attested by the relevant authorities in the home country before being submitted to Qatar’s MOFA. This attestation validates documents such as academic certificates, personal identification records, and employment contracts, ensuring their authenticity. The processing time for MOFA attestation in Qatar is generally 8 working days, although additional verification may be required in some cases.",
    },
    {
      id: 3,
      img: saudiMofa,
      head: "MOFA SAUDI",
      para: "When applying for jobs or residency in Saudi Arabia, the MOFA attestation process is more complex and time-consuming. After obtaining attestation from the home country, documents must be sent to the Saudi MOFA for further verification. The attestation process for Saudi Arabia includes stringent checks, particularly for educational and commercial documents. Unlike other countries, Saudi MOFA attestation takes a minimum of 40 working days and can extend up to 6 months, depending on the type of document and level of verification required. Additional fees apply for attestation services, and applicants must ensure all documents are correctly authenticated before submission.",
    },
    {
      id: 4,
      img: bahrainMofa,
      head: "MOFA BAHRAIN",
      para: "For individuals moving to Bahrain, MOFA attestation is a necessary step for legalizing documents. Whether applying for employment, higher education, or business registration, attested documents are required to confirm their authenticity. Similar to other countries, all documents must first be attested by the Home Department and MEA before being submitted for Bahrain MOFA attestation. The processing time varies depending on the document type, but applicants should expect an additional waiting period for verification.",
    },
    {
      id: 5,
      img: kuwaitMofa,
      head: "MOFA KUWAIT",
      para: "In the case of Kuwait, MOFA attestation is compulsory for all legal documents, including educational degrees, marriage certificates, birth certificates, and business-related paperwork. This process is necessary for securing work permits, student visas, and company registrations. Once documents are attested in the home country, they must be presented to Kuwait’s MOFA for final approval. The processing time depends on the document category, and applicants may be required to submit additional paperwork for verification.",
    },
  ];
  return (
    <div className="mofaCountries-container">
      {mofaCountries.map((x) => (
        <div className="mofaCountries-content" key={x.id}>
          <div className="mofaCountries-item" id="mofaCountries-imgContainer">
            <Image src={x.img} alt={x.head} />
          </div>
          <div className="mofaCountries-item">
            <h4>{x.head}</h4>
            <p>{x.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
