import Image from 'next/image';
import Link from 'next/link';
import React from 'react';







const Services = () => {
    return ( 
<div>
<div className="container-fluid bg-service py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Hizmetlerimiz</h6>
                    <h1 className="mb-4 section-title text-white">Sizin için Müthiş Temizlik Hizmeti</h1>
                    <p className="text-white">Temiz halılar,Mutlu müşteriler...Önceliğimiz her zaman Leke çıkarma,Kirden ve tozdan arındırma,Çocuklu aileler için antialerjik,hijyenik halı yıkamadır.Bununla birlikte el dokuma gibi narin halılarda ekstra incelik ve titizlik ile çalışırız.Detaylı bilgi için blog sayfamızı ziyaret edebilirsiniz...</p>
                    <Link aria-label="Blog sayfasını aç" href="/blog" className="btn btn-primary mt-3 py-2 px-4">Blog</Link>
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                    <div className="owl-carousel service-carousel position-relative">
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded overflow-hidden pt-4">
                            <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                <i className="fa fa-2x fa-spa"></i>
                            </div>
                            <h5 className="font-weight-bold mb-4 px-4">Hijyenik</h5>
                            <Image src="/img/blog-1.jpg" height={300} width={300} alt="resim"/>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded overflow-hidden pt-4">
                            <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                <i className="fa fa-2x fa-spa"></i>
                            </div>
                            <h5 className="font-weight-bold mb-4 px-4">Hızlı Teslimat</h5>
                            <Image src="/img/blog-1.jpg" height={300} width={300} alt="resim"/>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded overflow-hidden pt-4">
                            <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                <i className="fa fa-2x fa-spa"></i>
                            </div>
                            <h5 className="font-weight-bold mb-4 px-4">Garantili Yıkama</h5>
                            <Image src="/img/blog-1.jpg" height={300} width={300}alt="resim"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
        
     );
}
 
export default Services;