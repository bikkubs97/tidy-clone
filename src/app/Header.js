import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
    <div className='fext align-center justify-center text-center bg-customGreen h-18 fixed w-full z-50'>
        <div className='flex  justify-center'>
        <Image src="/ppr.png" width={70}
        height={60} className='pt-2'/>
       <span className='text-white p-5 text-xl'>Pay once, get a <strong>LIFETIME</strong> deal forver - for only <strong>$29</strong></span>
         <button className='bg-yellow-500 ml-4 my-4 text-xl font-medium  rounded-2xl px-2'>Click Here</button>
         </div>
    </div>
  )
}
