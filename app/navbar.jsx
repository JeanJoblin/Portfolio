
export default function Navbar() {
  return (
    <div id="sidebar" className=" w-[200px] fixed z-10 right-0 h-full bg-black flex-row ">
      <a className=" ml-2 h-20 block pt-1 ">Projects</a>
      <hr/>
      <a className=" ml-2 h-20 block pt-1 ">Aboot</a>
      <hr/>
      <a className=" ml-2 h-20 block pt-1 ">Contact</a>
      <hr/>
    </div>
  )
}