import React from 'react'

const BannerAboutCard = ({ img, title, text }) => {
    return (
        <div className='lg:w-[395px] w-full flex flex-col items-center justify-between gap-10 p-5'>
            <img src={img} alt={'about-card-img_' + `${title}`} />
            <div className='w-full flex flex-col items-center text-center justify-center'>
                <h3 className='font-medium text-[30px] leading-10'>{title}</h3>
                <p className='text-[#B3B3B3] font-normal text-[16px] leading-[26px]'>{text}</p>
            </div>
        </div>
    )
}

export default BannerAboutCard