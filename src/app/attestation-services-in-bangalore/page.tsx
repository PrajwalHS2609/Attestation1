import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import AttestationFlag from "@/components/AttestationPage/AttestationFlags/AttestationFlags";
import AttestationCertificate from "@/components/AttestationPage/AttetationCertificate";
import AttestationHead from "@/components/AttestationPage/AttestationHead";
import AttestationContent from "@/components/AttestationPage/AttestationContent";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import attestationBanner from "@/media/images/attestationBanner.png";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import AttestationFaq from './../../components/AttestationPage/AttestationFaq';
import Script from "next/script";

export const metadata = {
  title: "Attestation Services in Bangalore – Embassy Attestation in Bangalore",
  description:
    "Attestation Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents attestation. Call Today!",
  canonical:
    "https://foreignembassyattestation.com/attestation-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Attestation() {
  return (
    <>
      <Script
        id="attestation-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                "name": "What are attestation services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Attestation services in Bangalore involve the legal verification of documents by authorized government departments and embassies to make them valid for use in another country. These services are required for education, employment, migration, family visa, or business purposes."
                }
              },
              {
                "@type": "Question",
                "name": "Why is document attestation required?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Document attestation is required to confirm the authenticity of certificates issued in India. Foreign authorities need attested documents to ensure they are genuine before approving visas, employment, admissions, or business activities."
                }
              },
              {
                "@type": "Question",
                "name": "What types of documents can be attested in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Documents that can be attested in Bangalore include educational documents such as degree certificates and transcripts, personal documents like birth and marriage certificates, and commercial documents such as invoices, power of attorney, and company agreements."
                }
              },
              {
                "@type": "Question",
                "name": "What is the process for attestation services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The attestation process usually includes verification by state authorities, attestation by the Ministry of External Affairs (MEA), and final attestation by the respective embassy or consulate, depending on the destination country."
                }
              },
              {
                "@type": "Question",
                "name": "How long does attestation take in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The time required for attestation depends on the type of document and the destination country. It can range from a few working days to a couple of weeks. Professional attestation services help reduce delays."
                }
              },
              {
                "@type": "Question",
                "name": "Is embassy attestation different from apostille?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, embassy attestation is required for non-Hague Convention countries, while apostille attestation is accepted by Hague Convention member countries. The correct method depends on the country where the document will be used."
                }
              },
              {
                "@type": "Question",
                "name": "Who needs attestation services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students studying abroad, professionals seeking overseas jobs, families applying for dependent visas, and businesses expanding internationally all require attestation services in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get attestation services in Bangalore without visiting offices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, many attestation service providers in Bangalore offer doorstep pickup and delivery, allowing clients to complete the attestation process without visiting government or embassy offices."
                }
              },
              {
                "@type": "Question",
                "name": "Are attestation services in Bangalore safe and secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reputed attestation agencies ensure secure handling of original documents, provide tracking updates, and follow official procedures to maintain confidentiality and document safety."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose the right attestation service provider in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose an attestation service provider with proven experience, transparent pricing, clear timelines, and reliable customer support to ensure timely and error-free document attestation."
                }
              }

            ],
          }),
        }}
      />
      <div className="main-container">
        <HeaderComponent
          imageSrc={attestationBanner.src}
          alt="attestation Banner"
        />
        <AttestationHead />
        <AttestationCertificate />
        <AttestationFlag />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
        <HomeBlog />
        <HomeNews />
        <AttestationFaq />
        <AttestationContent />
      </div>
    </>
  );
}
