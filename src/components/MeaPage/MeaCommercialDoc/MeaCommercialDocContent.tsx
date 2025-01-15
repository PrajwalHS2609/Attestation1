import "./MeaCommercialDoc.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function MeaCommercialDocContent() {
  return (
    <div className="meaCommercialContent-container">
      <h5>Documents Required for MEA Apostille in Bangalore</h5>
      <p>
        To successfully obtain MEA Apostille in Bangalore, applicants must
        submit the following documents:
      </p>
      <ul>
        <li>
          {" "}
          <MdKeyboardDoubleArrowRight className="meaCommercialList-icon" />
          Original document that requires attestation or apostille{" "}
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
        It is important to note that for MEA Attestation in Bangalore, the
        original document must be pre-authenticated by the respective State HRD,
        GAD, Home Department, or Chamber of Commerce, depending on the type of
        document. Without proper pre-authentication, the MEA will not proceed
        with the Apostille or attestation process.
      </p>
    </div>
  );
}
