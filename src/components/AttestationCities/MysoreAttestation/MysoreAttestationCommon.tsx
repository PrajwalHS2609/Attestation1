import React from "react";
import { GoDot } from "react-icons/go";

const MysoreAttestationCommon = () => {
  return (
    <div className="contentList-container">
      <h4>Common Challenges in the Attestation Process</h4>
      <p>
        While attestation services in Mysore make the process smoother, some
        common challenges include:{" "}
      </p>
      <ul>
        <li>
          <span>
            <GoDot className="content-containerIcon" />{" "}
            <h5>Lengthy Processing Time</h5>
            Depending on the document type and attestation level, the process
            can take several weeks.
          </span>
        </li>{" "}
        <li>
          {" "}
          <span>
            <GoDot className="content-containerIcon" />{" "}
            <h5> Incomplete Documentation</h5>
            Missing or incorrect details can lead to rejections.
          </span>
        </li>
        <li>
          {" "}
          <span>
            <GoDot className="content-containerIcon" />{" "}
            <h5> Country-Specific Requirements</h5>
            Different countries have varying attestation requirements, making it
            essential to stay informed.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MysoreAttestationCommon;
