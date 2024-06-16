import React from 'react'

const ButtonTextImageP = ({name, image, style}) => {
  return (
    <button type='button' className={`bg-[#4563ff] flex items-center gap-2 py-4 px-5 text-sm lg:text-base text-nowrap rounded-xl  ${style}`} >
    <img src={image} alt="" className='w-4' />
   {name}
</button>
  )
}

export default ButtonTextImageP