function Articles() {
  const posts = [
    `I'm a big nerd. I like playing Magic the Gathering, Legend of Zelda, and various board and tabletop games`,
    `I love the outdoors! Hiking, cycling, and kayaking are some of my favorite things to do.`,
    `Technically, I am an award winning poet and essay writer.`
  ]
  return (
    <>
      {posts.map(post => {
        return (
          <div className='w-11/12 sm:w-5/6 mx-auto bg-gray-900 mt-8 p-4 rounded-[66px] text-center'>
            <p className='text-center text-slate-200'>
              {post}
            </p>
          </div>
        )
      })}

    </>
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