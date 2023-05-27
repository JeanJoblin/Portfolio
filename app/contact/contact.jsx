'use client';
import Image from 'next/image';

export default function Contact( { con }, ind  ) {
  const {title, link, image, verb, mini} = con;
  console.log('ind', ind);
  return (
      <div className={`w-11/12 mx-auto bg-gray-900 mt-8 p-4 rounded-[66px] flex `} key={title + ind}>
        <div className='w-[25px] sm:w-[50px] relative flex flex-shrink-0 '>
          <Image
            src={image}
            alt={`logo for ${title}`}
            className=' sm:w-[100px] w-[50px] mt-auto mb-auto'
          />
        </div>
        <div className=" flex-1 ">
          <h2 className=' text-center font-semibold text-lg '>{title}</h2>
          <div className=" justify-evenly w-full flex mr-[100px] ">
            {verb && link && <a className={`bg-orange-500 px-2 py-1 rounded-lg hover:bg-orange-700 ${mini && 'hidden'} md:block`} href={link} target="_blank">{verb}</a>}
            {mini && <a className={`bg-orange-500 px-2 py-1 rounded-lg hover:bg-orange-700 md:hidden block`} href={link}>{mini}</a>}
          </div>
        </div>
      </div>
  )
}