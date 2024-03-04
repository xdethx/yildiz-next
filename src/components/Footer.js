import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return ( 

<div>
    
<div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                
                <Link aria-label="Ana Sayfa'ya Git" href="/" className="navbar-brand">
                    <Image src="/img/yoyo.jpg" height={100} width={300} priority  alt="Şirket Adı yıldız halı yıkama"/>
                </Link>
                <p>Sizlere en iyi,hijyenik,ilk günkü gibi temiz halıları sunmak için 25 yıllık tecrübemizle burdayız  </p>
                <h5 className="font-weight-semi-bold text-white mb-2">Çalışma Saatleri:</h5>
                <p className="mb-1">Pazartesi-Cumartesi, 08:00-17:00</p>
                <p className="mb-0">Pazar: Kapalı</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="font-weight-semi-bold text-primary mb-4">İletişime Geçin</h4>
                <p><i className="fa fa-map-marker-alt text-primary mr-2"></i>İstanbul/Türkiye</p>
                <p><i className="fa fa-phone-alt text-primary mr-2"></i><a aria-label="+90539 920 53 35 numarasını ara" href="tel:+90539 920 53 35">0539 920 53 35</a></p>
               
                
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="font-weight-semi-bold text-primary mb-4">Bağlantılar</h4>
                <div className="d-flex flex-column justify-content-start">
                    
                    <Link href="/" aria-label="Ana Sayfayı aç" className="text-white fa fa-angle-right mr-2">Ana Sayfa</Link>
                   
                    <Link href="/hakkimizda" aria-label="Hakkımızda Sayfasını aç" className="text-white fa fa-angle-right mr-2">Hakkımızda</Link>
                  
                    <Link href="/blog" aria-label="Blog Sayfasını aç" className="text-white fa fa-angle-right mr-2">Blog</Link>
                    <Link href="/hizmet_bolgeleri" aria-label="Hizmet Bölgeleri Sayfasını aç" className="text-white fa fa-angle-right mr-2">Hizmet Bölgelerimiz</Link>
                </div>
            </div>
           
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" >
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                
                <Link aria-label="Ana Sayfa'ya Git" href="/"className="m-0 text-white">&copy; Yildiz Hali Yikama Hizmetleri</Link>
                
            </div>
            
        </div>
    </div>

    <p><a aria-label="Whatsappdan yaz" href="https://api.whatsapp.com/send?phone=905399205335">
        <Image src="/img/wp.png" width={600} height={600} className="floating-parent"  alt='whatsapp logosu'/>
        </a></p>
        <a href="#" className="btn btn-primary px-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>


</div>


     );
}
 
export default Footer;