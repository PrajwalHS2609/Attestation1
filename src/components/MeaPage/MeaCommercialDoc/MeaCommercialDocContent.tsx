import "./MeaCommercialDoc.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function MeaCommercialDocContent() {
  return (
    <div className="meaCommercialContent-container">
      <h4>COMMERCIAL DOCUMENTS:</h4>
      <p>
        Commercial Documents are to be pre-authenticated by the respective
        Chambers of Commerce before these can be attested by the Ministry of
        External Affairs.
      </p>
      <br />
      <h5>
        DOCUMENTS REQUIRED FOR EDUCATIONAL/PERSONAL CERTIFICATE ATTESTATION FOR
        MEA ATTESTATION:
      </h5>
      <p>
        Only original documents duly authenticated by the designated authorities
        of the State Governments are Apostilled by the Ministry of External
        Affairs. Apostille is done on the reverse side of the original document.
        The applicants need to submit the following documents/fees
      </p>
      <ul>
        <li>
          {" "}
          <MdKeyboardDoubleArrowRight className="meaCommercialList-icon" />
          Original document to be attested or apostilled.
        </li>
        <li>
          {" "}
          <MdKeyboardDoubleArrowRight className="meaCommercialList-icon" />
          One clear photocopy of the document.
        </li>
        <li>
          {" "}
          <MdKeyboardDoubleArrowRight className="meaCommercialList-icon" />
          One clear photocopy of the passport.
        </li>
      </ul>
      <p>
        <span> Please note:</span> For MEA attestation, original document needs
        to be pre authenticated first by respective HRD/HD
      </p>
    </div>
  );
}
