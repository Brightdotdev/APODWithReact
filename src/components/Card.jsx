import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import marsPng from '/mars.png'
import { LuArrowUpRight } from 'react-icons/lu';







const ViewUserPopUp =({date}) =>{
  return(
   <div className="absolute  lg:hidden group-hover:flex z-50">
      
     <div className=" flex-col p-2 px-4
    shadow-sm
    items-center justify-center bg-black relative lg:-top-[6rem] lg:left-[13rem] md:-top-[6rem]  md:left-[15rem] 

    -top-[6rem]  left-[2rem]
    rounded-sm">

      <h2 className="flex items-center gap-2 text-lg text-white/90 bg-black">
        View APOD of <span>{date}</span>
<LuArrowUpRight/>
      </h2>
    </div>
   </div>
  )
}


//image username fullname address
const Card = ({imageData}) => {

    const minimizedText = imageData.explanation.split(" ").slice(0, 10).join(" ") + "..."
    console.log(imageData)
  return (
    
<Link 
to={`/details/${imageData.date ? imageData.date : "no date" }`}
aria-label={imageData.explanation}
className={`
cursor-pointer
flex items-center justify-center lg:w-[46vw] 
w-screen
h-[14rem] group relative
border-b-4 rounded-sm shadow-2xl
border-black
`}>
        <ViewUserPopUp date={imageData.date}/>

    <div
    className="w-full h-full flex items-center relative justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${imageData.url || marsPng})`,
    }}

    >
        <title>
            {imageData.explanation}
        </title>
    <div className="flex flex-col gap-2
    bg-gradient-to-r from-black/50 to-transparent
    p-4
    w-full
    h-full
    items-start
    justify-end
    ">

        <h5 className="text-lg font-medium text-white underline underline-offset-4 decoration-white "><span className='text-white/70'> Title: </span> {imageData.title || "THis is the mars image fallback"}</h5>
        <p className="text-lg font-medium text-white underline underline-offset-4 decoration-white "><span className='text-white/70'> Description  : </span> {minimizedText  || "Uhm....It's an image of mars ig...sorry the api is currently down 🧍‍♂️🧍" }</p> 
    </div>
    </div>
</Link>

  )
}

export default Card