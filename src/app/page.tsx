
import Hero from '@/Sections/Hero'
import ProductCard from '@/Sections/ProductsList'
import ProductsList from '@/Sections/ProductsCard'
import Image from 'next/image'
import Promotions from '@/Sections/Promotions'
import Newspaper from '@/Sections/Banner'
import Banner from '@/Sections/Banner'
import { Newsletter } from '@/Sections/Newsletter'
import {client} from '@/lib/sanityClient'
import Fetch from './fetch'
import Fetchs from './fetch'
import Fetch2 from './fetch2'



export default function Home() {
  return (
    <div>
      <Hero/>
      <Promotions/>
      <ProductCard/>
      <Banner/>
      <Newsletter/>
      <Fetch2/>
<Fetch/>
    </div>
  )
}

















// "use client"
// import sanityclient from "@sanity/client"
// //import {client} from '@/lib/sanityClient'
// import Image from 'next/image'
// import { createClient } from "next-sanity";
// import { apiVersion,dataset,projectId,useCdn } from "sanity/env";
// export const client=createClient({
//     apiVersion:"v2023-07-02",
//     dataset:"production",
//     projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     token:process.env.SANITY_ACCESS_TOKEN,
//     useCdn:true,
// })

// export const getProductData = async () => {
//     const query = `*[_type=="productsan"]{
//       Title,
//       ProductCategory
//     }`;
  
//     const res = await client.fetch(query);
//     return res;
//   };
  
//   interface IProduct {
//     Title: string;
//     ProductCategory: string;
//   }
  
//   export default async function Fetchs() {
//     const data: IProduct[] = await getProductData();
  
//     return (
//       <div>
//         {data.map((item) => (
//           <div key={item.Title}>
//             <h1 className='text-black'>Title: {item.Title}</h1>
//             <h2 className='text-black'>Category: {item.ProductCategory}</h2>
//           </div>
//         ))}
//       </div>
//     );
//   }





//   import {client} from '@/lib/sanityClient'
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
// export default async function Fetchs(){
//     const data:IProduct[]= await getProductData()
//     return(
//         <div>
//             {data.map((item)=>(
//           <h1 className='text-black'>{item.Title}</h1>      
//             ))}
//         </div>
//     )
// }