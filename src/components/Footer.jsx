import React from 'react'

function Footer() {
  return (
    <div className='my-4 flex items-center justify-center w-full'>
        <div className='w-[70%] flex items-center gap-28 border-t border-slate-300 pt-8'>
            <div className='flex flex-col gap-5 '>
                <h1 className='font-bold'>Company Info</h1>
                <div className='flex flex-col text-gray-500 text-sm font-semibold gap-3'>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We dey hire</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <h1 className='font-bold'>Features</h1>
                <div className='flex flex-col text-gray-500 text-sm font-semibold gap-3'>
                    <p> Business Marketing </p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <h1 className='font-bold'>Resources</h1>
                <div className='flex flex-col text-gray-500 text-sm font-semibold gap-3'>
                    <p>iOS & Android</p>
                    <p>Watch a demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <h1 className='font-bold'>Resources</h1>
                <div className='flex flex-col text-gray-500 text-sm font-semibold gap-3'>
                    <p>iOS & Android</p>
                    <p>Watch a demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer