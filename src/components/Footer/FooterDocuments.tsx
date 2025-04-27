import Link from "next/link";

export default function FooterDocuments() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Documents</h4>
        <li>
          <Link href="birth-certificate-attestation-in-bangalore">
            Birth Certificate
          </Link>
        </li>
        <li>
          <Link href="marriage-certificate-attestation-in-bangalore">
            Marriage Certificate
          </Link>
        </li>
        <li>
          <Link href="commercial-certificate-attestation-in-bangalore">
            Commercial Documents
          </Link>
        </li>
        <li>
          <Link href="salary-certificate-attestation-in-bangalore">
            Salary Certificate
          </Link>
        </li>
        <li>
          <Link href="">Equivalence Certificate</Link>
        </li>
        <li>
          <Link href="">Single Status Certificate</Link>
        </li>
        <li>
          <Link href=""> Ministry of education department</Link>
        </li>
        <li>
          <Link href=""> Foreign Affairs (FA)</Link>
        </li>
        <li>
          <Link href=""> Transfer Certificate (TC)</Link>
        </li>
        <li>
          <Link href=""> Employment Certificate</Link>
        </li>
        <li>
          <Link href=""> Medical Certificate</Link>
        </li>
        <li>
          <Link href=""> Ministry of Health department</Link>
        </li>
        <li>
          <Link href=""> Ministry of Justice</Link>
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
