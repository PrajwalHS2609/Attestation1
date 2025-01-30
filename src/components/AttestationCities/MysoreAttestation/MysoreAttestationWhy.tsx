import React from "react";
import { FaHandPointRight } from "react-icons/fa6";

const MysoreAttestationWhy = () => {
  return (
    <div className="contentList-container">
      <h4>Why Do You Need Attestation Services in Mysore?</h4>
      <p>
        Using attestation services in Mysore can simplify and expedite the
        verification of your documents. Here are some key reasons why
        attestation is necessary:
      </p>
      <ul>
        <li>
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5>Higher Education Abroad </h5>
          </span>
          Universities and colleges require attested academic certificates for
          admissions.
        </li>{" "}
        <li>
          {" "}
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5>Employment Overseas</h5>
          </span>
          Employers demand attested documents to verify qualifications and work
          experience.{" "}
        </li>
        <li>
          {" "}
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5>Visa and Immigration</h5>
          </span>
          Government authorities need attested documents for visa applications.
        </li>
        <li>
          {" "}
          <span>
            <FaHandPointRight className="content-containerIcon" />{" "}
            <h5>Business Expansion </h5>
          </span>
           Companies seeking to establish operations in
          foreign countries need attested commercial documents.
        </li>
        <li>
          <span>
            <FaHandPointRight className="content-containerIcon" />
            <h5> Personal Documentation </h5>
          </span>
          Attested birth certificates, marriage certificates, and other legal
          papers are required for various purposes.
        </li>{" "}
      </ul>
    </div>
  );
};

export default MysoreAttestationWhy;
