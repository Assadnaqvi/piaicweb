import React from 'react'
import Image from 'next/image'

const Images = () => {
  return (<section>
   
  <div className='bg-teal-500 pb-52'>
    <div className='text-white text-6xl font-bold pt-10 pl-20 pb-10'>Images</div>
    <Image src="/imagepic.jpg" alt="" width="780" height="680" className='float-left ... pb-36 mb-28 ml-20'></Image>
   
    <h1 className='static ... flex justify-end text-3xl mt-20 text-left'>President Launching the PIAIC Website</h1>
    <p className='static ... flex justify-end text-justify ... text-sm mt-10 text-white'>President Dr.Arif Alvi launching the official website of the PIAIC on December<br/> 9.2018.
    from left to right:Mr.Adil Altaf(Director Panacloud).Mr Zia Ullah<br/> Khan (CEO Panacloud),Mr.Hunaid Lakhari (Chancellor Iqra University),<br/>President Dr.Arif Alvi,MrSuleman S.Mehdi (Chairman Pakistan Stock <br/>Exchange),MrZeshan Hanif(CTO Panacloud),Maulana Bashir Farooqui <br/>(Founder Saylani Welfare Trust),Mr.Yousaf Lakhari(President Saylani <br/>Welfare Trust).</p>
  
  
    </div></section>
    
    
  )
}

export default Images