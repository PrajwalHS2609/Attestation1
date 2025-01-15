import Footer from "@/components/Footer/Footer";
import "./global.css";
import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <meta name="google-site-verification" content="P9coYJ5EoFH_xlhaCCK_w7pQpa2g-n4UAEN1abymc4c" />
        
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NK1W9JTDZ5"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NK1W9JTDZ5');
          `}
        </script>

        <title>Attestation Service</title>
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
