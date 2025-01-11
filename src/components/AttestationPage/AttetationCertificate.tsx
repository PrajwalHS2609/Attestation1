import Image from "next/image";
import "./AttestationPage.css";
import attestationCert from "@/media/images/attestationCert.jpg";
export default function AttestationCertificate() {
  return (
    <div className="attestationCertificate-container">
      <div className="attestationCertificate-content">
        <Image src={attestationCert} alt="" />
      </div>
      <div className="attestationCertificate-content">
        <h3>Certificate Attestation In India</h3>
        <p>
          Earth is very small to shift from one place to another without any
          barrier, if you prove yourself genuine. There are many reasons for a
          person to hang around to other places. Might be graduating for higher
          degrees, job opportunities, official purpose, holiday, some might plan
          to settle down as their dreams and many more. To satisfy all these
          needs we have to follow some process and procedures where in we need
          to prove ourselves an authenticated person.
        </p>
        <p>
          It is mandatory to attest your documents/certificates when you have to
          stay anywhere out of your country without any issues for your planned
          period of time in that country. You necessitate the document
          attestation any time in a path of life, for number of reasons like:
          some medical emergency, want to study abroad, for job, need to shift
          and so on. For all this, everyone require to do some documentation.
        </p>
      </div>
    </div>
  );
}
