// import {client} from '@/lib/sanityClient'
// import Image from 'next/image'
// export const getProductData=async()=>{
//     const res=await client.fetch(`*[_type=="productsan"]{
//         Title,
//         ProductCategory
//     }`);
//     return res;
// }
// interface IProduct{
//     Title:string,
//     ProductCategory:string
// }
// export default async function Fetch(){
//     const data:IProduct[]= await getProductData()
//     return(
//         <div>
//             {data.map((item)=>(
//           <h1 className='text-black'>{item.Title}</h1>      
//             ))}
//         </div>
//     )
// }



"use client"

import { useEffect, useState } from "react";

const Fetchs = () => {
    const [product, setProduct] = useState(null);
    

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch('https://xcn24sra.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type%3D%3D%22productsan%22%5D%5B0%5D');
          const data = await response.json();
          setProduct(data.result);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, []);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h1>{product.Title}</h1>
      <p>Category: {product.Category}</p>
    
      <img src={`https://cdn.sanity.io/images/xcn24sra/production/${product.Image.asset._ref.split('-')[0]}.${product.Image.asset._ref.split('-')[1]}`} alt="Product" />
    </div>
  );
};

export default Fetchs;