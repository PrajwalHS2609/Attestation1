import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MysoreAttestationTypes = () => {
  return (
    <div className="contentList-container">
      <h4>Types of Documents That Require Attestation</h4>
      <p>
        Attestation services in Mysore cater to different categories of
        documents, including:
      </p>
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
            Divorce certificates{" "}
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />{" "}
            Police Clearance Certificates (PCC)
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
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            Business Agreements
          </span>
        </li>
        <li>
          {" "}
          <span>
            <MdKeyboardDoubleArrowRight className="content-containerIcon" />
            Export and Import Documents{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MysoreAttestationTypes;
