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
        <div >
          <Image 
            src={open ? BurgerOut : BurgerColour}
            alt='Navigation Menu'
            width={30}
            height={30}
            className={`mr-1 mb-1 inline pr-1 hover:cursor-pointer`}
            onClick={()=> setOpen(!open)}
          />
        </div>
        <Navbar open={open} />
      </div>
      

    )
}