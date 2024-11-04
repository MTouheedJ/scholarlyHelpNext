"use client";

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head"; // Import Head from next/head
import { usePathname } from "next/navigation";
import { hideTalktoModule } from "./components/HideLinks/HideLinks";
import Schemas from "./faqSchemaContent.json";
import AuthProvider from "./(pages)/scan/contexts/Auth/Auth";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPage = usePathname();
  const hideTalkTo = hideTalktoModule.includes(currentPage);

  function faqSchemaJsonLd(url: string) {
    const schema = Schemas[url as keyof typeof Schemas] || {};
    return {
      __html: JSON.stringify(schema),
    };
  }

  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
        <GoogleTagManager gtmId="GTM-5ZHV46X" />
        <Script
          id="schema-org-main"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org/",
              "@type": "product",
              "name": "scholarlyhelp",
              "image": "./img/logonew.svg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "15395"
              }
            }
            `,
          }}
          key="product-jsonld"
        />

        {!hideTalkTo && (
          <>
            <Script
              id="tawk"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/6229a486a34c2456412a5836/1ftpalbms';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                  })();
                `,
              }}
            ></Script>
            <Script
              id="tawk-conversion"
              dangerouslySetInnerHTML={{
                __html: `
                  var Tawk_API = Tawk_API || {};
                  Tawk_API.onChatMessageVisitor = function() {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-10966577873'
                    });
                  };
                `,
              }}
            ></Script>
          </>
        )}
      </body>
    </html>
  );
}
