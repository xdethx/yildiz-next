import React from 'react';

import Link from 'next/link';

const PageinHeader = ({header,name}) => {
    
    
        return (
<div className="container-fluid bg-primary py-5 mb-5">
        <div className="container py-5">
            <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                    <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">{header}</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <div className="d-inline-flex align-items-center">
                       
                        <Link href="/" aria-label="Ana sayfayı aç" className="btn btn-sm btn-outline-light" >Ana Sayfa</Link>
                        <i className="fas fa-angle-double-right text-light mx-2"></i>
                        <a className="btn btn-sm btn-outline-light disabled" href="">{name}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


        );
    
}
 
export default PageinHeader;