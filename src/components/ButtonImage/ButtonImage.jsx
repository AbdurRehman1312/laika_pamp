import React from 'react'
import * as images from "../../assets"
const ButtonImage = ({ name, style}) => {
    return (
        <button type='button' className={`font-bungee bg-black flex items-center gap-2 py-4 px-6 text-sm lg:text-xl text-nowrap rounded-xl  ${style}`} >
             <img src={images.rocket} alt="" className='md:w-6 w-5' />
            {name}
        </button>
    )
}

export default ButtonImage