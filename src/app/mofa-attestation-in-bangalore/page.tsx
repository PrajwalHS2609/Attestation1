import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import MofaContent from "@/components/MofaPage/MofaContent";
import MofaCountries from "@/components/MofaPage/MofaCountries/MofaCountries";
import MofaProcedure from "@/components/MofaPage/MofaProcedure";
import mofaBanner from "@/media/images/mofaBanner.png";
import MofaFaq from './../../components/MofaPage/MofaFaq';
import Script from "next/script";

export const metadata = {
  title: "MOFA Attestation in Bangalore at Lowest Price",
  description:
    "MOFA Attestation in Bangalore at Lowest Price. In case of personal documents, Home Department /General Administration Department are the designated authorities.",
  canonical:
    "https://foreignembassyattestation.com/mofa-attestation-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Mofa() {
  return (
    <>
      <Script
        id="mofa-attestation-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                "name": "What is MOFA attestation in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MOFA attestation in Bangalore refers to the authentication of documents by the Ministry of Foreign Affairs (MOFA) of the destination country, usually after embassy attestation. It is the final step to make documents legally valid for use abroad."
                }
              },
              {
                "@type": "Question",
                "name": "Why is MOFA attestation required?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MOFA attestation is required to confirm that documents attested by the embassy are genuine and officially accepted in the destination country. It is mandatory for employment, residence visas, family visas, and business purposes."
                }
              },
              {
                "@type": "Question",
                "name": "Which documents require MOFA attestation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Documents that commonly require MOFA attestation include educational certificates such as degrees and diplomas, personal documents like birth and marriage certificates, and commercial documents including power of attorney, invoices, and company agreements."
                }
              },
              {
                "@type": "Question",
                "name": "Who needs MOFA attestation services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Professionals working abroad, individuals applying for family or dependent visas, students pursuing education overseas, and businesses expanding internationally require MOFA attestation services in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "What is the process for MOFA attestation in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The process generally includes state-level attestation (HRD or Home Department), MEA attestation, embassy attestation of the destination country, and finally MOFA attestation once the document reaches the foreign country."
                }
              },
              {
                "@type": "Question",
                "name": "How long does MOFA attestation take in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The processing time depends on the destination country and document type. Typically, MOFA attestation takes a few working days to one or two weeks when handled through professional attestation services."
                }
              },
              {
                "@type": "Question",
                "name": "Is MOFA attestation mandatory for all countries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. MOFA attestation is mainly required for Middle East countries such as the UAE, Saudi Arabia, Qatar, Kuwait, and Oman. Requirements vary depending on the destination country."
                }
              },
              {
                "@type": "Question",
                "name": "Are original documents required for MOFA attestation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Original documents are generally required for MOFA attestation, especially for educational and personal certificates. Photocopies are usually not accepted unless specified by authorities."
                }
              },
              {
                "@type": "Question",
                "name": "Can MOFA attestation be done without visiting offices in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many professional attestation service providers in Bangalore offer end-to-end services including document pickup, embassy coordination, overseas MOFA processing, and secure delivery."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose the best MOFA attestation service in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose a service provider with experience in MOFA procedures, strong embassy coordination, transparent pricing, clear timelines, secure document handling, and reliable customer support to ensure smooth MOFA attestation."
                }
              }

            ],
          }),
        }}
      />
      <div className="main-container">
        <HeaderComponent imageSrc={mofaBanner.src} alt="mofa Banner" />
        <MofaProcedure />
        <MofaCountries />
        <HomeBlog />
        <HomeNews />
        <MofaFaq />
        <MofaContent />
      </div>
    </>
  );
}
