import "@/components/Style/style.css";
export default function UaeAttestationSteps() {
  return (
    <div className="contentImportant-container">
      <h4>Steps in the UAE Attestation Process</h4>
      <p>
        The UAE attestation process involves multiple stages of authentication
        and verification by different authorities. Here’s a step-by-step
        breakdown:
      </p>
      <ul>
        <li>
          <span>
            <h5> 1.Notary Attestation:</h5>{" "}
          </span>
          The first step involves getting the document attested by a notary
          public. This step confirms the authenticity of the document’s
          signature and content.
        </li>{" "}
        <li>
          {" "}
          <span>
            <h5> 2. State Attestation:</h5>
          </span>
          For educational and personal documents, the respective State Home
          Department or Education Department provides the initial verification.
        </li>
        <li>
          {" "}
          <span>
            <h5> 3. MEA (Ministry of External Affairs) Attestation:</h5>{" "}
          </span>
          Once verified at the state level, the document is sent to the Ministry
          of External Affairs in India for further authentication.
        </li>
        <li>
          {" "}
          <span>
            <h5> 4. UAE Embassy Attestation:</h5>
          </span>
          The document is then authenticated by the UAE Embassy or Consulate in
          India. This step confirms the document’s validity for use in the UAE.
        </li>
        <li>
          {" "}
          <span>
            <h5> 5. MOFA (Ministry of Foreign Affairs) Attestation:</h5>
          </span>
          The final stage involves attestation by the Ministry of Foreign
          Affairs in the UAE.
        </li>
      </ul>
    </div>
  );
}
