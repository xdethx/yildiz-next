import About from '@/components/About'
import Blog from '@/components/Blog'
import Carousel from '@/components/Carousel'
import Contantinfo from '@/components/Contantinfo'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import VideoModal from '@/components/VideoModal'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <>
    <Head>
    <title>Yıldız Halı Yıkama - Profesyonel Temizlik Hizmetleriyle Evinizi ve İşyerinizi Parlatın</title>
        <meta name="description" content="Yıldız Halı Yıkama, ev ve işyerleriniz için kaliteli halı yıkama ve temizlik hizmetleri sunar. Uzman ekibimizle hijyenik ve etkili çözümlerimizle size en iyi temizlik deneyimini yaşatmak için buradayız." />
        <meta content="İstanbul,Kadıköy,Bostancı,Halı Yıkama,Koltuk Yıkama,Perde Yıkama,halı yıkama, temizlik hizmetleri, profesyonel temizlik, hijyenik temizlik, İstanbul halı yıkama, ev temizliği, işyeri temizliği, kaliteli temizlik, uzman temizlik ekibi" name="keywords"></meta>
    </Head>
    <Carousel/>
    <Contantinfo/>
    <About/>
    <VideoModal/>
    <Services/>
    <Features/>
    <Testimonial/>
    <Blog/>
    
    
    </>
  )
}

export default Home