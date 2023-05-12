
const navItems = [
  {title: 'Projects',},
  {title: 'Aboot',},
  {title: 'Contact',}
]

function displayNavItems() {
  return (
    navItems.map(item => {
      return (
        <>
          <a 
            href={item.href}
            className={` ml-2 h-20 block pt-1 hover:cursor-pointer `} 
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
    <div id="sidebar" className={` w-[200px] fixed z-10 right-0 h-full bg-black bg-opacity-70 flex-row backdrop-blur-sm border-l-2 border-orange-500 ${!open && 'w-[0] border-none'} transition`}>
      {displayNavItems()}
    </div>
  )
}