import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (<section className=''>
    <div className='static ... flex justify-end pt-5 pb-5 bg-teal-800 text-bold text-gray-200'>
   <div className='absolute top-15 left-8 ... flex-start'>
    <Image src="/logo.svg" alt="" width="88" height="105"></Image>
    </div>
    <div className='ml-8'>How It Works</div>
    <div className='ml-8'>Apply</div>
    <div className='ml-8'>Available Programs</div>
    <div className='ml-8'>About</div>
    <div className='ml-8 mr-8'>WIT</div>
    
    
    </div>
    </section>)
}

export default Navbar