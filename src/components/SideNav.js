import React from 'react';

import blogitems from '@/blogitems';
import Link from 'next/link';
import Image from 'next/image';

const SideNav = ({items}) => {
    
     const objectOneIndex = blogitems.findIndex(item => item.id === items);
     const filteredBlogitems = [...blogitems.slice(0, objectOneIndex), ...blogitems.slice(objectOneIndex + 1)];
        return (
            <div className='col-lg-4 mt-5 mt-lg-0'>

           <div className="mb-5">
                       <h3 className="mb-4 section-title">Son Paylaşımlar</h3>
                       


 {filteredBlogitems.map((item)=>(

<div key={item.id} className="d-flex align-items-center border-bottom mb-3 pb-3">
 <Image className="img-fluid rounded sideNav width: 80px; height: 80px; object-fit: cover;" src={`/${item.imgUrl}`} width={600} height={600}  alt=""/>
 <div className="d-flex flex-column pl-3">
   <Link href={`/blogPost/${item.id}`}  className="text-dark mb-2" >{item.subHead}Detaylı bilgi...</Link>
   
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

        );
   
}
 
export default SideNav;