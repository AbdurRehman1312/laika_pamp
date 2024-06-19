import React from 'react'
import * as images from "../../assets"
import { Link } from 'react-router-dom'
const ButtonRocket = ({ style }) => {
  return (
    <Link to={"/pamp"}>
      <button type='button' className={` gap-2 p-4 rounded-xl  ${style}`} >
        <img src={images.rocket} alt="" className='md:w-7 w-4' />
      </button >
    </Link>
  )
}

export default ButtonRocket