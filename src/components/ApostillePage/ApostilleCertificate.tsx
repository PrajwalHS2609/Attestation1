import Image from "next/image";
import "./ApostillePage.css";
import apostilleCert from "@/media/images/attestationCert.jpg";
export default function ApostilleCertificate() {
  return (
    <div className="apostilleCertificate-container">
      <div className="apostilleCertificate-content">
        <Image src={apostilleCert} alt="apostilleCert" />
      </div>
      <div className="apostilleCertificate-content">
        <h3>Certificate Apostille In India</h3>
        <p>
          Apostille is an international treaty drafted by the Hague Conference
          on Private International Law. It specifies the modalities through
          which a document issued in one of the signatory countries can be
          certified for legal purposes in all the other signatory states. A
          certification under the terms of the convention is called an
          apostille. It is an international certification comparable to a
          notarisation in domestic law, and normally supplements a local
          notarisation of the document. If the convention applies between two
          countries, such an apostille is sufficient to certify a document's
          validity, and removes the need for double-certification, by the
          originating country and then by the receiving country.
        </p>
        <p>
          Apostille is an international attestation that is acceptable in about
          112 countries, and most of the western world recognises Apostille Only
          original documents duly authenticated by the designated authorities of
          the State Governments / Sub-Divisional Magistrate are Apostilled by
          the Ministry of External Affairs. Apostille is done on the reverse
          side of the original document.
        </p>
      </div>
    </div>
  );
}
