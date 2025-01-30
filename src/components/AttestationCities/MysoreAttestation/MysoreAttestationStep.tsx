import React from "react";

const MysoreAttestationStep = () => {
  return (
    <div className="contentImportant-container">
      <h4>Step-by-Step Process of Attestation Services in Mysore</h4>
      <p>
        Understanding the attestation process helps you navigate the
        complexities involved in document verification. Here’s how attestation
        services in Mysore work:
      </p>
      <ul>
        <li>
          <span>
            <h5>Step 1: Notary Attestation</h5>{" "}
          </span>
          The first step in attestation is notary verification, where a notary
          public authenticates the document. This is usually done at the local
          level.
        </li>{" "}
        <li>
          {" "}
          <span>
            <h5> Step 2: State Government Attestation</h5>
          </span>
          Depending on the document type, it must be attested by the respective
          state authorities:
          <ul>
            <li>
              <span>Educational Documents: </span>
              Attested by the Department of Education
            </li>
            <li>
              <span>Personal Documents: </span> Verified by the Home Department
              or General Administration Department (GAD)
            </li>
            <li>
              <span>Commercial Documents: </span> Approved by the Chamber of
              Commerce
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <span>
            <h5>Step 3: MEA Attestation</h5>{" "}
          </span>
          The Ministry of External Affairs (MEA) provides the final
          authentication from the Indian government before the document is sent
          for embassy attestation.
        </li>
        <li>
          {" "}
          <span>
            <h5> Step 4: Embassy Attestation</h5>
          </span>
          The respective foreign embassy validates the document, making it
          legally acceptable in the destination country.
        </li>
      </ul>
    </div>
  );
};

export default MysoreAttestationStep;
