import React from 'react'
import Logo from '../assets/container.png'

const BrandLogo = () => {
  return (
    <div className='w-full'>
        <img src={Logo} className='mx-auto w-[90%] md:w-[78%] md:h-[150px]' alt='Brand Logo'/>
    </div>
  )
}

export default BrandLogo