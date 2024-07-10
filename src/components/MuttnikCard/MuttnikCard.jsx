import React from 'react'
import * as images from "../../assets"
import { Progress } from "@/components/ui/progress"
import ButtonImage from '../ButtonImage/ButtonImage'
import { Link } from 'react-router-dom'
const MuttnikCard = ({ image, style, created_id, market, message, text, value_progress }) => {
    return (
        <>
            <div className={`w-full m-auto bg_header relative bg_black_gradient mt-5 rounded-[30px] py-6 px-8 ${style}`}>
                <div className='flex items-start gap-5 '>
                    <div className='rounded-2xl flex-shrink-0'>
                        <img src={image} alt="" className='w-24 h-24 object-cover rounded-[15px]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='md:text-2xl text-lg text-white font-medium'>Muttnik the dog <span className='text-[#e9e8ea] font-light'>[$MUTT]</span></h1>
                        <div className='flex items-center gap-1'><p className='md:text-xl text-sm text-[#e9e8ea] '>created by </p><p className='font-semibold text-white md:text-xl text-sm custom_text'>{created_id}</p></div>
                        <p className='md:text-xl text-sm text-[#e9e8ea]'>market cap: <span className='font-semibold text-white'>{market}</span></p>
                    </div>
                </div>
                <div className='flex items-end gap-5 mt-2'>
                    <div className='w-[45%] mt-3 text-sm md:text-base'>
                        <Progress value={value_progress} />
                    </div>
                    <div className='w-[55%] flex items-center gap-1'>
                        <img src={images.msg} alt="" className='w-4' />
                        <p className='text-white font-medium text-sm md:text-base'>{message}</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='italic md:text-xl text-sm text-gray-400 '>{text}</p>
                </div>
                <Link to={"/pamp"} className='mt-3 flex justify-center'>
                    <ButtonImage name={"pamp it"} />
                </Link>
                <div className='absolute bg-secondary rounded-lg md:px-7 px-5 py-1 top-[-15px] md:right-[-20px] right-[-10px]'>
                    <h1 className='font-bungee md:text-2xl text-lg text-white'>#1</h1>
                </div>
            </div>
        </>
    )
}

export default MuttnikCard