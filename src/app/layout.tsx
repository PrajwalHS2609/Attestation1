import Footer from "@/components/Footer/Footer";
import "./global.css";
import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P9coYJ5EoFH_xlhaCCK_w7pQpa2g-n4UAEN1abymc4c"
        />

        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NK1W9JTDZ5"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NK1W9JTDZ5');
          `}
        </script>

        {/* JSON-LD Structured Data */}
        <Script id="product-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Foreign Embassy Attestation",
            "image": "https://foreignembassyattestation.com/_next/image?…Fmedia%2Fattestation1Logo.6c72ab9d.png&w=256&q=75",
            "description":
              "At Service Attestation1, we take pride in being a trusted leader in certificate attestation and apostille services. With over 15 years of expertise and a dedicated team of professionals, we have built a strong reputation for delivering fast, efficient, and reliable solutions.",
            "brand": { "@type": "Thing", "name": "Service Attestion1" },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
              },
              "author": { "@type": "Person", "name": "Rishi" },
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "8365",
            },
          })}
        </Script>
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main className="main-container"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
