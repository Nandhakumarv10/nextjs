import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='w-full h-screen p-5 '>
        <div className='w-52 h-96 bg-gray-300 flex flex-col p-2'>
         <div className='flex justify-center items-center'>
           <div className='w-44 h-40 bg-black'>
            <Image
            src="/images.jpg"
            alt='happy'
            width={100}
            height={100}
            />

           </div>
         </div>
         <div>Card title</div>
         <div>Card Description</div>
        </div>
        
    </div>
  )
}
