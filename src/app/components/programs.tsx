import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Programs = () => {
  return (
    <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10 mt-10 id="portfolio'>
     
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-14 mx-auto w-full'> 
            
    <div className='shadow-md  shadow-gray-600 h-44 w-80'>
    
 <div className='h-14 w-80 bg-blue-950'></div>
 <div className='hover:'></div>
 <text className='p-20 text-blue-950 text-bold'>Artificial Intelligence</text>
  
 </div>

 <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-pink-700'></div>
 <text className='p-12 text-pink-700 text-bold'>Cloude Native and Moblie Web</text>
   
   
 </div>

 <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-yellow-600'></div>
 <text className='p-28 text-yellow-600 text-bold'>Block Chain</text>
   
   
 </div>
 <div className='shadow-md  shadow-gray-600 h-44 w-80'>
 <div className='h-14 w-80 bg-teal-700'></div>
 <text className='p-16 text-teal-700 text-bold'>Internet of Things and AI</text>
   
   
 </div>
 </div>  
  
 </div>  
 
  
  )
}

export default Programs