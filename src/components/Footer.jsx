import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <div className='absolute top-[5%] left-[5%] rounded-full cursor-pointer p-4 bg-black/90'>
      <Link to="/" >
      <FaArrowLeftLong/>
      </Link>
    </div>
  )
}

export default BackToHome