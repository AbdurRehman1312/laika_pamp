import React from 'react'
import * as images from "../../assets"
const Loading = () => {

    return (
        <div className="loading h-[100vh] w-full flex justify-center items-center bg-[#02070f]">
            <img src={images.loadingAnimation} alt="" className='w-[50%] md:w-[30%]' />
        </div>
    )
}

export default Loading