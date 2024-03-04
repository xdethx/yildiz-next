import React from 'react'
import Link from 'next/link';
import serviceAreas from '@/serviceAreas';
import Head from 'next/head';
import Image from 'next/image';
const hizmet_bolgeleri = () => {
  return (
    <>
    <Head><title>Hizmet Bölgelerimiz - İstanbul un Her Köşesine Ulaşan Profesyonel Halı Yıkama Hizmetleri</title>
        <meta name="description" content="Yıldız Halı Yıkama olarak, İstanbul'un farklı bölgelerinde sizlere en iyi hizmeti sunuyoruz. Kadıköy, Üsküdar, Ataşehir ve daha fazla bölgede profesyonel halı yıkama hizmetlerimizden yararlanmak için hemen bize ulaşın." />
        <meta content="halı yıkama, temizlik hizmetleri, profesyonel temizlik, hijyenik temizlik, İstanbul halı yıkama, hizmet bölgeleri, Kadıköy, Üsküdar, Ataşehir, ev temizliği, işyeri temizliği, halı temizliği" name="keywords"></meta>
    </Head>
            <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-end mb-4">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Hizmet Bölgelerimiz </h6>
                    <h1 className="section-title mb-3">Profesyonel Halı Yıkama Hizmeti</h1>
                </div>
                <div className="col-lg-6">
                    <h4 className="font-weight-normal text-muted mb-3">Ev ve İşyerleriniz İçin İstanbul un Her Köşesinde Hizmetinizdeyiz</h4>
                </div>
            </div>
            <div className="row">
             
             {serviceAreas.map((item) => (

<div key={item.id}  className="col-lg-4 col-md-6 mb-5">


<div className="position-relative mb-4">
    <Image className="img-fluid rounded w-100" src={`/${item.imgUrl}`} width={600} height={600} alt="resim"/> 
 
</div>
<div className="d-flex mb-2">
    <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
    <span className="text-primary px-2">|</span>
    <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
</div>
<h5 className="font-weight-medium mb-2">{item.mainHead}</h5>
<p className="mb-4">Bölgesi {item.subHead}</p>

<Link aria-label="Bölge detay sayfasını aç" href={`/bolge_detay/${item.id}`} className="btn btn-sm btn-primary py-2" >{item.id} Okumaya devam et...</Link>


</div>

             )) }


         
     
            </div>
        </div>
        
    </div>

 
   </>
  )
}

export default hizmet_bolgeleri