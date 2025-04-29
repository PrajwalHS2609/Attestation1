import Link from "next/link";

export default function FooterDocuments() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Documents</h4>
        <li>
          <Link href="/birth-certificate-attestation-in-bangalore">
            Birth Certificate
          </Link>
        </li>
        <li>
          <Link href="/marriage-certificate-attestation-in-bangalore">
            Marriage Certificate
          </Link>
        </li>
        <li>
          <Link href="/commercial-certificate-attestation-in-bangalore">
            Commercial Documents
          </Link>
        </li>
        <li>
          <Link href="/salary-certificate-attestation-in-bangalore">
            Salary Certificate
          </Link>
        </li>
        <li>
          <Link href="/equivalence-certificate-attestation-in-bangalore">Equivalence Certificate</Link>
        </li>
        <li>
          <Link href="/single-status-certificate-attestation-in-bangalore">Single Status Certificate</Link>
        </li>
        <li>
          <Link href="/ministry-of-education-department-attestation-in-bangalore"> Ministry of education department</Link>
        </li>
        <li>
          <Link href="/foreign-affairs-attestation-in-bangalore"> Foreign Affairs (FA)</Link>
        </li>
        <li>
          <Link href="/transfer-certificate-attestation-in-bangalore"> Transfer Certificate (TC)</Link>
        </li>
        <li>
          <Link href=""> Employment Certificate</Link>
        </li>
        <li>
          <Link href="/medical-certificate-attestation-in-bangalore"> Medical Certificate</Link>
        </li>
        <li>
          <Link href="/ministry-of-health-department-attestation-in-bangalore"> Ministry of Health department</Link>
        </li>
        <li>
          <Link href="/ministry-of-justice-attestation-in-bangalore"> Ministry of Justice</Link>
        </li>
        <li>
          <Link href=""> Chamber of Commerce</Link>
        </li>
        <li>
          <Link href=""> Labor Department</Link>
        </li>
        <li>
          <Link href=""> Death Certificate</Link>
        </li>
      </ul>
    </div>
  );
}
