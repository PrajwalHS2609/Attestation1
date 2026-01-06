"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../media/images/faq.png";
import Image from "next/image";
const AttestationFaq = () => {
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
                <h5>1. What are attestation services in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Attestation services in Bangalore involve the legal
                    verification of documents by authorized government
                    departments and embassies to make them valid for use in
                    another country. These services are required for education,
                    employment, migration, family visa, or business purposes.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is document attestation required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Document attestation confirms the authenticity of
                    certificates issued in India. Foreign governments and
                    institutions require attested documents to ensure they are
                    genuine before granting visas, jobs, admissions, or business
                    approvals.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  3. What types of documents can be attested in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Attestation services in Bangalore cover:
                    <ul>
                      <li>
                        {" "}
                        Educational documents (degree, diploma, transcripts)
                      </li>
                      <li>
                        {" "}
                        Personal documents (birth certificate, marriage
                        certificate, PCC)
                      </li>
                      <li>
                        {" "}
                        Commercial documents (invoices, MOA, power of attorney)
                      </li>
                    </ul>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. What is the process for attestation services in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The process generally includes verification by state
                    authorities, attestation by the Ministry of External Affairs
                    (MEA), and final attestation by the respective embassy or
                    consulate, depending on the destination country.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>5. How long does attestation take in Bangalore? </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The duration depends on the document type and destination
                    country. It can take anywhere from a few working days to a
                    couple of weeks. Professional attestation services help
                    reduce delays by managing the process efficiently.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>6. Is embassy attestation different from apostille?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Embassy attestation is required for non-Hague
                    Convention countries, while apostille is accepted by Hague
                    Convention member countries. Both services are available
                    through attestation service providers in Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>7. Who needs attestation services in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Attestation services are required by students planning to
                    study abroad, professionals seeking overseas jobs, families
                    applying for dependent visas, and businesses expanding
                    internationally.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. Can I get attestation services in Bangalore without
                  visiting offices?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Many professional agencies offer doorstep pickup and
                    delivery services in Bangalore, making the attestation
                    process convenient and stress-free for working professionals
                    and busy individuals.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  9. Are attestation services in Bangalore safe and secure?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Reputed attestation service providers ensure secure handling
                    of original documents, provide tracking updates, and follow
                    official procedures to maintain confidentiality and document
                    safety.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. How do I choose the right attestation service provider in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Choose a provider with experience, transparent pricing,
                    clear timelines, and customer support. A reliable agency
                    will guide you through the process, avoid errors, and ensure
                    timely completion of attestation.
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

export default AttestationFaq;
