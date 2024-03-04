import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Carousel = () => {
    return ( 

        <div>

<div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image className="img-fluid" src="/img/carousel-1.jpg" width={1200} height={600}  alt="resim"/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" >
                            <h5 className="text-primary text-uppercase mb-md-3">Temizlik Hizmetleri</h5>
                            <h1 className="display-3 text-white mb-md-4">Temizlikte En Kaliteli Çözümler</h1>
                       
                            <Link aria-label="Hakkımızda sayfasını aç" href="/hakkimizda" className="btn btn-primary">Hakkımızda</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image className="img-fluid" src="/img/carousel-2.jpg" width={1200} height={600}  alt="resim"/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" >
                            <h5 className="text-primary text-uppercase mb-md-3">Temizlik Hizmetleri</h5>
                            <h1 className="display-3 text-white mb-md-4">Profesyonel Temizlik Hizmeti</h1>
                            <Link aria-label="Hakkımızda sayfasını aç" href="/hakkimizda" className="btn btn-primary">Hakkımızda</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image className="img-fluid" src="/img/carousel-3.jpg" width={1200} height={600}   alt="resim"/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" >
                            <h5 className="text-primary text-uppercase mb-md-3">Temizlik Hizmetleri</h5>
                            <h1 className="display-3 text-white mb-md-4">Tecrübeli & Uzman Ekip</h1>
                            <Link aria-label="Hakkımızda sayfasını aç" href="/hakkimizda" className="btn btn-primary">Hakkımızda</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
     );
}
 
export default Carousel;