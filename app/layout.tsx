"use client";

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <GoogleTagManager gtmId="GTM-5ZHV46X" />
      {/* <Script
          id="gtag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5ZHV46X')
        `,
          }}
        /> */}
      {/* <Script
        id="gtag"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js'});
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5ZHV46X');`,
        }}
      ></Script> */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={faqSchemaJsonLd(currentPage)}
        key="product-jsonld"
      />
      <Script
        strategy="afterInteractive"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
      />
      {/* <Script id="facebook-script">
        {`
          !function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          }(window, document, 'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '743102530912070');
          fbq('track', 'PageView');
        `}
      </Script> */}

      <body className={poppins.className}>
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=743102530912070&ev=PageView&noscript=1"
          />
        </noscript> */}
        {children}
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
              id="tawk"
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
