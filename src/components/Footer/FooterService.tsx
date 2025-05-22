import Link from "next/link";
import "./Footer.css";
export default function FooterService() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Our Service</h4>
        <li>
          <Link href="/attestation-services-in-bangalore">Attestation</Link>
        </li>
        <li>
          <Link href="/apostille-services-in-bangalore">Apostille</Link>
        </li>
        <li>
          <Link href="/state-hrd-attestation-in-bangalore">State HRD</Link>
        </li>
        <li>
          <Link href="/mea-apostille-services-in-bangalore">MEA Apostille</Link>
        </li>
        <li>
          <Link href="/mofa-attestation-in-bangalore">MOFA</Link>
        </li>
        <li>
          <Link href="/pcc-verification-in-bangalore">PCC</Link>
        </li>
        <li>
          <Link href="/wes-verification-attestation-in-bangalore">WES</Link>
        </li>
        {/* <li>
          <Link href="">Translation</Link>
        </li> */}
        <li>
          <Link href="/visa-stamping-services-in-bangalore">Visa Stamping</Link>
        </li>
               <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}
