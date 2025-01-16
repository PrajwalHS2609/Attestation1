import VisaStampingContent from "@/components/VisaStampingPage/VisaStampingContent";
import VisaStampingHead from "@/components/VisaStampingPage/VisaStampingHead";
import VisaStampingHeader from "@/components/VisaStampingPage/VisaStampingHeader";
import Head from "next/head";

export default function VisaStamping() {
  return (
    <>
      <Head>
        <title>
          Visa Stamping Services in Bangalore | Visa Stamping Near Me{" "}
        </title>
        <meta
          name="description"
          content="Visa Stamping Services in Bangalore. It is a crucial step that grants official permission from the destination country, allowing entry for a specific purpose."
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/visa-stamping-services-in-bangalore"
        />
      </Head>
      <div className="main-container">
        <VisaStampingHeader />
        <VisaStampingHead />
        <VisaStampingContent/>
      </div>
    </>
  );
}
