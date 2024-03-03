import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        
      <meta name="facebook-domain-verification" content="bzxu92mz4mh9ag4dluov650egxsohw" />
      <link href="img/icon.webp" rel="icon"/>
      <link async rel="preconnect" href="https://fonts.gstatic.com"/>
    <link async href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>
    
    <link async href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
 
      </Head>
      <body>
        <Main />
       <NextScript>
     


       </NextScript>
      </body>
    </Html>
  )
}
