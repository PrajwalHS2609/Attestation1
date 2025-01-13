import "./TranslationService.css";
import { FaBusinessTime } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";

export default function TranslationServiceMain() {
  const translateService = [
    {
      id: 1,
      icon: <FaBusinessTime />,
      title: "Business Translation :",
      content:
        "Conversion of commercial and administrative business documents for internal or external purposes.",
    },
    {
      id: 2,
      icon: <FaCog />,
      title: "Technical Translation :",
      content:
        "Translation of technical content such as user manuals, patents, and technical brochures by experts well-versed in technical jargon.",
    },
    {
      id: 3,
      icon: <FaBalanceScale />,
      title: " Legal Translation :",
      content:
        "Translation of legal documents, often requiring attestation and certified translators.",
    },
    {
      id: 4,
      icon: <FaBriefcaseMedical />,
      title: "Medical Translation :",
      content:
        "Conversion of medical documents, including research papers, patient information, and medical prescriptions.",
    },
    {
      id: 5,
      icon: <GiMoneyStack />,
      title: "Financial Translation :",
      content:
        "Translation of financial documents such as balance sheets, financial reports, and bank statements.",
    },
  ];
  const translateService2 = [
    {
      id: 1,
      icon: <FaPenToSquare />,
      title: "Literary Translation :",
      content:
        "Translation of literary works, including poems, novels, blogs, and other literary content.",
    },
    {
      id: 2,
      icon: <FaSchool />,
      title: "Academic Translation :",
      content:
        "Translation of academic texts, including credentials, textbooks, and pamphlets.",
    },
    {
      id: 3,
      icon: <FaComputer />,
      title: "Website Translation :",
      content:
        "Translation of web pages to reach target audiences and generate adequate traffic.",
    },
    {
      id: 4,
      icon: <FaRegFileAlt />,
      title: "Script Translation :",
      content:
        "Translation of scripts for theatrical productions, films, short web videos, and other purposes",
    },
  ];
  const respTranslateService = [
    {
      id: 1,
      icon: <FaBusinessTime />,
      title: "Business Translation :",
      content:
        "Conversion of commercial and administrative business documents for internal or external purposes.",
    },
    {
      id: 2,
      icon: <FaCog />,
      title: "Technical Translation :",
      content:
        "Translation of technical content such as user manuals, patents, and technical brochures by experts well-versed in technical jargon.",
    },
    {
      id: 3,
      icon: <FaBalanceScale />,
      title: " Legal Translation :",
      content:
        "Translation of legal documents, often requiring attestation and certified translators.",
    },
    {
      id: 4,
      icon: <FaBriefcaseMedical />,
      title: "Medical Translation :",
      content:
        "Conversion of medical documents, including research papers, patient information, and medical prescriptions.",
    },
    {
      id: 5,
      icon: <GiMoneyStack />,
      title: "Financial Translation :",
      content:
        "Translation of financial documents such as balance sheets, financial reports, and bank statements.",
    },

    {
      id: 6,
      icon: <FaPenToSquare />,
      title: "Literary Translation :",
      content:
        "Translation of literary works, including poems, novels, blogs, and other literary content.",
    },
    {
      id: 7,
      icon: <FaSchool />,
      title: "Academic Translation :",
      content:
        "Translation of academic texts, including credentials, textbooks, and pamphlets.",
    },
    {
      id: 8,
      icon: <FaComputer />,
      title: "Website Translation :",
      content:
        "Translation of web pages to reach target audiences and generate adequate traffic.",
    },
    {
      id: 9,
      icon: <FaRegFileAlt />,
      title: "Script Translation :",
      content:
        "Translation of scripts for theatrical productions, films, short web videos, and other purposes",
    },
  ];
  return (
    <>
      {" "}
      <div className="translateService-container">
        <div className="translateService-bar">
          {translateService.map((x) => (
            <div className="translateService-card" key={x.id}>
              <div className="translateService-scrollTop"></div>
              <span className="translateService-icon">{x.icon}</span>
              <h5>{x.title}</h5>
              <p>{x.content}</p>
              <div className="translateService-dummy1"></div>
              <div className="translateService-dummy2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="translateService-container">
        <div className="translateService-bar">
          {translateService2.map((x) => (
            <div
              className="translateService-card"
              id="translateService-card1"
              key={x.id}
            >
              <div className="translateService-scrollTop"></div>
              <span className="translateService-icon">{x.icon}</span>
              <h5>{x.title}</h5>
              <p>{x.content}</p>
              <div className="translateService-dummy1"></div>
              <div className="translateService-dummy2"></div>
            </div>
          ))}
        </div>
      </div>
      {/* -----------------------------------for mobile responsive------------------------------------------------ */}
      <div className="resp-TranslateService-container">
        {respTranslateService.map((x) => (
          <div className="resp-TranslateService-wrapper" key={x.id}>
            <div className="resp-TranslateService-bar">
              <div
                className="resp-TranslateService-card"
                id="resp-TranslateService-card1"
                key={x.id}
              >
                <div className="resp-TranslateService-scrollTop"></div>
                <span className="resp-TranslateService-icon">{x.icon}</span>
                <h5>{x.title}</h5>
                <p>{x.content}</p>
                <div className="resp-TranslateService-dummy1"></div>
                <div className="resp-TranslateService-dummy2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
