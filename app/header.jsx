import Image from 'next/image'
import Hamburger from './hamburger'
import Profile from '../public/Profile FujiQ Higland.png'
import HeaderNav from './headernav.jsx'


export default function Header() {
  return (
      <>
        <div className="flex bg-orange-500 h-20 sm:h-36 items-end justify-between top-0 z-10 slate-50 w-full sticky">
          <Image
              className="rounded-full sm:top-4 top-[0px] absolute sm:left-6 border-orange-500 border-[7px] sm:border-8 sm:w-[150px] w-[100px] "
              src={Profile}
              alt="a picture of me"
              width={150}
              height={150}
            />
          <h1 className="font-bold text-4xl sm:text-6xl relative sm:ml-48 ml-[108px] text-slate-100">Nicholas Parish</h1>
          <HeaderNav/>
          <Hamburger />
        </div>
      </>
  )
}