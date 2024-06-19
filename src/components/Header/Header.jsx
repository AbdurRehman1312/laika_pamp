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
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <header className='flex'>
        <div className=' bg_header flex justify-between md:gap-5 lg:gap-3 xl:gap-0 py-2 px-2 md:px-3 lg:px-1 xl:px-2 items-center xl:w-[84%] lg:w-[85%] md:w-[70%] w-full'>
          <div className='flex gap-5 md:gap-5 lg:gap-4 xl:gap-10 items-center'>
            <NavLink to="/" className='flex items-center ' >
              <img src={images.logo} alt="" className='w-16 md:w-16 lg:w-28 xl:w-16' />
              <h1 className='font-bungee md:text-2xl xl:text-3xl text-xl'>DIP.DOG</h1>
            </NavLink>
            <div className='flex items-center gap-5 '>
              <Link to="/" ><img src={images.x} alt="" className='w-5 md:w-4 lg:w-7 xl:w-4' /></Link>
              <Link to="/" ><img src={images.telegram} alt="" className='w-5 md:w-4 lg:w-7 xl:w-4' /></Link>
            </div>
            <div className='flex items-center '>

              <ul className='list-none lg:flex gap-5 xl:gap-8 justify-between items-center hidden'>
                {links.map((link, index) => (
                  <li key={index} className='text-nowrap'>
                    <NavLink to={link.path} className={({ isActive }) => getActiveStyle({ isActive })}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='hidden lg:flex gap-1 xl:gap-3 lg:flex-row flex-col lg:items-center'>
            <Select value={selectedOption1} >
              <SelectTrigger className="lg:w-[148px] xl:w-[153px] bg-[#151515] border-0 lg:p-2 xl:p-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#151515] border-0">
                <SelectGroup>
                  {coins.map(coin => (
                    <SelectItem key={coin.id} value={coin.id}>
                      <div className="flex  items-center text-xs sm:text-base gap-2 ">
                        <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                        <span>{coin.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <ButtonTextP name="Connect Wallet" style={" lg:p-2 xl:p-3 "} />

          </div>
          <div className="lg:hidden flex justify-end items-center">
            <img
              src={toggle ? images.close : images.menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          {toggle && (
            <div className="lg:hidden absolute top-[13.5vh] md:top-[14vh] right-0 w-full px-1 z-[120]">
              <div className="p-6 bg-gray-600 shadow-2xl mx-4 my-2 rounded-xl sidebar">
                <ul className=' items-center gap-5 flex flex-col justify-center'>
                  {
                    links.map((link, index) => (
                      <li key={index} className='inline-block mx-4'>
                        <Link to={link.path} onClick={() => setToggle(false)}>{link.name}</Link>
                      </li>
                    ))
                  }
                  <li>
                    <Select value={selectedOption1} >
                      <SelectTrigger className=" bg-[#151515] border-0  p-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151515] border-0">
                        <SelectGroup>
                          {coins.map(coin => (
                            <SelectItem key={coin.id} value={coin.id}>
                              <div className="flex  items-center text-base gap-2 ">
                                <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                                <span>{coin.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </li>
                  <li>
                    <ButtonTextP name="Connect Wallet" style={" p-3 "} />
                  </li>
                </ul>
                <Link to={"/profile"} onClick={() => setToggle(false)} className='bg-[#37405a]  md:hidden flex justify-center gap-3 mt-3 p-3 rounded-xl '>
                  <div className='flex flex-col items-end'>
                    <h1 className='font-bungee  text-lg text-nowrap'>5400 pts</h1>
                    <h1 className='text-lg mt-1 xl:text-nowrap'>Rank: <span className='font-bungee  '>#42/352</span></h1>
                  </div>
                  <div className='rounded-[50%]'>
                    <img src={images.dp} alt="" className='w-16' />
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link to={"/profile"} className='bg-[#37405a] xl:w-[16%] lg:w-[15%] md:w-[30%] hidden md:flex xl:gap-5 md:gap-4  md:px-2 xl:px-0 lg:items-center lg:justify-center py-2 '>
          <div className='flex flex-col items-end'>
            <h1 className='font-bungee text-lg lg:text-base xl:text-lg text-nowrap'>5400 pts</h1>
            <h1 className='text-lg lg:text-base xl:text-lg mt-1 xl:text-nowrap'>Rank: <span className='font-bungee  '>#42/352</span></h1>
          </div>
          <div className='rounded-[50%]'>
            <img src={images.dp} alt="" className='w-16' />
          </div>
        </Link>
      </header>
    </>

  )
}

export default Header;
