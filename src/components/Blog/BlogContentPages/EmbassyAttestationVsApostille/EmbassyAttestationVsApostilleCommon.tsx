import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const EmbassyAttestationVsApostilleCommon = () => {
  return (
    <div className="blogWhat-content">
      <h5>Common Mistakes People Make</h5>
      <ul>
        <li>
          <span>
            <FaHandPointRight />
            Choosing the wrong method{" "}
          </span>
          <p>
            Many people try to apostille documents for non-Hague countries or
            vice versa.
          </p>
        </li>
        <li>
          <span>
            <FaHandPointRight />
            Not verifying document type{" "}
          </span>
          <p>
            Some documents require pre-authentication from universities or
            notaries before proceeding.
          </p>
        </li>{" "}
        <li>
          <span>
            <FaHandPointRight />
            Delaying the process{" "}
          </span>
          <p>Legalization can take time, so it's best to start early.</p>
        </li>
        <li>
          <span>
            <FaHandPointRight />
            Using unverified agents{" "}
          </span>
          <p> This can lead to document rejection or even legal issues.</p>
        </li>
      </ul>
    </div>
  );
};

export default EmbassyAttestationVsApostilleCommon;
