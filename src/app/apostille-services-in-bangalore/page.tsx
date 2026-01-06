import ApostilleCertificate from "@/components/ApostillePage/ApostilleCertificate";
import ApostilleContent from "@/components/ApostillePage/ApostilleContent";
import ApostilleFlag from "@/components/ApostillePage/ApostilleFlags/ApostilleFlags";
import ApostilleHead from "@/components/ApostillePage/ApostilleHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeNews from "@/components/HomePage/HomeNews/HomeNews";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import apostilleBanner from "@/media/images/apostilleBanner.png";
import ApostilleFaq from './../../components/ApostillePage/ApostilleFaq';
import Script from "next/script";

export const metadata = {
  title: "Apostille Services in Bangalore – Embassy Apostille in Bangalore",
  description:
    "Apostille Services in Bangalore at Best Price for Birth, Marriage, Degree & Commercial Documents apostille. Call Today!",
  canonical:
    "https://foreignembassyattestation.com/apostille-services-in-bangalore",
  keywords: [
    "Attestation, Apostille, Bangalore, Best Price",
    "Birth, Marriage, Degree",
  ],
};
export default function Attestation() {
  return (
    <>
      <Script
        id="apostille-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                "name": "What are apostille services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Apostille services in Bangalore involve the authentication of documents by the Ministry of External Affairs (MEA) to make them legally valid for use in countries that are members of the Hague Convention."
                }
              },
              {
                "@type": "Question",
                "name": "Why is apostille required for documents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Apostille is required to certify that a document issued in India is genuine and acceptable in another Hague Convention country. It removes the need for further embassy or consulate attestation."
                }
              },
              {
                "@type": "Question",
                "name": "Who needs apostille services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students studying abroad, professionals seeking overseas employment, individuals applying for spouse or dependent visas, and businesses expanding to Hague Convention countries need apostille services in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "What types of documents can be apostilled in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Documents that can be apostilled include educational certificates such as degrees and diplomas, personal documents like birth and marriage certificates, PCC, and commercial documents such as power of attorney, invoices, and company agreements."
                }
              },
              {
                "@type": "Question",
                "name": "What is the process for apostille services in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The apostille process generally involves verification by the respective state authority (if required), followed by apostille stamping by the Ministry of External Affairs (MEA). The steps vary based on document type."
                }
              },
              {
                "@type": "Question",
                "name": "How long does apostille take in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Apostille processing time usually ranges from 2 to 7 working days, depending on the document category and verification requirements. Professional services help ensure timely completion."
                }
              },
              {
                "@type": "Question",
                "name": "Is apostille different from embassy attestation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Apostille is valid only for Hague Convention member countries, while embassy attestation is required for non-Hague Convention countries. The applicable process depends on the destination country."
                }
              },
              {
                "@type": "Question",
                "name": "Are original documents required for apostille?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Original documents are mandatory for apostille, as photocopies are not accepted for authentication by the Ministry of External Affairs."
                }
              },
              {
                "@type": "Question",
                "name": "Can apostille services in Bangalore be completed without visiting offices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many apostille service providers in Bangalore offer doorstep pickup and delivery services, allowing applicants to complete the process without visiting government offices."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose the best apostille service provider in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose a provider with expertise in MEA apostille procedures, transparent pricing, clear timelines, secure document handling, and responsive customer support to ensure smooth and reliable apostille services."
                }
              }

            ],
          }),
        }}
      />
      <div className="main-container">
        <HeaderComponent imageSrc={apostilleBanner.src} alt="apostille Banner" />
        <ApostilleHead />
        <ApostilleCertificate />
        <ApostilleFlag />
        <HomeService />
        <HomeCountries />
        <HomeWhy />
        <HomeBlog />
        <HomeNews />
        <ApostilleFaq />
        <ApostilleContent />
      </div>
    </>
  );
}
