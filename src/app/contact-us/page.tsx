import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import ContactUsMain from "@/components/ContactUs/ContactUsMain";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>
          Contact Us for all types Embassy Attestation & Apostille Services in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Contact Us for all types Embassy Attestation & Apostille Services in Bangalore. 24x7 Customer Support, Email Us, WhatsApp & Call Us directly. "
        />
        <link
          rel="canonical"
          href="https://foreignembassyattestation.com/contact-us"
        />
      </Head>
      <div className="main-container">
        <ContactUsHeader />
        <ContactUsMain />
      </div>
    </>
  );
}
