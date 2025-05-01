import React from "react";

const EmbassyAttestationVsApostilleKey = () => {
  return (
    <div className="blogHead-content">
      <h3>Key Differences Between Embassy Attestation and Apostille</h3>
      <p>
        Let’s look at the core differences to help you understand which one
        applies to your case:
      </p>
      <div className="overflow-x-auto p-4 w-full" >
        <table className="w-full border border-gray-300 text-sm text-left text-gray-800">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Criteria</th>
              <th className="border border-gray-300 px-4 py-3">
                Embassy Attestation
              </th>
              <th className="border border-gray-300 px-4 py-3">Apostille</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-3">
                Applicable Countries
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Non-Hague Convention countries
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Hague Convention countries
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">
                Process Complexity
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Multi-step (Notary, State, MEA, Embassy)
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Single-step (MEA Apostille)
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-3">
                Document Acceptance
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Only after embassy authentication
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Accepted directly by foreign authorities
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">Time Frame</td>
              <td className="border border-gray-300 px-4 py-3">
                Longer due to multiple levels of verification
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Shorter, usually completed within a few days
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-3">Cost</td>
              <td className="border border-gray-300 px-4 py-3">
                Generally higher due to extra steps
              </td>
              <td className="border border-gray-300 px-4 py-3">
                More economical
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">Use Case</td>
              <td className="border border-gray-300 px-4 py-3">
                Employment, education, visa in Gulf and non-Hague countries
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Visa, study, work, or travel in Hague countries
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmbassyAttestationVsApostilleKey;
