import React from 'react'

const ButtonTextP = ({name,onClick, style}) => {
  return (
    <button type='button' className={`bg-[#4563ff] text-base text-nowrap rounded-xl  ${style}`} onClick={onClick} >
    {name}
</button>
  )
}

export default ButtonTextP