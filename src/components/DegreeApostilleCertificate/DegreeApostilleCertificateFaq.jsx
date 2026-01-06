"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../media/images/faq.png";
import Image from "next/image";
const DegreeApostilleCertificateFaq = () => {
  return (
    <div className="serviceFaq-container">
      {/* <HeadingProps title="" para="" /> */}
      <div className="homeWhyHead">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="serviceFaq-wrapper">
        <div className="serviceFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="serviceFaq-accItem" eventKey="0">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>1. What is degree certificate apostille in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Degree certificate apostille in Bangalore is the process of
                    authenticating an educational degree certificate by the
                    Ministry of External Affairs (MEA) so it is legally accepted
                    in Hague Convention member countries.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is degree certificate apostille required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Degree certificate apostille is required to prove the
                    authenticity of your educational qualification when applying
                    for overseas jobs, higher education, work visas, student
                    visas, or permanent residency in Hague Convention countries.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  3. Who needs degree certificate apostille services in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Degree certificate apostille is needed by students planning
                    to study abroad, professionals seeking employment overseas,
                    individuals applying for work or residence visas, and
                    candidates migrating for long-term settlement.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. Which countries accept apostilled degree certificates?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Apostilled degree certificates are accepted by countries
                    that are members of the Hague Convention, such as the USA,
                    UK, Germany, France, Italy, Netherlands, Spain, Australia,
                    and many others.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  {" "}
                  5. What is the process for degree certificate apostille in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The process usually involves verification by the State
                    Education Department or university (if required), followed
                    by apostille stamping by the Ministry of External Affairs
                    (MEA). The exact steps depend on the issuing authority of
                    the degree.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  6. How long does degree certificate apostille take in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The processing time typically ranges from 2 to 7 working
                    days, depending on document verification requirements.
                    Professional apostille services help ensure faster and
                    error-free processing.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  7. Is degree certificate apostille different from embassy
                  attestation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Apostille is valid only for Hague Convention countries,
                    while embassy attestation is required for non-Hague
                    Convention countries. The correct process depends on the
                    destination country.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. Are original degree certificates required for apostille?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Original degree certificates are mandatory for
                    apostille. The MEA does not accept photocopies for apostille
                    authentication.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  9. Can degree certificate apostille be done without visiting
                  offices in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Many apostille service providers in Bangalore offer
                    doorstep pickup and delivery services, allowing applicants
                    to complete the apostille process without visiting
                    government offices.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. How do I choose the best degree certificate apostille
                  service in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Choose a provider with experience in MEA apostille
                    procedures, transparent pricing, clear timelines, secure
                    document handling, and responsive customer support to ensure
                    safe and timely apostille.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
          </Accordion>
        </div>
        <div className="serviceFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
  );
};

export default DegreeApostilleCertificateFaq;
