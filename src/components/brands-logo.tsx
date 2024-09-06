import React from 'react'
import logo from '../assets/container.png'

const BrandLogo = () => {
  return (
    <div className='w-full'>
        <img src={logo} className='mx-auto w-[90%] md:w-[78%] md:h-[150px]'/>
    </div>
  )
}

export default BrandLogo