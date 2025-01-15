import { LiaHandPointRight } from "react-icons/lia";
import "@/components/Style/style.css";

export default function MeaProcess() {
  return (
    <div className="content-wrapper">
      <div className="content-container">
        <h4>Process of MEA Apostille in Bangalore</h4>
        <p>
          The MEA Apostille in Bangalore process involves multiple steps, each
          of which is essential to ensure the document is legally recognized in
          foreign countries. Below is a step-by-step breakdown of the process:
        </p>
        <ul>
          <h5>1. Authentication of Documents</h5>
          <li>
            <span>
              <LiaHandPointRight className="content-containerIcon" />
            </span>{" "}
            Before submitting documents for MEA Attestation in Bangalore, they
            must be authenticated by the State Home Department (for personal
            documents), Education Department (for educational documents), or
            Chamber of Commerce (for commercial documents).
          </li>
          <li>
            <span>
              {" "}
              <LiaHandPointRight className="content-containerIcon" />
            </span>{" "}
            This initial authentication confirms that the document is genuine
            and issued by the correct authorities.
          </li>
        </ul>
        <ul>
          <h5>2. Legalization by the Ministry of External Affairs (MEA)</h5>
          <li>
            <span>
              {" "}
              <LiaHandPointRight className="content-containerIcon" />
            </span>{" "}
            Once the document is authenticated by the state authorities, it is
            sent to the MEA Apostille in Bangalore office for final
            verification.
          </li>
          <li>
            <span>
              {" "}
              <LiaHandPointRight className="content-containerIcon" />
            </span>{" "}
            The MEA provides attestation by stamping the document with an
            Apostille or an official attestation seal.
          </li>
          <li>
            <span>
              <LiaHandPointRight className="content-containerIcon" />
            </span>{" "}
            The MEA only attests documents that have been properly
            authenticated, and it does not verify the content of the documents.
          </li>
        </ul>
        <ul>
          <h5>3. Apostille for Countries Under the Hague Convention</h5>
          <li>
            <span>
              {" "}
              <LiaHandPointRight className="content-containerIcon" />{" "}
            </span>
            If the document is meant for a country that is part of the Hague
            Convention, no further attestation is required after the MEA
            Apostille in Bangalore.
          </li>
          <li>
            <span>
              {" "}
              <LiaHandPointRight className="content-containerIcon" />{" "}
            </span>
            This means that the document is immediately recognized in the
            foreign country without additional legalization.
          </li>
        </ul>
        <ul>
          <h5>4. Embassy Attestation for Non-Hague Countries</h5>
          <li>
            <span>
              <LiaHandPointRight className="content-containerIcon" />
            </span>{" "}
            If the document is intended for use in a country that is not part of
            the Hague Convention, further attestation from the respective
            foreign embassy or consulate is necessary after MEA Attestation in
            Bangalore.
          </li>
        </ul>
      </div>
    </div>
  );
}
