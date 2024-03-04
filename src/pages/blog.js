
import React from 'react'
import blogitems from '@/blogitems'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
const Blog = () => {
  return (
   <>
   <Head>
   <title>Yıldız Halı Yıkama Blogu - Halı Türleri ve Uzman İpuçları</title>
   <meta name="description" content="Yıldız Halı Yıkama Blogu'nda, farklı halı türleri ve uzman temizlik ipuçlarıyla ilgili değerli bilgiler bulabilirsiniz. Ev ve işyerleriniz için en iyi temizlik yöntemlerini öğrenmek için bizi takip edin." />
   <meta content="halı temizliği, halı türleri, halı yıkama ipuçları, profesyonel temizlik, ev temizliği, işyeri temizliği, hijyenik temizlik, halı bakımı, halı temizliği yöntemleri, halı yıkama hizmetleri" name="keywords"></meta>
 </Head>
   
            <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-end mb-4">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Blog</h6>
                    <h1 className="section-title mb-3">Son Makaleler</h1>
                </div>
                <div className="col-lg-6">
                    <h4 className="font-weight-normal text-muted mb-3">Temiz, Hijyenik, Antibakteriyel, Hızlı ve Güvenli Halı Yıkama Hizmeti</h4>
                </div>
            </div>
            <div className="row">
             
             {blogitems.map((item) => (

<div key={item.id}  className="col-lg-4 col-md-6 mb-5">


<div className="position-relative mb-4">
    <Image className="img-fluid rounded w-100" src={`/${item.imgUrl}`} width={600} height={600} alt="resim"/>
    <div className="blog-date">
        <h4 className="font-weight-bold mb-n1">{item.day}</h4>
        <small className="text-white text-uppercase">{item.month}</small>
    </div>
</div>
<div className="d-flex mb-2">
    <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
    <span className="text-primary px-2">|</span>
    <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
</div>
<h5 className="font-weight-medium mb-2">{item.mainHead}</h5>
<p className="mb-4">{item.subHead}Detaylı bilgi...</p>

<Link aria-label="Blog detay safyasını aç" href={`/blog_detay/${item.id}`} className="btn btn-sm btn-primary py-2" >{item.id} Okumaya devam et...</Link>


</div>

             )) }



     
            </div>
        </div>
        
    </div>

 
   </>
  )
}

export default Blog