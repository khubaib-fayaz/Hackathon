'use client'
import { useSelector} from 'react-redux'
import { cartActions } from '@/store/slice/CartSlice';
import CounterSlice from '@/store/slice/CartSlice';
import { RootState } from '@/store/store';
import React from 'react'
import logo from '/public/logo.png';
import Image from 'next/image'
import Link from 'next/link';
import {ShoppingCart,SearchIcon} from 'lucide-react'
import { Input } from "@/components/ui/input"


export default function Header() {
  const cartValue = useSelector((state: RootState) => state.CounterSlice.totalQuantity);

  return (
    <div className='flex justify-between  items-center py-6 px-20'>
    <Link href={'/'}><Image src={logo} alt='logo here'/></Link>
        <ul className='flex gap-x-10'>
            <li className='text-lg'><Link href={'/Category/female'}>Female</Link></li>
            <li className='text-lg'><Link href={'/Category/male'}>Male</Link></li>
            <li className='text-lg'><Link href={'/Category/kids'}>Kids</Link></li>
            <li className='text-lg'><Link href={'/allproducts'}>All Products</Link></li>
        </ul>
        <div className='flex justify-center items-center'>
        <SearchIcon/>
        <Input type='text' placeholder='What are you looking for?'/></div>
        <div className='h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center relative'>
<span className='absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center'>{cartValue}</span>
<ShoppingCart/>
        </div>
    </div>
  )
}
