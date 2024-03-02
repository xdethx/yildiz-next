import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
      {/* <meta content="width=device-width, initial-scale=1.0" name="viewport"/> */}
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
