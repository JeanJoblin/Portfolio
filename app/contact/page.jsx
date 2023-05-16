import Contact from './contact';
import discordLogo from '../../public/discord-mark-white.svg'
import Email from '../../public/email-mail-svgrepo-com.svg'
import linkedIn from '../../public/LI-In-Bug.png'
import Invertocat from '../../public/github-mark-white.svg'

const contactMethods = [
  {
    title: "Discord",
    link: "https://discordapp.com/users/184888225632878592",
    image: discordLogo,
    verb: 'DM me on Discord'
  },
  {
    title: 'E-mail',
    image: Email,
    brief: 'E-mail me @ nicholaswparish@gmail.com'
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
      console.log(con)
      return (
        <Contact con={con} ind={ind} />
      )
    })
  )
}

export default function ContactPage() {
  return(
    <>
      {displayContacts(contactMethods)}
    </>
  )
}