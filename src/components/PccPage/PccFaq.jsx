"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../media/images/faq.png";
import Image from "next/image";
const PccFaq = () => {
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
                <h5>1. What is PCC verification in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    PCC (Police Clearance Certificate) verification in Bangalore
                    is the official process of verifying an individual’s
                    criminal background by the police authorities. It confirms
                    that the applicant has no criminal record during their stay
                    in India.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is PCC verification required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    PCC verification is required for immigration, overseas
                    employment, permanent residency, student visas, family
                    visas, and long-term stay abroad. Foreign embassies and
                    immigration authorities request PCC to ensure the applicant
                    has a clean legal background.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>3. Who needs PCC verification services in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    PCC verification is required by individuals applying for
                    work visas, PR visas, dependent visas, study abroad
                    programs, immigration, or employment in foreign countries.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. What documents are required for PCC verification in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Commonly required documents include a valid passport,
                    address proof, passport-size photographs, visa copy (if
                    applicable), and completed PCC application form.
                    Requirements may vary based on the authority issuing the
                    PCC.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  5. What is the process for PCC verification in Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The process involves submitting an application online or
                    through an authorized center, followed by police
                    verification at the applicant’s address. Once verification
                    is completed successfully, the Police Clearance Certificate
                    is issued.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>6. How long does PCC verification take in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    PCC verification typically takes 7 to 15 working days,
                    depending on police verification timelines, address
                    verification, and application accuracy. Professional
                    services can help reduce delays.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>7. Is PCC verification mandatory for all countries?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Not all countries require PCC, but most countries request it
                    for long-term visas, employment, and immigration purposes.
                    The requirement depends on the destination country’s
                    immigration rules.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>8. Can PCC verification be done online in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. PCC applications can be initiated online through
                    official portals. However, police verification is usually
                    conducted offline at the applicant’s residential address.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>9. Is PCC verification safe and secure?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. PCC verification is a government-authorized process.
                    When handled through official channels or trusted service
                    providers, personal information and documents are processed
                    securely.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. How do I choose the right PCC verification service in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Choose a service provider with experience in PCC processing,
                    transparent pricing, clear timelines, proper documentation
                    support, and responsive customer service to ensure smooth
                    and timely PCC verification.
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

export default PccFaq;
