import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "@/components/Style/style.css";
export default function UaeAttestationTypes() {
  return (
    <div className="contentList-container">
      <h4>Types of Documents That Require UAE Attestation</h4>
      <p>Documents that typically require UAE attestation include:</p>
      <ul>
        <h5>1. Educational Documents:</h5>
        <li>
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Degree certificates
          </span>
        </li>{" "}
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Diploma certificates
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Transcripts
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Mark sheets
          </span>
        </li>
      </ul>
      <ul>
        <h5>2. Personal Documents:</h5>
        <li>
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Birth certificates{" "}
          </span>
        </li>{" "}
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Marriage certificates{" "}
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Death certificates
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Divorce decrees{" "}
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Medical certificates{" "}
          </span>
        </li>
      </ul>
      <ul>
        <h5>3. Commercial Documents:</h5>
        <li>
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Power of attorney{" "}
          </span>
        </li>{" "}
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Articles of incorporation{" "}
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Memorandum of association
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Invoices and trade licenses{" "}
          </span>
        </li>
      </ul>
    </div>
  );
}
