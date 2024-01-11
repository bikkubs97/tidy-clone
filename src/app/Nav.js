import React from 'react';
import Link from 'next/link';
import image from 'next/image';

export default function Nav() {
  return (
    <div className='flex mt-20 justify-between space-x-5'>
      <div className='flex bg-white py-2 px-4 rounded-2xl'>
      <img src="/tidy.webp" alt="Your Image" width={40} height={40} />
        <h1 className='text-black text-2xl mt-1'>TidyCal</h1>
      </div>
      <div className='flex bg-white p-2 rounded-2xl  text-gray-500'>
        <Link href='/' className='px-5 py-2 hover:text-black'>Pricing</Link>
        <Link href='/' className='px-5 py-2 hover:text-black'>Directory</Link>
        <Link href='/r' className='px-5 py-2 hover:text-black'>Register</Link>
        <Link href='/' className='px-5 py-2 hover:text-black'>Login</Link>
      </div>
    </div>
  );
}
