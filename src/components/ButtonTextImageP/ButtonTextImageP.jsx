import React from 'react'

const ButtonTextImageP = ({ name, image, style, img = true }) => {
  return (
    <button type='button' className={`bg-[#4563ff] flex items-center justify-center gap-2 md:py-4 py-3 md:px-5 px-3 text-sm lg:text-base text-nowrap md:rounded-xl rounded-md  ${style}`} >
      {img && <img src={image} alt="" className='md:w-4 w-3' />}
      {name}
    </button>
  )
}

export default ButtonTextImageP