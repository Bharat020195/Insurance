import React from 'react'
import Home from '../public/Home.png'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className=' lg:w-[1160px] w-[350px] ml-64 md:w-[600px] my-4 rounded-xl bg-indigo-50 shadow-lg lg:h-52 h-40  flex justify-between '>
        <div className='lg:text-3xl md:text-2xl text-lg my-5 mx-10 font-semibold lg:space-y-4'> Insure your <a className='text-sky-400'>Vehicle</a>
        <p className='lg:text-lg text-[10px] opacity-50 font-normal'>Neque porro quisquam est qui dolorem ipsum quia dolor.</p>
        <div><Link href='' className='lg:text-2xl text-[8px] text-white bg-sky-400 p-3 rounded-xl font-medium'>Secure My Vehicle</Link></div></div>
        <div className='flex items-center'><Image src={Home} alt='No Image Found' className='lg:w-96 w-40'/></div>
    </div>
  )
}

export default Banner