"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../media/images/faq.png";
import Image from "next/image";
const MofaFaq = () => {
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
                <h5>1. What is MOFA attestation in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    MOFA attestation in Bangalore refers to the authentication
                    of documents by the Ministry of Foreign Affairs (MOFA) of
                    the destination country, most commonly required after
                    embassy attestation. It is the final step to make documents
                    legally valid for use abroad.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is MOFA attestation required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    MOFA attestation is required to confirm that a document
                    attested by the embassy is genuine and officially accepted
                    in the destination country. It is mandatory for employment,
                    residence visas, family visas, and business purposes in many
                    countries, especially in the Middle East.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>3. Which documents require MOFA attestation?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Documents commonly requiring MOFA attestation include
                    educational certificates (degree, diploma), personal
                    documents (birth certificate, marriage certificate), and
                    commercial documents (power of attorney, invoices, company
                    agreements).
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>4. Who needs MOFA attestation services in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    MOFA attestation is required by professionals working
                    abroad, individuals applying for family or dependent visas,
                    students pursuing education overseas, and businesses
                    expanding or operating internationally.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  5. What is the process for MOFA attestation in Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The process generally includes state attestation (HRD or
                    Home Department), MEA attestation, embassy attestation of
                    the destination country, and finally MOFA attestation once
                    the document reaches the foreign country.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>6. How long does MOFA attestation take in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The time required for MOFA attestation depends on the
                    destination country and document type. Typically, it can
                    take from a few working days to one or two weeks when
                    handled through professional attestation services.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>7. Is MOFA attestation mandatory for all countries?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    No. MOFA attestation is mainly required for Middle East
                    countries such as the UAE, Saudi Arabia, Qatar, Kuwait, and
                    Oman. The requirement varies depending on the destination
                    country’s regulations.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. Are original documents required for MOFA attestation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Original documents are usually required for MOFA
                    attestation, especially for personal and educational
                    certificates. Photocopies are generally not accepted unless
                    specified by the authorities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  9. Can MOFA attestation be done without visiting offices in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Many professional attestation service providers in
                    Bangalore offer end-to-end services, including document
                    pickup, embassy coordination, overseas MOFA processing, and
                    secure delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. How do I choose the best MOFA attestation service in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Choose a service provider with experience in MOFA
                    procedures, strong embassy coordination, transparent
                    pricing, clear timelines, secure document handling, and
                    reliable customer support to ensure hassle-free MOFA
                    attestation.
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

export default MofaFaq;
