import React from 'react';

const Contantinfo = () => {
    return (  
<div>
<div className="container-fluid pb-5 contact-info">
        <div className="row">
            <div className="col-lg-4 p-0">
                <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
                    <i className="fa fa-3x fa-map-marker-alt text-secondary mr-4"></i>
                    <div className="">
                        <h5 className="mb-2">Çalışma alanımız</h5>
                        <p className="m-0">İstanbul/Anadolu Yakası</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="contact-info-item d-flex align-items-center justify-content-center bg-secondary text-white py-4 py-lg-0">
                  
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
                    <i className="fa fa-3x fa-phone-alt text-secondary mr-4"></i>
                    <div className="">
                        <h5 className="mb-2">Telefon</h5>
                        <p className="m-0"><a className="text-secondary" href="tel:+90539 920 53 35">0539 920 53 35</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


        
    );
}
 
export default Contantinfo;