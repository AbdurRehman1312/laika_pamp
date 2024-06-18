import React from 'react'
import * as images from "../../assets"
import { Progress } from '../ui/progress'
const TokenCard = () => {
    return (
        <div className='bg_black_gradient lg:w-[50%] xl:w-[40%] w-full rounded-[15px] m-auto mt-6'>
            <div className=''>
                <img src={images.tokenimg} alt="" className='h-[100%] w-full rounded-t-[15px] object-cover ' />
            </div>
            <div className='py-6 px-3 mt-0 flex flex-col gap-2'>
                <h1 className='md:text-xl text-lg text-white font-medium'>Muttnik the dog <span className='text-[#e9e8ea] font-light'>[$MUTT]</span></h1>
                <div className='flex items-center gap-1'><p className='text-sm text-[#e9e8ea] '>created by </p><p className='font-semibold text-white text-sm custom_text'>0xErd4512122</p></div>
                <p className='text-sm text-[#e9e8ea]'>mcap: <span className='font-semibold text-white'>550k</span> <span className='text-[#00FF29] mx-2'>+5,40%</span></p>
                <div className='flex items-end gap-5 mt-2'>
                    <div className='w-[85%] text-sm md:text-base'>
                        <Progress value={88} />
                    </div>
                    <div className='w-[15%] flex items-center gap-1'>
                        <img src={images.msg} alt="" className='w-4' />
                        <p className='text-white font-medium text-sm md:text-base'>3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenCard