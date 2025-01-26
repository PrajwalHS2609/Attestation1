import "./PccImp.css";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";

export default function PccImpCard() {
  const pccImp = [
    {
      id: 1,
      icon: <FaEarthAfrica />,
      head: "Immigration and Visa Applications",
      para: "One of the most common reasons for obtaining PCC verification is immigration and visa processing. Many countries require individuals applying for long-term visas, residency permits, or work permits to submit a PCC. This is particularly necessary for individuals moving abroad for permanent residency, family reunification, or work-related stays. Governments use PCC verification to ensure that applicants do not pose any security risks. A properly attested PCC facilitates smooth immigration procedures and increases the chances of visa approval.",
    },
    {
      id: 2,
      icon: <FaBusinessTime />,
      head: "Employment Opportunities Abroad",
      para: "Employers in foreign countries often demand PCC verification before hiring international candidates. This requirement is particularly strict for jobs in healthcare, education, finance, and security-sensitive industries. A verified PCC provides assurance to employers that the applicant has no criminal record and is suitable for employment. Without proper PCC verification, job applicants may face disqualification or delays in their hiring process. PCC verification is also mandatory for professionals applying for government jobs or working in regulated industries.",
    },
    {
      id: 3,
      icon: <FaBabyCarriage />,
      head: "Adoption Procedures",
      para: "When individuals or couples apply to adopt a child, they must undergo PCC verification to prove that they have no criminal background. Adoption agencies and legal authorities use this document to assess the suitability of prospective parents. A verified PCC ensures that the child is placed in a safe and responsible environment. Countries with strict adoption laws mandate that adoptive parents obtain PCC verification before proceeding with the legal adoption process.",
    },
    {
      id: 4,
      icon: <MdOutlineCurrencyExchange />,
      head: "Business and Trade",
      para: "Entrepreneurs and business professionals expanding their operations internationally may require PCC verification for legal and regulatory purposes. When setting up a business in another country, government agencies may ask for a PCC to verify that the applicant has no criminal history. This is especially important for individuals involved in finance, trade, and corporate management, where trust and credibility play a significant role. A verified PCC ensures compliance with international legal standards and prevents complications during business registration.",
    },
  ];
  return (
    <div className="pccImpCard-container">
      {pccImp.map((x) => (
        <div className="pccImpCard-wrapper" key={x.id}>
          {" "}
          <div className="pccImpCard-content">
            <div className="pccImpCard-item">
              <span>
                <h6>0{x.id}</h6>
              </span>
              <span className="pccImpCard-icon">{x.icon}</span>
            </div>
          </div>
          <div className="pccImpCard-content">
            <h5>{x.head} </h5>
            <p>{x.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
