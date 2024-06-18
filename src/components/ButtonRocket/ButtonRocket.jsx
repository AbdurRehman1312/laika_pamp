import React from 'react'
import * as images from "../../assets"
const ButtonRocket = ({style}) => {
  return (
    <button type='button' className={`bg-black  gap-2 p-4 rounded-xl  ${style}`} >
    <img src={images.rocket} alt="" className='w-7' />
</button>
  )
}

export default ButtonRocket