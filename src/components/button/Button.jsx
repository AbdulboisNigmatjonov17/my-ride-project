import React from 'react'

const Button = ({text, handlePopup}) => {
  return (
    <button className='max-w-[200px] bg-[#FBA403] py-2.5 px-6 rounded-md uppercase' onClick={handlePopup}>{text}</button>
  )
}

export default Button