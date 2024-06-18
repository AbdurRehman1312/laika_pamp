import React, { useState } from 'react'
import * as images from "../../assets"
import { NavLink, Link } from 'react-router-dom'  // Import NavLink
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select"
import ButtonTextP from '../ButtonTextP/ButtonTextP'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Create Token', path: '/createtoken' },
  { name: 'How it Works', path: '/howitworks' },
]

const coins = [
  { id: 'ethe', name: 'Ethereum', image: images.ethe },
];



const Header = () => {
  // Function to determine the link's active state and apply styles accordingly
  const getActiveStyle = ({ isActive }) => isActive ? 'text-white border-b' : 'text-gray-400';
  const [selectedOption1, setSelectedOption1] = useState(coins[0].id);
  return (
    <header className='flex '>
      <div className=' bg_header flex justify-between py-2 px-5 items-center w-[84%]'>
        <div className='flex  items-center'>
          <NavLink to="/" className='w-[11%]'>
            <img src={images.logo} alt="" className='w-24' />
          </NavLink>
          <div>
            <h1 className='font-bungee text-3xl'>DIP.DOG</h1>
          </div>
          <div className='flex items-center gap-5 ml-10'>
            <Link to="/" ><img src={images.x} alt="" className='w-5' /></Link>
            <Link to="/" ><img src={images.telegram} alt="" className='w-5' /></Link>
          </div>
          <div className='flex items-center ml-10'>

            <ul className='list-none lg:flex gap-10 items-center hidden'>
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

        <div className='hidden lg:flex gap-3 lg:flex-row flex-col items-center'>
          <Select value={selectedOption1} >
            <SelectTrigger className="w-[153px] bg-[#151515] border-0 p-3">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#151515] border-0">
              <SelectGroup>
                {coins.map(coin => (
                  <SelectItem key={coin.id} value={coin.id}>
                    <div className="flex items-center text-xs sm:text-base gap-2 ">
                      <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                      <span>{coin.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <ButtonTextP name="Connect Wallet" style={"p-3"} />

        </div>
      </div>
      <Link to={"/profile"} className='bg-[#37405a] w-[16%] hidden lg:flex gap-5 items-center justify-center py-2'>
        <div className='flex flex-col items-end'>
          <h1 className='font-bungee  text-lg'>5400 pts</h1>
          <h1 className='text-lg mt-1'>Rank: <span className='font-bungee  '>#42/352</span></h1>
        </div>
        <div className='rounded-[50%]'>
           <img src={images.dp} alt="" className='w-16' />
        </div>
      </Link>
    </header>
  )
}

export default Header;
