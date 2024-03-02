import React from 'react'
import { useRouter } from 'next/router';
import serviceAreas from '@/serviceAreas';
import PageinHeader from '@/components/PageinHeader';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
const AreaPostPage = () => {
    const router = useRouter();
  const { id } = router.query;
  const item = serviceAreas.find((item) => item.id.toString() === id);

  const objectOneIndex = serviceAreas.findIndex(item => item.id === item.id);
  const filteredBlogitems = [...serviceAreas.slice(0, objectOneIndex), ...serviceAreas.slice(objectOneIndex + 1)];
  if (!item) {
    return <div>Area post not found</div>;
  }
 
  return (
    <>
    
    <Head>
        <title>{item.mainHead} Bölgesi {item.subHead}</title>
        <meta name="description" content={item.dec} />
      </Head>
    <PageinHeader name={`${item.mainHead}`}  header={`${item.mainHead} Bölgesİ Hakkında - Profesyonel Halı Yıkama Hİzmetİ İçİn Özel Bİlgler`}></PageinHeader>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-5">
                        <div className="d-flex mb-2">
                            <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
    
                        </div>
                        <h1 className="section-title mb-3">{item.mainHead} </h1>
                    </div>

                    <div className="mb-5">
                    <p>{item.dec}</p>
                        <Image className="img-fluid rounded w-100 mb-4" src={`/${item.imgUrl}`} width={600} height={600} alt="Image"/>
                  
                        
                    </div>

 
                    
                </div>
                <div className='col-lg-4 mt-5 mt-lg-0'>

<div className="mb-5">
            <h3 className="mb-4 section-title">Diğer Bölgeler</h3>
            


{filteredBlogitems.map((item)=>(

<div key={item.id} className="d-flex align-items-center border-bottom mb-3 pb-3">
<Image className="img-fluid rounded sideNav width: 80px; height: 80px; object-fit: cover;" src={`/${item.imgUrl}`} width={600} height={600}  alt=""/>
<div className="d-flex flex-column pl-3">
<Link href={`/bolge_detay/${item.id}`}  className="text-dark mb-2" >{item.mainHead} Bölgesi {item.subHead}</Link>

<div className="d-flex">
<small><a className="text-secondary text-uppercase font-weight-medium" href="">yıldız</a></small>
<small className="text-primary px-2">|</small>
<small><a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a></small>
</div>
</div>
</div>

))}

  
           
     
         
       
     </div>
 </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AreaPostPage