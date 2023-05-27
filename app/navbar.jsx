
export const navItems = [
  {title: 'Projects', href:'/'},
  {title: 'About', href:'/about'},
  {title: 'Contact', href:'/contact'},
  {title: 'Download Resume', href: '/NicholasWParishResumeMay2023.pdf', download: 'Nicholas_Parish_Resume', target: '_blank', noref: true}
]

function displayNavItems() {
  return (
    navItems.map(({title, href, download, target, noref}) => {
      return (
        <>
          <a 
            href={href}
            className={`pl-2 h-20 block pt-1 text-slate-200 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-900 transition-all`} 
            key={'side' + title}
            download={ download ? download : false }
            target={ target ? target : false }
            rel={'noopener' + (noref ? ' noreferrer' : '')}
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
      `fixed z-10 right-[-200px] h-full bg-black bg-opacity-70 flex-row backdrop-blur-sm border-orange-500 w-[200px] transition border-l-2 overflow-auto
      ${open && `translate-x-[-200px]`} 
      `
    }>
      {displayNavItems()}
      <div className="scrollfix h-20"></div>
    </div>
  )
}