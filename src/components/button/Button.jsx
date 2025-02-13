import React from 'react'

const Button = ({text, handlePopup}) => {
  return (
    <button className='max-w-[200px] bg-[#FBA403] py-2.5 px-6 rounded-md uppercase cursor-pointer hover:bg-[#fba403c5]' onClick={handlePopup}>{text}</button>
  )
}

export default Button