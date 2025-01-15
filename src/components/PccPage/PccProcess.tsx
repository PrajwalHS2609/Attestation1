import "./PccPage.css";
export default function PccProcess() {
  return (
    <div className="pccImportant-container">
      <h4>The Process of PCC Verification</h4>
      <p>
        The PCC verification process involves multiple steps, and each stage
        must be completed accurately to avoid rejection. Since PCC verification
        is an essential document for various purposes, it is crucial to follow
        the correct procedure.
      </p>
      <ul>
        <li>
          <span>
            <h5>1. Application Submission</h5>{" "}
          </span>
          The first step in obtaining PCC verification is submitting an
          application with relevant documents. Applicants must provide a
          passport copy, proof of address, and fingerprints for criminal record
          checks.
        </li>{" "}
        <li>
          {" "}
          <span>
            <h5>2. Verification by Local Authorities</h5>
          </span>
          The next step involves verification by local police authorities, who
          conduct background checks to ensure the applicant has no criminal
          record. Once verified, the police department issues the PCC, which
          must then be attested for international use.
        </li>
        <li>
          {" "}
          <span>
            <h5>3. Attestation by Home Department</h5>{" "}
          </span>
          Before a PCC is valid for foreign use, it must be attested by the
          State Home Department. This authentication confirms that the document
          is issued by a legitimate authority and is genuine.
        </li>
        <li>
          {" "}
          <span>
            <h5> 4. Attestation by the Ministry of External Affairs (MEA)</h5>
          </span>
          After state-level verification, the PCC must be attested by the
          Ministry of External Affairs (MEA). The MEA verification adds legal
          credibility to the document, making it acceptable for international
          purposes.
        </li>
        <li>
          {" "}
          <span>
            <h5> 5. Embassy and MOFA Attestation</h5>
          </span>
          The final step in PCC verification involves embassy attestation from
          the country where the applicant intends to travel. In some cases,
          further attestation from the Ministry of Foreign Affairs (MOFA) of the
          destination country is required. This ensures that the document is
          officially recognized and accepted by foreign authorities.
        </li>
      </ul>
    </div>
  );
}
