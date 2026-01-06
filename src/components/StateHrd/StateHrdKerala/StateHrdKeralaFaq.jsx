"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../../media/images/faq.png";
import Image from "next/image";
const StateHrdKeralaFaq = () => {
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
                <h5>1. What is Kerala State HRD attestation in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Kerala State HRD attestation in Bangalore is the
                    authentication of educational documents issued in Kerala by
                    the Kerala State Human Resource Development (HRD)
                    Department, processed through authorized channels for
                    overseas use.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is Kerala State HRD attestation required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Kerala State HRD attestation is required to verify the
                    authenticity of educational certificates before they are
                    accepted abroad. It is usually a mandatory step before MEA
                    attestation, apostille, or embassy attestation.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  3. Which documents require Kerala State HRD attestation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Documents that commonly require Kerala State HRD attestation
                    include degree certificates, diploma certificates,
                    provisional certificates, consolidated mark sheets, and
                    other academic records issued by universities or boards in
                    Kerala.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. Who needs Kerala State HRD attestation services in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Students planning to study abroad, professionals seeking
                    overseas employment, individuals applying for work visas,
                    and candidates migrating internationally with Kerala-issued
                    certificates require this attestation.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  5. What is the process for Kerala State HRD attestation in
                  Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The process involves verification of the educational
                    document from the issuing university or board in Kerala,
                    followed by authentication from the Kerala State HRD
                    Department. Once completed, the document can proceed to MEA
                    or embassy attestation.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  6. How long does Kerala State HRD attestation take in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The processing time depends on university verification and
                    HRD approval timelines. Typically, Kerala State HRD
                    attestation takes a few working days to two weeks, depending
                    on the institution and document type.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  7. Is Kerala State HRD attestation mandatory for all
                  countries?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Kerala State HRD attestation is mandatory for many
                    countries, especially Middle East and European countries.
                    However, the requirement varies depending on the destination
                    country and document type.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. Are original certificates required for Kerala State HRD
                  attestation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Original educational certificates are mandatory for
                    Kerala State HRD attestation. Photocopies are not accepted
                    by the HRD department for authentication.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  9. Can Kerala State HRD attestation be done without visiting
                  offices in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Many professional attestation agencies in Bangalore
                    offer end-to-end services, including document pickup and
                    delivery, so applicants do not need to visit HRD or
                    university offices personally.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. How do I choose the best Kerala State HRD attestation
                  service in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Choose a service provider with experience in Kerala HRD
                    procedures, transparent pricing, clear timelines, secure
                    document handling, and reliable customer support to ensure
                    smooth and timely attestation.
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

export default StateHrdKeralaFaq;
