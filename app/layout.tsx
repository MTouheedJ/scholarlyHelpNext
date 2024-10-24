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
      {/* <!-- Start VWO Async SmartCode --> */}
      <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      <Script
        id="vwoCode"
        type="text/javascript"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window._vwo_code || (function() {
var account_id=968936,
version=2.1,
settings_tolerance=2000,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}v&&t.setAttribute('nonce',v.nonce);d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){window._vwo_code.addScript({text:o.responseText})}else{window._vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}window._vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){window._vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};window._vwo_code=code;code.init();})();(function(){var i=window;function t(){if(i._vwo_code){var e=t.hidingStyle=document.getElementById('_vis_opt_path_hides')||t.hidingStyle;if(!i._vwo_code.finished()&&!i._vwo_code.libExecuted&&(!i.VWO||!VWO.dNR)){if(!document.getElementById('_vis_opt_path_hides')){document.getElementsByTagName('head')[0].appendChild(e)}requestAnimationFrame(t)}}}t()})();`,
        }}
      />
      {/* <!-- End VWO Async SmartCode --> */}
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
