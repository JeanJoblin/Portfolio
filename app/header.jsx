import Image from 'next/image'
import Hamburger from './hamburger'


export default function Header() {
  return (
      <>
        <div className=' flex bg-orange-500 h-40 items-end justify-between sticky top-0' >
          <Image
              className=" rounded-full sm:top-8 absolute sm:left-6 border-orange-500 border-8 sm:w-[150px] w-[100px] top-20 "
              src='/testpfp.jpg'
              alt="a picture of me"
              width={150}
              height={150}
            />
          <h1 className=' font-bold text-4xl sm:text-6xl relative sm:ml-48 ml-[108px]'>Nicholas Parish</h1>
          <Hamburger />
        </div>
      </>
  )
}