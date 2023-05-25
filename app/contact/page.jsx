import discordLogo from '../../public/discord-mark-white.svg'
import Email from '../../public/email-mail-svgrepo-com.svg'
import linkedIn from '../../public/LI-In-Bug.png'
import Invertocat from '../../public/github-mark-white.svg'
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('./contact'), {ssr: false});

const contactMethods = [
  {
    title: "Discord",
    link: "https://discordapp.com/users/184888225632878592",
    image: discordLogo,
    verb: 'DM me'
  },
  {
    title: 'Email',
    image: Email,
    verb: 'nicholaswparish@gmail.com',
    link: 'mailto:nicholaswparish@gmail.com',
    mini: '@gmail.com'
  },
  {
    title: 'LinkedIn',
    image: linkedIn,
    link: "https://www.linkedin.com/in/nicholas-parish-3953a6264/",
    verb: 'View my profile'
  },
  {
    title: 'GitHub',
    image: Invertocat,
    link: 'https://github.com/JeanJoblin',
    verb: 'Peep my repos'
  },
];

function displayContacts(contactMethods) {
  return (
    contactMethods.map((con, ind) => {
      return (
        <Contact con={con} key={ con.title + ind } />
      )
    })
  )
}

export default function ContactPage() {
  return(
    <>
      <h2 className=" text-3xl font-bold text-slate-200 mt-4 text-center">Contact Me</h2>
      <div className=" sm:grid-cols-2 sm:grid">
        {displayContacts(contactMethods)}
      </div>
    </>
  )
}