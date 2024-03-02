import Footer from '@/components/Footer'
import Header from '@/components/Header'
 import '@/styles/style.css'
import Script from 'next/script';
 import { HelmetProvider, Helmet } from 'react-helmet-async';



var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}


export default function App({ Component, pageProps }) {


  return (
<>
<Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy='beforeInteractive' />
<HelmetProvider>
<Helmet>
  
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
  <script src="lib/easing/easing.min.js" type="text/javascript" />
  <script src="lib/waypoints/waypoints.min.js" type="text/javascript" />
  <script src="lib/counterup/counterup.min.js" type="text/javascript" strategy='beforeInteractive' />
  <script src="lib/owlcarousel/owl.carousel.min.js" type="text/javascript" strategy='beforeInteractive' />
  <script src="lib/isotope/isotope.pkgd.min.js" type="text/javascript" strategy='beforeInteractive' />
  <script src="lib/lightbox/js/lightbox.min.js" type="text/javascript" />
  <script src="js/main.js" type="text/javascript" />


  </Helmet>
<Header/>
    <Component {...pageProps} />
    <Footer/>

</HelmetProvider>
</>
  )
}
