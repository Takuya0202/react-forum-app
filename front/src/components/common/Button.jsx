import React from 'react'

const Button = ({children , type , bg , color}) => {
  return (
    <button className='px-[30px] py-[10px] bg-black text-white rounded-md w-[120px]'
    type={type ?? ''} style={{'backgroundColor' : bg , 'color' : color}}>{children}</button>
  )
}

export default Button
