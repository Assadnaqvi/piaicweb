import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (<section>
   <div className='bg-gray-200 max-w-full mx-auto'> <div className='bg-gray-400 hover:bg-gray-500 mt-0 ml-60 mr-60'>
    <p className=' text-justify pl-4 mt-2 text-gray-200'>Admissions are now open in Web 3.0 and Metaverse Program in Karachi, Lahore, Islamabad, and Peshawar.<br/>For queries contact PIAIC helpline: 03082220203. Click Here to Apply</p>
    
    </div>
      <div className='text-align max-w-full mx-auto'>
    <h1 className='static ... flex justify-end text-left mt-6 mr-40 text-6xl font-medium max-w-4xl mx-auto'>Presidential Initiative</h1>
  <div className='static ... flex justify-end text-3xl mt-8 text-left mr-32'>for Artificial Intelligence & Computing (PIAIC)</div>
  <div className='static ... flex justify-end text-sm  mt-10 text-left mr-16'>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting <br/>latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to <br/>become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented <br/>reality, and internet of things.</div>
  </div>
  <div className='static ... flex justify-end text-sm  mt-28 text-left mr-40'>
  <button className="bg-gradient-to-r from-teal-400 to-teal-800 ...pt-0 pb-0 px-8 rounded-md text-slate-50">Apply</button>

<div className=''><text className='text-xl font-black ml-4'>| 100k.</text><br/><text className='text-xs ml-8'>applications Received</text></div>
</div>

 <div className='-mt-80'><Image src="/president.png" alt="" width="390" height="290"></Image>
 </div><div><h1 className="flex justify-center text-4xl tracking-widest font-black text-gray-500 font-mono ... -mt-10">Available Programs</h1></div>

 </div></section>)
}

export default Hero