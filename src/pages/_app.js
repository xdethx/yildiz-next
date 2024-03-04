import Footer from '@/components/Footer'
import Header from '@/components/Header'
 import '@/styles/style.css'

import Script from 'next/script';
 import { HelmetProvider, Helmet } from 'react-helmet-async';

import "jquery"
import GoogleAnalytics from '@/components/GoogleAnalytics';




export default function App({ Component, pageProps }) {


  return (
<>
<Script src="https://code.jquery.com/jquery-3.4.1.min.js"  strategy="beforeInteractive"  />

<HelmetProvider>
  <GoogleAnalytics/>
<Helmet>
  
  
  <script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
  <script async src="lib/easing/easing.min.js" type="text/javascript" />
  <script async src="lib/waypoints/waypoints.min.js" type="text/javascript" />
  <script async src="lib/counterup/counterup.min.js" type="text/javascript"  />
  <script async src="lib/owlcarousel/owl.carousel.min.js" type="text/javascript"  />
  <script async src="lib/isotope/isotope.pkgd.min.js" type="text/javascript"  />
  <script async src="lib/lightbox/js/lightbox.min.js" type="text/javascript" />
  <script async src="js/main.js" type="text/javascript" />


  </Helmet>
<Header/>
    <Component {...pageProps} />
    <Footer/>

</HelmetProvider>
</>
  )
}
