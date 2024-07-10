import React from 'react'
import ButtonImageP from '../ButtonImageP/ButtonImageP'
import * as images from "../../assets"
import { Link } from 'react-router-dom'
const DipperCard = ({ username, profile_id, points, image, style, style_2, style_3, badge }) => {
    return (
        <div className={`rounded-[40px] py-9 px-3 relative  ${style}`}>
            <div className={`flex items-center justify-center gap-4  ${style_2}`}>
                <div className=' flex-shrink-0 w-[50px] h-[50px]'>
                    <img src={image} alt="" className='w-full h-[100%] object-cover rounded-[50%]' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-lg xl:text-xl font-medium'>{username}</h1>
                    <p className='text-base xl:text-lg  custom_text2 mt-1 font-light'>{profile_id}</p>
                    <h1 className='font-bungee text-sm sm:text-lg text-nowrap'>{points} pts</h1>
                </div>
                <Link to={"/profile"} className='flex-shrink-0'>
                    <ButtonImageP image={images.arrowr} />
                </Link>
            </div>
            <div className={`absolute  rounded-lg md:px-8 px-5 py-1 top-[-15px] md:right-[-20px] right-[-10px] ${style_3}`}>
                <h1 className='font-bungee md:text-2xl text-lg text-white'>{badge}</h1>
            </div>

        </div>
    )
}

export default DipperCard