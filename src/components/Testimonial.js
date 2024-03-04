import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
    return ( 
        <div>
            
<div className="container-fluid bg-testimonial py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7 pt-lg-5 pb-5">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Referanslar</h6>
                    <h1 className="section-title text-white mb-5">Müşterilerimizin Söyledikleri</h1>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="d-flex flex-column text-white">
                            <div className="d-flex align-items-center mb-3">
                                <Image className="img-fluid" src="/img/ceo.png" width={600} height={600}     alt="resim"/>
                                <div className="ml-3">
                                    <h5 className="text-primary">Suat V.</h5>
                                    <i>Ceo</i>
                                </div>
                            </div>
                            <p>Güler yüzlü ve kibar çalışanları olan,söz verdikleri günde teslim eden işinin ehli bir kuruluş.Aile yadigarı antika halılarımı yıkattım.Başarılı iş çıkardılar.</p>
                        </div>
                        <div className="d-flex flex-column text-white">
                            <div className="d-flex align-items-center mb-3">
                                <Image className="img-fluid" src="/img/emek.png" width={600} height={600} alt="resim"/>
                                <div className="ml-3">
                                    <h5 className="text-primary">Orhan K.</h5>
                                    <i>Emekli</i>
                                </div>
                            </div>
                            <p>Yıllardır halılarımı yıkatırım.Ne kalitelerinden ne samimiyetlerinden ödün verdiler.</p>
                        </div>
                        <div className="d-flex flex-column text-white">
                            <div className="d-flex align-items-center mb-3">
                                <Image className="img-fluid" src="/img/hnm.png" width={600} height={600} alt="resim"/>
                                <div className="ml-3">
                                    <h5 className="text-primary">Pelin H.</h5>
                                    <i>Ev Hanımı</i>
                                </div>
                            </div>
                            <p>2 çocuklu bir ev hanımıyım bu sebeple halılarım hep leke oluyor.Arkadaş önerisi ile tanıştım artık halılarım lekesiz,hijyenik ve antialerjik.Çocuklarım oyun oynarken için ferah. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5" >
                    <div className="position-relative h-100 rounded overflow-hidden">
                        <Image className="position-absolute w-100 h-100" src="/img/hold.webp" width={600} height={600} alt="resim" />
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
     );
}
 
export default Testimonial;