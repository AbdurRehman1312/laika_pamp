import React from 'react'
import * as images from "../../assets"
const ButtonRocket = ({style}) => {
  return (
    <button type='button' className={`bg-black gap-2 p-4 rounded-xl  ${style}`} >
    <img src={images.rocket} alt="" className='md:w-7 w-4' />
</button>
  )
}

export default ButtonRocket