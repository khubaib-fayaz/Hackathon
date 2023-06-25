import React from 'react'
import { products } from '@/utils/mock'
import ProductsList from './ProductsCard'
import { StaticImageData } from 'next/image'
import p1 from '/public/p1.webp'
import p2 from '/public/p2.webp'
export default function ProductCard() {
  const productschunks=products.slice(0,3);
  return (
    <div className='flex justify-evenly mt-16'>
      {
        productschunks.map((product)=>(
          <ProductsList key={product.id}  title={product.name} price={product.price} image={product.image as StaticImageData} category={product.category} id={product.id}/>
        ))
        }
   
</div>
  )
}




