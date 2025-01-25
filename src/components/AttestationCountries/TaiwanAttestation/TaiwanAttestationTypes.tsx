import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "@/components/Style/style.css";
export default function TaiwanAttestationTypes() {
  return (
    <div className="contentList-container">
      <h4>Types of Documents for Taiwan Embassy Attestation in Bangalore</h4>
      <p>
        There are several types of documents that can be attested by the Taiwan
        Embassy in Bangalore. These documents include:
      </p>
      <ul>
        <li>
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            <h5> Educational Certificates </h5>{" "}
          </span>
          <p>
            This includes degree certificates, diplomas, transcripts, and other
            academic records. These documents might be required if you are
            planning to study or work in Taiwan.
          </p>
        </li>{" "}
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            <h5>Commercial Documents </h5>
          </span>
          <p>
            Business-related documents such as certificates of incorporation,
            trade licenses, or financial records that are necessary for starting
            a business, making investments, or engaging in commercial
            transactions in Taiwan.
          </p>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            <h5> Personal Documents</h5>{" "}
          </span>
          <p>
            This category includes birth certificates, marriage certificates,
            divorce papers, and other personal documents that may be needed for
            various legal procedures in Taiwan.
          </p>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            <h5> Power of Attorney </h5>{" "}
          </span>
          <p>
            A document granting someone the authority to act on your behalf,
            which may require attestation for legal validity in Taiwan.
          </p>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            <h5> Medical Certificates </h5>{" "}
          </span>
          <p>
            In case you need medical treatment or have a medical-related purpose
            in Taiwan, attesting medical certificates can be essential.
          </p>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            <h5> Employment Documents </h5>{" "}
          </span>
          <p>
            Work permits, job contracts, or salary certificates that may be
            required if you are relocating to Taiwan for employment purposes.
          </p>
        </li>
      </ul>
    </div>
  );
}
