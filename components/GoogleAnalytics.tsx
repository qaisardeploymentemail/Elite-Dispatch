import Script from "next/script";

export const GA_ID = "G-PRBC7FRVCV";

// GA4 (gtag.js) with Consent Mode v2 — loads on every page, but storage defaults to DENIED
// until the visitor accepts cookies (see CookieConsent.tsx, which calls gtag consent 'update').
export default function GoogleAnalytics() {
  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
try{if(localStorage.getItem('rd-cookie-consent')==='accepted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-config" strategy="afterInteractive">
        {`gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
