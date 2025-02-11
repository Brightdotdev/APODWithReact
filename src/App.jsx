import React, { useEffect, useState } from 'react'
import './index.css'
import Card from './components/Card'
import { fetchAll } from './Utils/Api'

const App = () => {
  // const nasaData = useLoaderData()
  // const navigation = useNavigation();
  const [arryData, setArray] = useState([])




  const generateData = async () =>{
    const data = await fetchAll()
    setArray(data)
  }

  useEffect(() =>{
   generateData()
  },[])
  
  if (arryData.length === 0 ) {
    return (
      <div className="w-screen h-screen flex 
      items-center justify-center 
      bg-linear-to-b from-black/40 to-black/42">
        <p className="text-xl font-bold text-white">Loading...</p>
      </div>
    );
  }


  return (
    <div className='w-screen flex flex-wrap items-center justify-start gap-8 bg-linear-to-b from-black/30 to-black/32 pt-10 md:p-8 relative'>
{
  arryData.map((imageData,index) =>(
    <Card key={index} imageData={imageData} />
  ))
}
    </div>
  )
}

export default App