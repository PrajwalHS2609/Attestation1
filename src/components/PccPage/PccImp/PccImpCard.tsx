import "./PccImp.css";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";

export default function PccImpCard() {
  const pccImp = [
    {
      id: 1,
      icon: <FaEarthAfrica />,
      head: "Immigration and Visa Applications",
      para: "Many countries require a PCC to process visa applications, residency permits, and other immigration-related processes to ensure the applicant does not have a criminal history.",
    },
    {
      id: 2,
      icon: <FaBusinessTime />,
      head: "Employment",
      para: "Employers abroad often demand a PCC to verify that potential employees have a clean criminal record, which is essential for trust and safety in the workplace.",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      head: "Education",
      para: "Educational institutions abroad may require a PCC to ensure the safety of their campus and the integrity of their student body.",
    },
    {
      id: 4,
      icon: <FaBabyCarriage />,
      head: "Adoption",
      para: "When adopting a child, a PCC is often required to ensure that the adoptive parents have no criminal background.",
    },
    {
      id: 5,
      icon: <MdOutlineCurrencyExchange />,
      head: "Business and Trade:",
      para: " For businesses looking to expand or operate internationally, a PCC may be required to ensure that key personnel have a clean record.",
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
