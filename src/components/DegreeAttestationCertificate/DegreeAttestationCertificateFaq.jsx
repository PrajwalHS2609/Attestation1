"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../media/images/faq.png";
import Image from "next/image";
const DegreeAttestationFaq = () => {
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
                <h5>1. What is degree certificate attestation in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Degree certificate attestation in Bangalore is the official
                    verification of an educational degree by authorized
                    authorities to make it valid for use abroad. It is commonly
                    required for employment, higher education, work visas, and
                    migration purposes.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is degree certificate attestation required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Attestation is required to prove that your degree
                    certificate is genuine and issued by a recognized
                    institution. Foreign employers, universities, and
                    immigration authorities demand attested degrees for legal
                    acceptance.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  3. Who needs degree certificate attestation services in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Degree certificate attestation is required by students
                    planning to study abroad, professionals seeking overseas
                    employment, individuals applying for work visas, and
                    candidates migrating for long-term residence.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. What is the process for degree certificate attestation in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The process generally includes verification by the State
                    Education Department or university, attestation by the
                    Ministry of External Affairs (MEA), and final attestation by
                    the respective embassy or consulate of the destination
                    country.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  5. How long does degree certificate attestation take in
                  Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The timeline depends on the destination country and
                    verification requirements. Typically, it can take anywhere
                    from a few working days to a couple of weeks. Professional
                    attestation services help speed up the process and avoid
                    delays.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  6. Is degree certificate attestation different from apostille?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Apostille is required for countries that are members of
                    the Hague Convention, while embassy attestation is needed
                    for non-Hague Convention countries. The correct method
                    depends on where you plan to use your degree certificate.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  7. Can I apply for degree certificate attestation in Bangalore
                  without visiting offices?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Many service providers offer doorstep pickup and
                    delivery in Bangalore, allowing you to complete the
                    attestation process without personally visiting government
                    or embassy offices.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. Are original degree certificates required for attestation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Original degree certificates are mandatory for
                    attestation. Authorities do not accept photocopies for the
                    verification process, as authenticity checks are done on
                    original documents.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>9. Is degree certificate attestation safe in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    When handled by a reliable attestation service provider, the
                    process is safe and secure. Reputed agencies ensure proper
                    document handling, tracking updates, and confidentiality
                    throughout the process.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. How do I choose the best degree certificate attestation
                  service in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Choose a provider with experience, transparent pricing,
                    clear timelines, legal authorization, and customer support.
                    A professional service ensures accurate processing and
                    timely completion of degree certificate attestation.
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

export default DegreeAttestationFaq;
