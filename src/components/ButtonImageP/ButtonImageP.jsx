import React from 'react'

const ButtonImageP = ({image , style}) => {
  return (
    <button type='button' className={`bg-[#4563ff] md:p-3 p-3 md:rounded-xl rounded-md   ${style}`} >
    <img src={image} alt="" className='md:w-6 w-5 flex-shrink-0' />
</button>
  )
}

export default ButtonImageP