import { useState } from 'react'
import Image from 'next/image'


export default function Header() {
  return (
      <>
        <div className=' flex bg-orange-500 h-40 items-end justify-between sticky top-0' >
          <Image
              className=" rounded-full top-8 absolute left-6 border-orange-500 border-8"
              src='/testpfp.jpg'
              alt="a picture of me"
              width={150}
              height={150}
            />
          <h1 className=' font-bold text-6xl relative left-30 ml-48'>Nicholas Parish</h1>
          <div className=' mr-1 '>Hamburger Menu</div>
        </div>
      </>
  )
}