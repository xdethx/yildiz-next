import React from 'react'
import { useRouter } from 'next/router';
import blogitems from '@/blogitems';
import PageinHeader from '@/components/PageinHeader';
import SideNav from '@/components/SideNav';
import Head from 'next/head';
import Image from 'next/image';




const BlogPostPage = () => {
    const router = useRouter();
  const { id } = router.query;
  const item = blogitems.find((item) => item.id.toString() === id);
  if (!item) {
    return <div>Blog post not found</div>;
  }
 
  return (
    <>
    
    
    <Head>
        <title>{item.subHead}</title>
        <meta name="description" content={item.dec1} />
      </Head>
    <PageinHeader name="Detay Sayfası" header="İstanbul Anadolu yakası En Kalİtelİ ve Ucuz Halı Yıkama Hİzmetİ"></PageinHeader>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-5">
                        <div className="d-flex mb-2">
                            <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium" href="">{item.day} {item.month} 2023</a>
                        </div>
                        <h1 className="section-title mb-3">{item.mainHead} </h1>
                    </div>

                    <div className="mb-5">
                        <Image className="img-fluid rounded w-100 mb-4" src={`/${item.imgUrl}`} width={600} height={600} alt="Image"/>
                        <h2>{item.h1}</h2>
                        <p>{item.dec1}
                        </p>
                        
                        <h2 className="mb-4">{item.h2}</h2>
                    
                        <p>{item.dec2}
                        </p>
                        <h3 className="mb-4">{item.h3}</h3>
                     
                        <p>{item.dec3}
                        </p>
                    </div>


                    
                </div>

                <SideNav items={item.id}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogPostPage