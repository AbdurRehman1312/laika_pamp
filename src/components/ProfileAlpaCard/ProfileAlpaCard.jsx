import React from 'react'
import ButtonRocket from '../ButtonRocket/ButtonRocket'
import * as images from "../../assets"
const ProfileAlpaCard = ({ text, symbol, image, token_number, network_number, network_name, style }) => {
    return (
        <div className={`flex bg-[#1a1f2d] flex-wrap justify-between items-center rounded-[30px] py-6 px-8 mb-3 ${style}`}>
            <div className='flex items-start gap-5 flex-wrap'>
                <div className='w-[70px] h-[70px] flex-shrink-0'>
                    <img src={image} alt="" className='w-full h-[100%] rounded-2xl object-cover' />
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl text-white font-medium'>{text} <span className='text-[#e9e8ea] font-light'>[{symbol}]</span></h1>
                    <p className=' text-lg text-[#e9e8ea]'>{token_number} {symbol}</p>
                    <p className=' text-lg text-[#e9e8ea]'>{network_number} {network_name}</p>
                </div>
            </div>
            <div>
                <ButtonRocket style={"bg-[#4563ff] py-5 px-5"} />
            </div>
        </div>
    )
}

export default ProfileAlpaCard