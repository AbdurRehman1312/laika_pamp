import React from 'react'
import * as images from "../../assets"
import { Progress } from "@/components/ui/progress"
import ButtonRocket from '../ButtonRocket/ButtonRocket'

const AlpaTrumpCard = ({ image, style, created_id, market, message, badge = false }) => {
    return (
        <>
            <div className={`w-full m-auto bg_header relative bg_black_gradient mt-5 z-40 rounded-[30px] py-6 px-8 ${style}`}>
                <div className='flex items-start gap-5 '>
                    <div className='rounded-2xl flex-shrink-0'>
                        <img src={image} alt="" className='lg:w-24 w-16 object-cover' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='md:text-2xl text-lg text-white font-medium'>AlpaTrump <span className='text-[#e9e8ea] font-light'>[$ALPT]</span></h1>
                        <div className='flex items-center gap-1'><p className='md:text-xl text-sm text-[#e9e8ea] '>created by </p><p className='font-semibold text-white md:text-xl text-sm custom_text'>{created_id}</p></div>
                        <p className='lg:text-xl text-sm text-[#e9e8ea]'>market cap: <span className='font-semibold text-white'>{market}</span></p>
                    </div>
                </div>
                <div className='flex items-end w-full gap-5 mt-4'>
                    <div className='w-[45%] mb-2 mt-3'>
                        <Progress value={88} />
                    </div>
                    <div className='flex items-end w-[55%] justify-between'>
                        <div className=' flex items-center mb-2 gap-1'>
                            <img src={images.msg} alt="" className='w-3 h-3' />
                            <p className='text-white font-medium'>{message}</p>
                        </div>
                        <div>
                            <ButtonRocket />
                        </div>
                    </div>
                </div>
                {badge && <div className='absolute bg-secondary rounded-[10px] z-50 px-5 py-4 top-[-30px] right-[-10px]'>
                    <h1 className='text-sm text-white'>+25% PTS</h1>
                </div>}
            </div>
        </>
    )
}

export default AlpaTrumpCard