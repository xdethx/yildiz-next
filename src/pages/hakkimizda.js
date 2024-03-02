import About from '@/components/About'
import Features from '@/components/Features'
import PageinHeader from '@/components/PageinHeader'
import Head from 'next/head'
import React from 'react'

const hakkimizda = () => {
  return (
    <>
    
     <Head>
        <title>Yıldız Halı Yıkama - Profesyonel Temizlik Hizmetlerinde Güvenilir Adres</title>
        <meta name="description" content="Yıldız Halı Yıkama, uzman kadrosuyla ev ve işyerleriniz için en kaliteli temizlik hizmetlerini sunar. Hijyenik ve profesyonel yaklaşımımızla halılarınızı antibakteriyel ve uzun ömürlü bir şekilde temizleriz." />
      </Head>
    <PageinHeader name="Hakkimizda" header="Hakkimizda" />
    <About/>
    <Features/>
    </>
  )
}

export default hakkimizda