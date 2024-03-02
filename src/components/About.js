import React from 'react';
import Link from 'next/link';
const About = () => {
    return ( 
<div>
<div className="container-fluid py-5 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                        <i className="fa fa-5x fa-award text-primary mb-4"></i>
                        <h1 className="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
                        <h2 className="text-white m-0">Yıllık Tecrübe</h2>
                    </div>
                </div>
                <div className="col-lg-7 pt-5 pb-lg-5">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Bizi Tanıyın</h6>
                    <h1 className="mb-4 section-title">En Kaliteli Temizlik Hizmetini Sağlıyoruz</h1>
                    <h5 className="text-muted font-weight-normal mb-3">Sizlere en iyi,hijyenik,ilk günkü gibi temiz halıları sunmak için 25 yıllık tecrübemizle burdayız  </h5>
                    <p>İki nesil babadan oğula geçen,yeni ekip arkadaşları ile hem tecrübesini hem çalışma kapasitesini arttıran yıldız halı yıkama,İstanbul anadolu yakasındaki müşterilerini temiz,hijyenik halılara kavuşturmak için burada...</p>
                    <div className="d-flex align-items-center pt-4">
                       
                        <Link href="/hakkimizda" className="btn btn-primary mr-5">Daha Fazla</Link>
                        <button type="button" className="btn-play" data-toggle="modal"
                            data-src="img/roll.mp4" data-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

     );
}
 
export default About;