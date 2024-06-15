import React from 'react'
import * as images from "../../assets"
import { NavLink, Link } from 'react-router-dom'  // Import NavLink

const links = [
  { name: 'Home', path: '/' },
  { name: 'Create Token', path: '/createtoken' },
  { name: 'How it Works', path: '/howitworks' },
]

const Header = () => {
  // Function to determine the link's active state and apply styles accordingly
  const getActiveStyle = ({ isActive }) => isActive ? 'text-white border-b' : 'text-gray-400';

  return (
    <header className='bg_header h-[10vh] py-8 flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <NavLink to="/" className='w-[11%]'>
            <img src={images.logo} alt="" className='w-full object-cover' />
          </NavLink>
          <div>
            <h1 className='font-bungee text-3xl'>DIP.DOG</h1>
          </div>
          <div className='flex items-center gap-3 mx-4'>
            <Link to="/" ><img src={images.x} alt="" className='w-4' /></Link>
            <Link to="/" ><img src={images.telegram} alt="" className='w-4' /></Link>
          </div>
        </div>
        <div className='flex items-center gap-5'>

          <ul className='list-none flex gap-3 items-center'>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={({ isActive }) => getActiveStyle({ isActive })}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
