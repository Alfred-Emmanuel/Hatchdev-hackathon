import React from 'react'
import logo from '../assets/container.png'

const BrandLogo = () => {
  return (
    <div className='bg-gray-100 w-full flex items-center justify-center '>
        <img src={logo} className='flex w-[70%] h-[175px]'/>
    </div>
  )
}

export default BrandLogo