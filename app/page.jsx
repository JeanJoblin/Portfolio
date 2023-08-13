import Project from './proj'
import SDsvg from '/public/SD.svg'
import RedPurp from '/public/Snoo_dark.svg'
import reactLogo from '/public/react-javascript-js-framework-facebook-svgrepo-com.svg'
import jestLogo from '../public/jest-snapshot-svgrepo-com.svg'
import nextjsLogo from '../public/next.svg'
import nodejsLogo from '../public/nodejs02-svgrepo-com.svg'
import cssLogo from '../public/css-3-svgrepo-com.svg'
import reduxLogo from '../public/redux-svgrepo-com.svg'
import bootstrapLogo from '../public/bootstrap-fill-svgrepo-com.svg'
import npmLogo from '../public/npm-svgrepo-com.svg'

export default function Projects() {

  const react = {
    title: 'React',
    image: reactLogo,
  }

  const jest = {
    title: 'Jest',
    image: jestLogo,
  }

  const node = {
    title: 'Node.js',
    image: nodejsLogo,
  }

  const next = {
    title: 'Next.js',
    image: nextjsLogo,
  }

  const css = {
    title: 'CSS',
    image: cssLogo,
  }

  const redux = {
    title: 'React Redux',
    image: reduxLogo,
  }

  const bootstrap = {
    title: 'Bootstrap',
    image: bootstrapLogo,
  }
  
  const npm = {
    title: 'NPM',
    image: npmLogo,
  }

  const spaceDock = {
    image: SDsvg,
    title: 'Space Dock',
    brief: () => {
      return(
        <p>
          A customisable ship generator for the table top role playing game <a href='https://www.drivethrurpg.com/product/230009/Stars-Without-Number-Revised-Edition-Free-Version' target='_blank' className='text-blue-200'>Stars Without Number.</a> The focus is on random generation within a certain set of parameters, with emphasis on rationally built ships coherent with a given theme. Players can also create bespoke ships, and are given a running tally of the cost, mass, and power usage of selected components.
        </p>
      )
    },
    siteLink: 'https://spacedock.netlify.app/',
    gitLink: 'https://github.com/JeanJoblin/spacedock',
    techs: [ react, redux, jest, css, npm ],
  }

  const redditPurp = {
    image: RedPurp,
    title: 'Reddit Purple',
    gitLink: 'https://github.com/ShoshBeer/reddit-purple',
    brief: () => {
      return(
        <p>
          Easily explore posts linked in Reddit comments! Posts frequently appear on <a href='https://www.reddit.com/r/AskReddit/' target='_blank' className='text-blue-200'>r/askreddit</a> asking about the best posts in Reddit&apos;s history. Trying to find all the comments with links to these posts results in scrolling back and forth and opening a bunch of new tabs. This utility uses Reddit&apos;s unofficial API to scrub the page for you, and display each post found on a single page.
        </p>
      )
    },
    techs: [ react, redux, bootstrap ],
  }

  function displayProjects(projectArray) {
    return (
      projectArray.map((proj, ind) => {
        return (
          <Project proj={proj} key={ proj.title + ind} />
        )
      })
    )
  }

  const projects = [spaceDock, redditPurp];
  return (
    <>
    <h2 className=" text-3xl font-bold text-slate-200 mt-4 text-center">Projects</h2>
      {displayProjects(projects)}
    </>
  )
}