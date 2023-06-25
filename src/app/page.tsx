import Hero from '@/Sections/Hero'
import ProductCard from '@/Sections/ProductsList'
import ProductsList from '@/Sections/ProductsCard'
import Image from 'next/image'
import Promotions from '@/Sections/Promotions'
import Newspaper from '@/Sections/Newspaper'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Promotions/>
      <ProductCard/>
      <Newspaper/>
    </div>
  )
}
