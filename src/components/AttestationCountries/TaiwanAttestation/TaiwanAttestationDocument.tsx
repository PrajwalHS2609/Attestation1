import { FaHandPointRight } from "react-icons/fa6";
export default function TaiwanAttestationDocument() {
  return (
    <div className="contentList-container">
      <h4>Documents Required for Taiwan Embassy Attestation in Bangalore</h4>
      <p>
        When seeking Taiwan Embassy Attestation in Bangalore, it is essential to
        prepare the following documents:
      </p>
      <ul>
        <li>
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5>
              Original document(s) that need attestationExperience and
              Expertise:
            </h5>
          </span>
        </li>{" "}
        <li>
          {" "}
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5> A copy of your passport for identity verification</h5>
          </span>
        </li>
        <li>
          {" "}
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5> Proof of address (if required)</h5>
          </span>
        </li>
        <li>
          {" "}
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5>
              {" "}
              A visa application or other forms, depending on the purpose of the
              attestation{" "}
            </h5>
          </span>
        </li>
        <li>
          <span>
            <FaHandPointRight className="content-containerIcon" />
            <h5> Photographs (if required for specific documents)</h5>
          </span>
        </li>{" "}
      </ul>
      <p>
        Make sure to check with the embassy or attestation service provider for
        any additional specific requirements for your type of document or
        purpose of attestation.
      </p>
    </div>
  );
}
