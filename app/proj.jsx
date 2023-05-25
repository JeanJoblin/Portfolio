import Image from 'next/image'

export default function Proj( { proj }, ind ) {
  const {image, title, brief, siteLink, gitLink, techs} = proj;
  return (
      <div className=' w-11/12 sm:w-5/6 mx-auto bg-gray-900 mt-8 p-4 rounded-[66px]' key={ind}>
        <Image
          src={image}
          alt={`example of ${title}`}
          width={100}
          height={100}
          className=' rounded-full float-left w-100 h-[100px] [shape-outside:circle()] mr-3'
        />  
        <h3 className='text-center mr-[100px] font-semibold text-lg'>{title}</h3>
        {brief()}

        <p className='text-center font-semibold text-lg mt-3'>Technologies Used</p>
        <ul className='grid grid-cols-3 justify-items-center md:w-2/3 m-auto items-center'>
          {techs.map((tech, ind) => {
            return (
              <li className="flex mt-1" key={ title + tech.title}>
                <Image
                  src={tech.image}
                  alt={`${tech.title} logo`}
                  width={25}
                />
                <span className='ml-1'>{tech.title}</span>
              </li>
            )
          })}
        </ul>

        <div className="flex justify-evenly mr-[100] w-full mt-3">
          { siteLink ? 
            <button className="bg-orange-500 px-2 py-1 rounded-lg hover:bg-orange-700 font-medium ">
            <a href={siteLink} target="_blank">View Site</a>
            </button> 
          : null }
          <a className="bg-orange-500 px-2 py-1 rounded-lg hover:bg-orange-700 font-medium" href={gitLink} target="_blank">Github</a>
        </div>
      </div>
  )
}