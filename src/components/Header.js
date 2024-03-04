import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
import Link from 'next/link';

import Image from 'next/image';
const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleToggleNav = () => {
      setIsNavCollapsed(!isNavCollapsed);
    };
  
    return ( 
        <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 bg-secondary d-none d-lg-block">
              <Link href="/" aria-label="Ana Sayfa'ya Git" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                <Image src="/img/yoyo.jpg" height="100" width="300" alt="Şirket Adı yıldız halı yıkama"  />
              </Link>
            </div>
            <div className="col-lg-9">
              <div className="row bg-dark d-none d-lg-flex">
                <div className="col-lg-7 text-left text-white">
                  <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                    <i className="fa fa-phone-alt text-primary mr-2"></i>
                    <small>
                      <a href="tel:+90539 920 53 35">0539 920 53 35</a>
                    </small>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                <Link aria-label="Ana Sayfa'ya Git" href="/" className="navbar-brand d-block d-lg-none">
                  <Image src="/img/yoyo.jpg" height={100} width={300} priority alt="Şirket Adı yıldız halı yıkama" />
                </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  onClick={handleToggleNav}
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded={!isNavCollapsed ? true : false}
                  aria-label="Toggle navigation"
                  aria-pressed={isNavCollapsed ? 'true' : 'false'}
                >
                  
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-between`}
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <Link href="/" aria-label="Ana Sayfayı aç" className="nav-item nav-link" onClick={() => setIsNavCollapsed(true)}>
                      Ana Sayfa
                    </Link>
                    <Link href="/hakkimizda" aria-label="Hakkımızda Sayfasını aç" className="nav-item nav-link" onClick={() => setIsNavCollapsed(true)}>
                      Hakkımızda
                    </Link>
                    <Link href="/blog" aria-label="Blog Sayfasını aç" className="nav-item nav-link" onClick={() => setIsNavCollapsed(true)}>
                      Blog
                    </Link>
                    <Link href="/hizmet_bolgeleri" aria-label="Hizmet Bölgeleri Sayfasını aç" className="nav-item nav-link" onClick={() => setIsNavCollapsed(true)}>
                      Hizmet Bölgelerimiz
                    </Link>
                  </div>
                  <a href="tel:+90539 920 53 35" aria-label="+90539 920 53 35 numarasını ara" className="btn btn-primary mr-3 d-none d-lg-block">
                    Bizi Arayın
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Header;