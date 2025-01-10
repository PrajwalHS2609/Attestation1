import Link from "next/link";
import "./Footer.css";
export default function FooterService() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Our Service</h4>
        <li>
          <Link href="">Attestation</Link>
        </li>
        <li>
          <Link href="">Apostille</Link>
        </li>
        <li>
          <Link href="">State HRD</Link>
        </li>
        <li>
          <Link href="">MEA Apostille</Link>
        </li>
        <li>
          <Link href="">MOFA</Link>
        </li>
        <li>
          <Link href="">PCC</Link>
        </li>
        <li>
          <Link href="">WES</Link>
        </li>
        <li>
          <Link href="">Translation</Link>
        </li>
        <li>
          <Link href="">Kuwait Stamping</Link>
        </li>
      </ul>
    </div>
  );
}
