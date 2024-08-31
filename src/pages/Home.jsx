// import React from 'react'
import Navbar from '../components/navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <p>SUMMER 2024</p>
          <p className='text-violet-900 text-3xl' >NEW COLLECTION</p>
          <p>We know how large objects will act. <br />
          but things on a small scale
          </p>
          <button className='bg-blue-600 text-white text-2xl w-[221px] h-[62px]'>SHOP NOW</button>
        </div>
      </div>
    </div>
    
  )
}

export default Home