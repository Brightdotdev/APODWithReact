import React from 'react'
import marsPng from "/mars.png"
import { FaArrowLeftLong } from 'react-icons/fa6'
export default function Sidebar({imageData, setModal}) {

  
  return (
    <div className='lg:w-[50vw] h-screen w-screen  absolute flex flex-col bg-bgBlue lg:p-6 p-2 gap-4 lg:gap-8 overflow-y-auto'>


<div className="flex flex-col lg:gap-4 gap-2 items-start">

        <img src={imageData.url || marsPng } alt="" className='inline-block lg:hidden   w-full rounded-sm h-[14rem] object-cover' />

        <h2  className='lg:text-4xl text-2xl' >{imageData.title || "The Brital Marsial Landscape"}</h2>
        
</div>
        <div className='flex flex-col lg:gap-4 gap-2' >
        <p className='lg:text-2xl text-xl text-white/50'>Description</p>
          <p className='lg:texl-lg texl-xs text-white/90 w-full'> { 
          imageData.explanation ||
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Facere quisquam fugiat officia iste natus vero temporibus aut sunt 
          non at voluptates, cum quas libero ad consequatur laborum illo nostrum nisi.`} </p>



<p className='lg:text-2xl text-lg text-white/50'>Date : <span className="texl-sm text-white/80">

{imageData.date ||  `Today...duhh`}
  </span> 
</p>
       
<p className='lg:text-sm text-xs text-white/60'>
  This image and meta is a sole property of NASA and the United States government.  
  I do not own any rights to these images or data provided. The use of this API and its images is solely for educational purposes and not for commercial use.
</p>
              
        </div>

<div className="flex w-full justify-start-items-center mt-auto">
<FaArrowLeftLong  className='cursor-pointer' onClick={setModal} />
</div>
    </div>
  )
}
