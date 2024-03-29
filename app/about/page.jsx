function Articles() {

const hobbies = {
  title: 'Hobbies',
  brief: () => {
    return (
      <>I&apos;m a big nerd, and I love the outdoors. Magic: the Gathering is my favorite card game, and I have recently discovered a love of cycling after doing the <a href="https://www.japan-guide.com/e/e3478.html" target="_blank" className='text-blue-200'>Shimanami Kaido cycling route</a> in Japan.</>
    )
  },
};

const coding = {
  title: 'Coding',
  brief: () => {
    return (
      <>Code-wise, some of my favorite challenges came from my Space Dock project. I enjoyed writing and testing logic to generate a random but bounded number of crew for a given ship (e.g. skeleton crew) and automatically generating JSON files from text copied out of the <a href="https://www.drivethrurpg.com/product/230009/Stars-Without-Number-Revised-Edition-Free-Version" target="_blank" className='text-blue-200'>Stars Without Number rulebook.</a></>
    )
  }
};

const abouts = [ hobbies, coding ];

return (
  <div className="grid sm:grid-cols-2 justify-items-center">
    {abouts.map((about, ind) => {
      return (
        <div className="bg-gray-900 mt-8 p-y4 px-6 rounded-[66px] w-11/12 pb-8 text-slate-50" key={about.title + ind}>
          <h3 className='font-semibold text-lg pt-2 text-center'>{about.title}</h3>
          {about.brief()}
        </div>
      )
      })}
  </div>
)
}

export default function About() {
  return(
    <>
      <h2 className=" text-3xl font-bold text-slate-200 mt-4 text-center">About Me</h2>
      {Articles()}
    </>

  )
}