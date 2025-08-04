import React, { useEffect, useState } from 'react'
import './index.css'
import Card from './components/Card'
import { fetchAll } from './Utils/Api'
import NewtonsCradle from './components/Loader'

const App = () => {
  // const nasaData = useLoaderData()
  // const navigation = useNavigation();
  const [arryData, setArray] = useState([])




  const generateData = async () =>{
    const data = await fetchAll()
    console.log("data from app ", data)
   
    setArray(data.reverse())
  }

  useEffect(() =>{
   generateData()
  },[])
  
  if (arryData.length === 0 ) {
    return (
      <NewtonsCradle/>
    );
  }


  return (
    <div className='w-screen flex flex-wrap items-center justify-start gap-8 bg-black/85 pt-10 md:p-8 relative'>
{
  arryData.map((imageData,index) =>(
    <Card key={index} imageData={imageData} />
  ))
}
    </div>
  )
}

export default App