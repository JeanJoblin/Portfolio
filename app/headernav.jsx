import { navItems } from './navbar.jsx'

export default function HeaderNav () {
  return (
    <div className="lg:flex hidden h-full items-end">
      {navItems.map(({ title, href, download, target, noref }) => {
        return (
            <a
              className=' text-slate-50 hover:bg-slate-200 hover:text-slate-900 px-3 flex items-end h-[60px] leading-relaxed transition-all'
              href={href}
              download={ download ? download : false }
              target={ target ? target : false }
              key={'head' + {title}}
              rel={'noopener' + (noref ? ' noreferrer' : '')}
            >{title}</a>
        )
      })}
    </div>
  )
}