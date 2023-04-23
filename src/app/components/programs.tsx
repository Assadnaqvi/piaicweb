import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Programs = () => {
  return (
    <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10 mt-10 id="portfolio'>
     
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-24 mx-auto w-full'> 
            
    <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-blue-900'></div>
 <text className='p-20'>Artificial Intelligence</text>
   
 </div>

 <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-pink-600'></div>
 <text className='p-20 text-pink-600'>Cloude Native and Moblie Web</text>
   
   
 </div>

 <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-yellow-600'></div>
 <text className='p-20'>Artificial Intelligence</text>
   
   
 </div>
 <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-pink-500'></div>
 <text className='p-20'>Artificial Intelligence</text>
   
   
 </div>
 </div>  
  
 </div>  
 
  
  )
}

export default Programs