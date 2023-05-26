
export const navItems = [
  {title: 'Projects', href:'/'},
  {title: 'About', href:'/about'},
  {title: 'Contact', href:'/contact'},
  {title: 'Download Resume', href: '../../public/NicholasWParishResumeMay2023', download: 'Nicholas Parish Resume', target:'_blank'}
]

function displayNavItems() {
  return (
    navItems.map(({title, href, download, target}) => {
      return (
        <>
          <a 
            href={href}
            className={` pl-2 h-20 block pt-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-900 transition-all`} 
            key={title}
            download={ download ? download : false }
            target={ target ? target : false }
          >
            {title}
          </a>
          <hr/>
        </>
        
      )
    })
  )
}

export default function Navbar({open}) {
  return (
    <div id="sidebar" 
    className={
      `fixed z-10 right-[-200px] h-full bg-black bg-opacity-70 flex-row backdrop-blur-sm border-orange-500 w-[200px] transition border-l-2
      ${open && `translate-x-[-200px]`} 
    `}>
      {displayNavItems()}
    </div>
  )
}