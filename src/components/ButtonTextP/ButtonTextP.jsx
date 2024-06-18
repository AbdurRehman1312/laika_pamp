import React from 'react'

const ButtonTextP = ({name, style}) => {
  return (
    <button type='button' className={`bg-[#4563ff] text-base text-nowrap rounded-xl  ${style}`} >
    {name}
</button>
  )
}

export default ButtonTextP