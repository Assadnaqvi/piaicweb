import React from 'react'
import Image from 'next/image'
const PoweredBy = () => {
  return (<section><div className='bg-gray-800 max-w-full mx-auto'>
    <div className='text-white pl-96 flex justify-end'>PoweredBy</div>
    <div className='flex justify-end pl-96'><Image src="/powerdby.png" alt="" width="90" height="70"></Image>
    </div></div></section>
  )
}

export default PoweredBy