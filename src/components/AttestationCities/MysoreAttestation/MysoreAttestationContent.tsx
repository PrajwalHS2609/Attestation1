import MysoreAttestationBenefits from "./MysoreAttestationBenefits";
import MysoreAttestationCommon from "./MysoreAttestationCommon";
import MysoreAttestationCost from "./MysoreAttestationCost";
import MysoreAttestationStep from "./MysoreAttestationStep";
import MysoreAttestationTypes from "./MysoreAttestationTypes";
import MysoreAttestationWhy from "./MysoreAttestationWhy";

export default function MysoreAttestationContent() {
  return (
    <div className="content-wrapper">
      <div className="content-container">
        <h4>What is Document Attestation?</h4>
        <p>
          Attestation is the process of authenticating official documents to
          confirm their legitimacy. Various government authorities and embassies
          require attestation to validate your documents before they can be used
          internationally. The process typically involves multiple levels of
          verification, including notary attestation, state attestation, MEA
          (Ministry of External Affairs) attestation, and embassy attestation.
        </p>
      </div>
      <MysoreAttestationWhy />
      <MysoreAttestationTypes />
      <MysoreAttestationStep/>
      <MysoreAttestationBenefits />
      <MysoreAttestationCommon />
      <MysoreAttestationCost />
    </div>
  );
}
