"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../../media/images/faq.png";
import Image from "next/image";
const StateHrdTamilFaq = () => {
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
                <h5>
                  1. What is Tamilnadu State HRD attestation in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Tamilnadu State HRD attestation in Bangalore is the
                    authentication of educational documents issued in Tamil Nadu
                    by the Tamil Nadu State Human Resource Development (HRD)
                    Department, processed through authorized channels in
                    Bangalore for overseas use.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>2. Why is Tamilnadu State HRD attestation required?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Tamilnadu State HRD attestation is required to verify the
                    authenticity of educational certificates before they are
                    used abroad. It is a mandatory step prior to MEA
                    attestation, apostille, or embassy attestation for many
                    countries.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  3. Which documents require Tamilnadu State HRD attestation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Documents commonly requiring Tamilnadu State HRD attestation
                    include degree certificates, diploma certificates,
                    provisional certificates, consolidated mark sheets, and
                    other academic records issued by universities or boards in
                    Tamil Nadu.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. Who needs Tamilnadu State HRD attestation services in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>Students planning higher education abroad, professionals seeking overseas employment, individuals applying for work visas, and candidates migrating internationally with Tamil Nadu–issued certificates require this attestation.</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5> </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p></p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5></h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p></p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5></h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p></p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5></h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p></p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5></h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p></p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5></h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p></p>
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

export default StateHrdTamilFaq;
