import React from 'react'

const Card = ({ img, title, text }) => {
    return (
        <div className='w-full p-3 hover:scale-105 duration-200'>
            <div className='w-full overflow-hidden'>
                <img src={img} alt={`${title}-` + `${title}`} height={215} className='object-cover w-full hover:scale-125 duration-300' />
            </div>
            <div className='bg-[#383838] h-[180px] py-3.5 px-[15px] flex flex-col justify-between'>
                <h3>{title}</h3>
                <p className='text-[#B3B3B3] h-auto'>{text}</p>
                <div className='w-full flex justify-end'>
                    <button className='uppercase text-[#FBA403] cursor-pointer'>learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Card