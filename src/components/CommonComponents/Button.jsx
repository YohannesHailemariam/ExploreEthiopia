import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button
    onClick={onClick}
    className='border-[.5px] rounded-[20px] text-3xl py-3 px-10 
    bg-white text-black hover:text-white hover:bg-black'>
        {text}
    </button>
  )
}

export default Button