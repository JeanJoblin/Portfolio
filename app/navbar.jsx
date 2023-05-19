
const navItems = [
  {title: 'Projects', href:'/'},
  {title: 'About', href:'/about'},
  {title: 'Contact', href:'/contact'}
]

function displayNavItems() {
  return (
    navItems.map((item, ind) => {
      return (
        <>
          <a 
            href={item.href}
            className={` pl-2 h-20 block pt-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-900 transition-all`} 
            key={ind}
          >
            {item.title}
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