import Image from 'next/image'

export default function Proj( { proj }, ind ) {
  const {image, title, brief, siteLink, gitLink} = proj;
  return (
      <div className=' w-11/12 sm:w-5/6 mx-auto bg-gray-900 mt-8 p-4 rounded-[66px]' key={ind}>
        <Image
          src={image}
          alt={`example of ${title}`}
          width={100}
          height={100}
          className=' rounded-full float-left w-100 '
        />  
        <h2 className='text-center mr-[100px] '>{title}</h2>
        <p className='text-center mr-[100px]'>{brief}</p>
        <div className="flex justify-evenly mr-[100] w-full">
          { siteLink ? 
            <button className="bg-orange-500 px-2 py-1 rounded-lg">
            <a href={siteLink} target="_blank">View Site</a>
            </button> 
          : null }

          <a className="bg-orange-500 px-2 py-1 rounded-lg" href={gitLink} target="_blank">Github</a>
        </div>
      </div>
  )
}