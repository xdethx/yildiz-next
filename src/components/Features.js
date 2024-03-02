import Image from 'next/image';
import React from 'react';

const Features = () => {
    return ( 
        <div>
            
<div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7 pt-lg-5 pb-3">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Bizi Tercih Edenler</h6>
                    <h1 className="mb-4 section-title">İstanbul Anadolu Yakasında En Kaliteli ve En Ucuz Halı Yıkama Hizmeti</h1>
                    <p className="mb-4">Yıldız Halı Yıkama Hizmetlerini tercih ederek temizliği ve hijyeni yakalayan müşterilerimiz</p>
                    <div className="row">
                        <div className="col-sm-4">
                            <h1 className="text-secondary mb-2" data-toggle="counter-up">12</h1>
                            <h6 className="font-weight-semi-bold mb-sm-4">Çalışanlarımız</h6>
                        </div>
                        <div className="col-sm-4">
                            <h1 className="text-secondary mb-2" data-toggle="counter-up">948</h1>
                            <h6 className="font-weight-semi-bold mb-sm-4">Mutlu Müşteriler</h6>
                        </div>
                        <div className="col-sm-4">
                            <h1 className="text-secondary mb-2" data-toggle="counter-up">3476</h1>
                            <h6 className="font-weight-semi-bold mb-sm-4">Tamamlanan işler</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">  
                
                    <div className="position-relative h-100 rounded overflow-hidden">
                        <Image className="position-absolute w-100 h-100" src="/img/temiz.png" width={600} height={600} alt='image' />
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
     );
}
 
export default Features;