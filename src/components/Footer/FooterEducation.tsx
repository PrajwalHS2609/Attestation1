import Link from "next/link";

export default function FooterEducation() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Education Certificates</h4>
        <li>
          <Link href=""> UG, PG Degree</Link>
        </li>
        <li>
          <Link href=""> Diploma Degree</Link>
        </li>
        <li>
          <Link href=""> Engineering Degree</Link>
        </li>
        <li>
          <Link href=""> Management Degree</Link>
        </li>
        <li>
          <Link href=""> Hotel Management</Link>
        </li>
        <li>
          <Link href=""> Medical Degree</Link>
        </li>
        <li>
          <Link href=""> Law Degree</Link>
        </li>
        <li>
          <Link href=""> Technical Degree</Link>
        </li>
        <li>
          <Link href=""> Professional Degree</Link>
        </li>
        <li>
          <Link href=""> PhD Degree</Link>
        </li>
      </ul>
    </div>
  );
}
