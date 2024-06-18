import React from 'react'

const ButtonImageP = ({image , style}) => {
  return (
    <button type='button' className={`bg-[#4563ff]  gap-2 p-4 rounded-xl  ${style}`} >
    <img src={image} alt="" className='w-6' />
</button>
  )
}

export default ButtonImageP