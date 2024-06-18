import React from 'react'
import * as images from "../../assets"
import { Progress } from "@/components/ui/progress"
import ButtonImage from '../ButtonImage/ButtonImage'
const MuttnikCard = ({image, style, created_id, market, message, text}) => {
    return (
        <>
            <div className={`w-full m-auto bg_header  bg_black_gradient mt-5 rounded-[30px] py-6 px-8 ${style}`}>
               <div className='flex items-start gap-5 '>
                <div className='rounded-2xl'>
                    <img src={image} alt="" className='w-24 h-24'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl text-white font-medium'>Muttnik the dog <span className='text-[#e9e8ea] font-light'>[MUTT]</span></h1>
                   <div className='flex items-center gap-1'><p className='text-xl text-[#e9e8ea] '>created by </p><p className='font-semibold text-white text-xl custom_text'>{created_id}</p></div> 
                    <p className='text-xl text-[#e9e8ea]'>market cap: <span className='font-semibold text-white'>{market}</span></p>
                </div>
               </div>
               <div className='flex items-end gap-5 mt-2'>
               <div className='w-[45%] mt-3'>
                <Progress value={70} />
               </div>
               <div className='w-[55%] flex items-center gap-1'>
                <img src={images.msg} alt="" className='w-3 h-3'/>
                <p className='text-white font-medium'>{message}</p>
               </div>
               </div>
               <div className='mt-5'>
                    <p className='italic text-xl text-gray-400 '>{text}</p>
               </div>
               <div className='mt-3 flex justify-center'>
                  <ButtonImage name={"pamp it"}/>
               </div>
               
            </div>
        </>
    )
}

export default MuttnikCard