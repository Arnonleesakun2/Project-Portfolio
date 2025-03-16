import React from 'react'
import { Link, Links } from 'react-router'

const Menu = () => {
  return (
    <div className="font-shortstack flex items-center gap-5 font-semibold text-white ">
        <Link className='hover:text-white/70' to={"about"}>About</Link>
        <Link className='hover:text-white/70' to={"project"}>Project</Link>
    </div>
  )
}

export default Menu

