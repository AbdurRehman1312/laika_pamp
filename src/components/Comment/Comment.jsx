import React from 'react'
import * as images from "../../assets"
const Comment = ({userid, userimg, time, likes, msg}) => {
    return (
        <div className='p-5 mt-5 bg_glass2 rounded-[10px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img src={images[userimg]} alt="" className='w-8' />
                    <p className='font-semibold text-white md:text-base text-sm custom_text2'>{userid}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-gray-300 font-light md:text-base text-sm'>{time}</p>
                    <div className='flex items-center gap-2'>
                        <img src={images.likeheart} className='w-5' alt="" />
                        <span className='text-gray-300 font-light md:text-base text-sm'>{likes}</span>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <p className="text-gray-300 font-light md:text-base text-sm">
                    {msg}
                </p>
            </div>
        </div>
    )
}

export default Comment