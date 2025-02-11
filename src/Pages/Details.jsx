import React, { Children, useEffect, useState } from 'react'
import { useLoaderData, useNavigation, useParams } from 'react-router-dom'

import marsPng from '/mars.png'
import { FaInfo } from 'react-icons/fa'
import Sidebar from '../components/Sidebar'
import BackToHome from '../components/Footer'
import { fetchSingleDate } from '../Utils/Api'


const Details = () => {
   const [imageData, setImageData] = useState({})
   const [isModalVisible, setModalVisible] = useState(false);
   const {date} = useParams();
   // const navigation = useNavigation();
   // const imageInfo = useLoaderData()


   const setModal = () => setModalVisible(modal => !modal)

   const getSIngleDate = async () => {
   
      try {
         const data = await fetchSingleDate(date);
         setImageData(data);
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() =>{
      getSIngleDate()
   },[date])

      



   
   if (Object.keys(imageData).length === 0) {
      return (
         <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black/30 to-black/32">
            <p className="text-xl font-bold text-white/90">Loading...</p>
         </div>
      );
   }


    return (
    <main 
    aria-label={imageData.explanation}
    className='relative w-screen h-screen bg-no-repeat bg-center flex items-center justify-end'
    style={{
      background : `url(${imageData.url || marsPng})`,
      backgroundRepeat : "no-repeat",
      backgroundPosition : "center center",
      backgroundSize : "cover"


    }}
    >


<BackToHome/>


{isModalVisible && ( <Sidebar imageData={imageData} setModal={setModal}/>)}





    <article className='flex w-full h-full justify-between items-end p-8 bg-gradient-to-t from-black/60 from-5% to-transparent'>
<h2 className='lg:text-4xl  text-2xl text-white/80' >
{imageData.title}
</h2>




<FaInfo className='lg:text-3xl text-xl cursor-pointer' onClick={setModal}/>


    </article>

    </main>
  )
}

export default Details



