import Image from 'next/image'

export default function Contact( { con }, ind ) {
  const {title, link, image, verb, brief} = con;
  return (
      <div className=' w-11/12 sm:w-5/6 mx-auto bg-gray-900 mt-8 p-4 rounded-[66px]' key={ind}>
        <Image
          src={image}
          alt={`logo for ${title}`}
          width={100}
          height={100}
          className=' float-left w-[100px]'
        />  
        <h2 className='text-center mr-[100px] font-semibold text-lg'>{title}</h2>
        {brief && <p className="text-center mr-[100px]">{brief}</p>}
        <div className="justify-evenly w-full flex mr-[100px]">
          {verb && link && <a className="bg-orange-500 px-2 py-1 rounded-lg inline-block" href={link} target="_blank">{verb}</a>}  
        </div>
      </div>
  )
}