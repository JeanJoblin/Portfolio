'use client';

import { useState } from 'react';
import Navbar from './navbar'
import Image from 'next/image';
import BurgerColour from '../public/burgerColour.svg'
import BurgerOut from '../public/burgerOutline.svg'

export default function Hamburger() {
    const [open, setOpen] = useState(false);


    return (
      <div>
        <div className={`w-9 h-8 right-[5px] bottom-[5px] [transform:rotate(0deg)] [transition:_.5s_ease-in-out] relative cursor-pointer`}
          onClick={() => setOpen(!open)}>
          <span className={` block bg-slate-50 absolute h-[5px] w-full rounded-full opacity-100 left-0 top-0 transition-all [transition:_.25s_ease-in-out] ${open && 'top-3 [transform:rotate(135deg)]'}`}/>

          <span className={` block bg-slate-50 absolute h-[5px] w-full rounded-full opacity-100 top-3 [transition:_.25s_ease-in-out] left-0 ${!open && '[transform: rotate(0deg)]'} ${open && 'bg-opacity-0 left-[-60px]'} transition-all`}/>

          <span className={` block bg-slate-50 absolute h-[5px] w-full rounded-full opacity-100 left-0 [transition:_.25s_ease-in-out] ${ !open && '[transform:rotate(0deg)] top-6'} ${open && 'top-3 [transform:_rotate(-135deg)]'} transition-all`}/>
          {/* <Image 
            src={open ? BurgerOut : BurgerColour}
            alt='Navigation Menu'
            width={30}
            height={30}
            className={`mr-1 mb-1 inline pr-1 hover:cursor-pointer`}
            onClick={()=> setOpen(!open)}
          /> */}
        </div>
        <Navbar open={open} />
      </div>
      

    )
}